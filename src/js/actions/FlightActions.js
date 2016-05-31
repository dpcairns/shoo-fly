import axios from 'axios'

export const findAllFlights = (flightInfo, dispatch) => {
  let { airport, hour } = flightInfo
  let day = "31"
  let month = "5"
  let year =  "2016"
  let numberOfHours = "1"
  axios.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/${airport}/arr/${year}/${month}/${day}/${hour}/?appId=56728afe&appKey=c8dae9bbe7cbadf5c82e30d74edb8cf3&utc=false&numHours=${numberOfHours}`
  )
  .then(function (response) {
    console.log(response.data.flightStatuses);

    dispatch(
      {
          type: 'FETCH_FLIGHTS',
          payload: response.data.flightStatuses
        }

  )
})
  .catch(function (response) {
    console.log(response);
  });
}
