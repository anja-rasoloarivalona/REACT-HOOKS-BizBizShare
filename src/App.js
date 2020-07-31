import React, { useState} from 'react'
import './App.css';
import {Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actionTypes from './store/actions/actionTypes'

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
  
  const errors = useSelector(state => state.errors)
  const dispatch = useDispatch()


  const onChangeInputHandler = (id, value) => {
     setForm({ ...form, [id]: value })
     errors.length !== 0 && dispatch({ type: actionTypes.CLEAR_ERRORS})
  }

  const submitInputHandler = (e, id, list, value) => {
        e.preventDefault()
        const isInputValid = validateInput(value)
        if(isInputValid){
          const updatedList = [...lists[list], value]
          setlist({ ...lists, [list]: updatedList })
          setForm({ ...form, [id]: ''})
        } else {
          dispatch({ 
            type: actionTypes.ADD_ERROR,
            message: `The submitted ${id} is too short. At least 3 characters are required.`
          })
        }
  }

  const removeErrorHandler = errorMessage => {
    dispatch({
      type: actionTypes.REMOVE_ERROR,
      message: errorMessage
    })
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
        {errors.length > 0 && <Errors errors={errors} onClick={removeErrorHandler} />}
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
