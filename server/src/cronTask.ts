const cron = require('node-cron');
import http from './http';

const cities = [
    { "city": "Toronto", "latitude": 43.70, "longitude": -79.42 },
    { "city": "Vancouver", "latitude": 49.28, "longitude": -123.12 },
    { "city": "Montreal", "latitude": 45.51, "longitude": -73.59 },
    { "city": "Calgary", "latitude": 51.05, "longitude": -114.07 },
    { "city": "Ottawa", "latitude": 45.42, "longitude": -75.70 },
    { "city": "Edmonton", "latitude": 53.54, "longitude": -113.49 },
    { "city": "Quebec City", "latitude": 46.81, "longitude": -71.21 },
    { "city": "Winnipeg", "latitude": 49.90, "longitude": -97.14 },
    { "city": "Halifax", "latitude": 44.65, "longitude": -63.58 },
    { "city": "Saskatoon", "latitude": 52.13, "longitude": -106.67 }
]

const run = () => {
    // run every minute
    cron.schedule('* * * * *', () => {
        cities.map(city => {
            http.fetchObservationWeather(city.latitude, city.longitude)
        }
    )
    });

    // run every hour
    cron.schedule('* * * * *', () => {
        cities.map(city => {
            http.fetchShortTermWeather(city.latitude, city.longitude)
        }
    )
    });
}

export default {
    run
}


