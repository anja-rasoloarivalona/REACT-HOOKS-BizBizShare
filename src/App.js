import React, { useState} from 'react'
import './App.css';
import {Route, Switch } from 'react-router-dom'

// APP VIEWS
import Home from './views/Home/Home'
import Names from './views/Names/Names'
import Animals from './views/Animals/Animals'

// COMPONENTS
import Errors from './components/Errors/Errors'
import Navigation from './components/Navigation/Navigation'

const App = () => {
  const [form, setForm] = useState({ name: '', animal: '' })
  const [lists, setlist] = useState({ namesList: [], animalsList: [] })
  const [errors, setErrors] = useState([])


  const onChangeInputHandler = (id, value) => {
     setForm({ ...form, [id]: value })
     errors.length !== 0 && setErrors([])
  }

  const submitInputHandler = (e, id, list, value) => {
        e.preventDefault()
        const isInputValid = validateInput(value)
        if(isInputValid){
          const updatedList = [...lists[list], value]
          setlist({ ...lists, [list]: updatedList })
          setForm({ ...form, [id]: ''})
        } else {
          addErrorHandler(`The submitted ${id} is too short. At least 3 characters are required.`)
        }
  }

  const addErrorHandler = errorMessage => {
    !errors.includes(errorMessage) && setErrors([...errors, errorMessage])
  }

  const removeErrorHandler = errorMessage => {
    const errorsData = errors.filter( err => err !== errorMessage)
    setErrors(errorsData)
  }

  const validateInput = (value) => {
      if(value.trim().length > 2){
        return true
      } else {
        return false
      }
    }

  return (
    <div className="container">
      <div className="app">
        <Navigation />
        {errors.length > 0 && <Errors errors={errors} onClick={removeErrorHandler}/>}
        <div className="app__view">
          <Switch>
            <Route exact path="/" render={() => 
                  <Home
                      form={form}
                      onChange={onChangeInputHandler}
                      onSubmit={submitInputHandler}
                  />
             }/>
            <Route path="/names" render={() => <Names namesList={lists.namesList}/>}/>
            <Route path="/animals" render={ () => <Animals animalsList={lists.animalsList}/>}/>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
