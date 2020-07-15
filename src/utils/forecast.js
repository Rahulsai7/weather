const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6cc4481d4b9cf790cd2963c2c08358e5&query= ' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to load mapbox!', undefined)
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions + '. The temperature is ' + body.current.temperature + 'C' + ' and it feels like ' + body.current.feelslike + 'C' + '.The wind direction is ' + body.current.wind_dir + '.')
        }
    });
}
module.exports = forecast;