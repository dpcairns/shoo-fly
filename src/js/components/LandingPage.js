import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router'
import * as FlightActions from "../actions/FlightActions"
import FlightForm from "./FlightForm"
class LandingPage extends React.Component{

    render(){
        let { airportInput, hourInput, findAllFlights, flights } = this.props
        let gateNodes = []
          flights.length > 0 ?
          gateNodes =
                  flights.map(function(item, index)
                  {
                  if (item.airportResources !== undefined) {
                    if (item.airportResources.arrivalGate !== undefined){
                          return <li key={index}>Flight {item.flightNumber} (airline code: {item.carrierFsCode}) arrives at gate {item.airportResources.arrivalGate} at {item.arrivalDate.dateLocal.slice(11, 16)} </li>
                        }
                        else{return <li key={index}>no arrival gate info available for flight {item.flightNumber} (airline code: {item.carrierFsCode}) </li>}
                      }
                        }) :
        gateNodes = []

      return(
      <div className="container">
        <h1>Gate finder</h1>
          <FlightForm findAllFlights={findAllFlights} />
          <ul>
          {gateNodes}
          </ul>
      </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
      flights: state.flights,
      hourInput: state.form.hour,
      airportInput: state.form.airport
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      findAllFlights: (flightInfo) => FlightActions.findAllFlights(flightInfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
