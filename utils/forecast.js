const request =  require('request')

const forecast = (longitude, latitude, unit, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=<access-key>&query='+longitude+','+latitude+'&units='+unit
    // destructured body from response.body i.e picking only body from response.body = {body} 
    // applied shorthand to url:url
    request({ url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to access weather service at this point. Try again later!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try with a valid coordinate!', undefined)
        }else{ 
            const weather_data =  body
            const temperature = weather_data.current.temperature
            const feelslike =  weather_data.current.feelslike
            const weather_descriptions = weather_data.current.weather_descriptions
            const weather_report = "It's "+weather_descriptions+ " with temperature of "+temperature+" degrees and feels like "+feelslike + " degrees."
            callback(undefined, weather_report)
        }

    })

}


module.exports =  forecast