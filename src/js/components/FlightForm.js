import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {createValidator, maxLength, required} from '../middleware/validation'
import * as FlightActions from "../actions/FlightActions"

const fields = ['airport', 'hour']

class FlightFormRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
  };

  render () {
    const {fields: {airport, hour}, handleSubmit, resetForm, submitting} = this.props
    const airportErrorMsg = airport.touched && airport.error ? airport.error : ''
    const hourErrorMsg = hour.touched && hour.error ? hour.error : ''

    return (
      <div className='flightForm'>
          <form onSubmit={handleSubmit( data =>
            this.props.findAllFlights(data)
              )}
          className='form' role='form'>
          <fieldset className='form-group'>
            <label htmlFor='airport'>Which airport?</label> <label className='text-danger'>{airportErrorMsg}</label>
            <input maxLength="3" type='text' className='form-control' id='airport'
              placeholder='Enter the three-letter code for your airport (for example, LAX or PDX)' {...airport} required=''/>
          </fieldset>
          <fieldset className='form-group'>
        <label htmlFor='hour'>Around what hour?</label> <label className='text-danger'>{hourErrorMsg}</label>
        <input type='number' className='form-control' id='hour'
          placeholder='Enter the hour of the day (0-24) are you interested in' {...hour} required=''/>
      </fieldset>
          <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>Find flights
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>
      </div>

    )
  }
}


const FlightFormValidation = createValidator({
  airport: required,
  hour: required
})

export default reduxForm({
  form: 'flightForm',
  fields,
  validate: FlightFormValidation
})(FlightFormRedux)
