import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';

const flight = (state = "", action) => {
  switch (action.type) {
    case 'PUT_ONE_FLIGHT_IN_STATE':
      return Object.assign({}, {
      _id: action._id
          })
    default:
      return state
  }
}

const flights = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FLIGHTS':
      return [
        ...action.payload
      ]
    default:
      return state
  }
}

const WholeApp = combineReducers({flight, flights, form: formReducer})

export default WholeApp
