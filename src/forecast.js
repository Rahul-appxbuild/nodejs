const request = require('request')

 forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=11275c040dbd51bd3ece8f03f849a73f&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,{
                sen: body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.",
                winds: body.current.wind_speed,
                windr: body.current.wind_dir
            })
        }
    })
}

module.exports = forecast