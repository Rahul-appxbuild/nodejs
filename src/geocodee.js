// console.log('starting')

// setTimeout(() =>{
//     console.log('2 secnd timer')
// },2000)
// setTimeout(()=>)
// console.log('stopping')
const request = require('request')
 
// const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=s'

// request({ url: url, json: true}, function(error, response) {
//         // console.log(response.body.current)
//         console.log('currently the temp is ' + response.body.current.temperature +' .There is a '+ response.body.current.precip + '% chance of rain')
// })
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/nagpur.json?access_token=pk.eyJ1IjoiYmF0c3ktLSIsImEiOiJja3MxbGhob28wbGo1MnBwZXJkNGNmbzVnIn0.MDmzgGl8d-Tsfi1Wb39dDg&limit=1'
// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } 
//     else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })
geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiYmF0c3ktLSIsImEiOiJja3MxbGhob28wbGo1MnBwZXJkNGNmbzVnIn0.MDmzgGl8d-Tsfi1Wb39dDg&limit=1'
    request({ url, json: true }, (error, {body})=>{
        if (error) {
                    callback('check your connetion',undefined)
        } 
        else if (body.features.length === 0) {
                    callback('unable to find location ',undefined)
        } 
         else {
                 callback(undefined,{
                 latitude: body.features[0].center[1],
                  longitude: body.features[0].center[0],
                  location:  body.features[0].place_name
                })
                    
            }
    })
}

module.exports = geocode