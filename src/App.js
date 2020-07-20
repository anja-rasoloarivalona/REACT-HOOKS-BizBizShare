import React, { Component } from 'react'
import './App.css';
import {Route, Switch } from 'react-router-dom'

// APP VIEWS
import Home from './views/Home/Home'
import Names from './views/Names/Names'
import Animals from './views/Animals/Animals'

// COMPONENTS
import Errors from './components/Errors/Errors'
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: '',
        animal: ''
      },
      namesList: [],
      animalsList: [],
      errors: []
    }
  }
  submitInputHandler = (e, id, list, value) => {
    e.preventDefault()
    // Check if input is valid
    const isInputValid = this.validateInput(value)

    if(isInputValid){
      this.setState(prevState => ({
        ...prevState,
        // Add the value to the corresponding list
        [list]: [ ...prevState[list], value ],
        form: {
          ...prevState.form,
          // Reset the corresponding input value
          [id]: ''
        },
      }))
    } else {
      const errorMessage = `The submitted ${id} is too short. At least 3 characters are required.`
      this.addErrorHandler(errorMessage)
    }
  }

  onChangeInputHandler = (id, value) => {
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [id]: value
      },
      errors: []
    }))
  }

  validateInput = (value) => {
    if(value.trim().length > 2){
      return true
    } else {
      return false
    }
  }

  addErrorHandler = errorMessage => {
    this.setState(prevState => ({
      ...prevState,
      errors: [...prevState.errors, errorMessage ]
    }))
  }

  removeErrorHandler = index => {
    this.setState(prevState => ({
      ...prevState,
      errors: prevState.errors.splice(index, 1)
    }))
  }

  
  render() {
    const { form, namesList, animalsList, errors } = this.state
    return (
      <div className="container">
        <div className="app">
          <Navigation />
          {errors && <Errors errors={errors} onClick={this.removeErrorHandler}/>}
          <div className="app__view">
            <Switch>
              <Route exact path="/" render={() => 
                    <Home
                        form={form}
                        onChange={this.onChangeInputHandler}
                        onSubmit={this.submitInputHandler}
                    />
               }/>
              <Route path="/names" render={() => <Names namesList={namesList}/>}/>
              <Route path="/animals" render={ () => <Animals animalsList={animalsList}/>}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
