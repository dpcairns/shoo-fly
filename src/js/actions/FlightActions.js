import fetchJsonp from 'fetch-jsonp'

export const findAllFlights = (flightInfo, dispatch) => {
  let { airport, hour } = flightInfo
  let day = "31"
  let month = "5"
  let year =  "2016"
  let numberOfHours = "1"
  fetchJsonp(`https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/airport/status/${airport}/arr/${year}/${month}/${day}/${hour}/?appId=56728afe&appKey=c8dae9bbe7cbadf5c82e30d74edb8cf3&utc=false&numHours=${numberOfHours}`
  )
  .then(function (response) {
    return response.json()
    .then(function(json){
      console.table(json.flightStatuses)
    dispatch(
      {
          type: 'FETCH_FLIGHTS',
          payload: json.flightStatuses
        }

  )
})
  .catch(function (response) {
    console.log(response);
  });
})
}
