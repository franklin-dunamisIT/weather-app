const request  = require('request')
const geocode = require('./utils/geocode')
const forecast =  require('./utils/forecast')
const location = process.argv[2]

if (location){
    geocode( location,  (error, {latitude, longitude, location}) => {
        if (error){
            return console.log('Error:', error)
        }
        // m = celcius
        // f = fahrenheight
        forecast( latitude,  longitude, 'm', (error, forecastData) => {
            if (error){
                console.log('Error:', error)
            }
            console.log(location)
            console.log(forecastData)
        })

    })

}else{
    console.log('Enter a location to view its weather forecast.')
}

