import axios from 'axios'
import models from '../database/models'

const fetchObservationWeather = async (lat: number, long: number) => {
    try {
        const result = await axios.get(`https://weatherapi.pelmorex.com/v1/observation?lat=${lat}&long=${long}`)
        await models.insertObservationWeather(lat, long, result?.data)
        return
    } catch (err) {
        throw new Error(err as string)
    }
}

const fetchShortTermWeather = async (lat: number, long: number) => {
    const result = await axios.get(`https://weatherapi.pelmorex.com/v1/shortterm?lat=${lat}&long=${long}`)
    for (const term of result?.data?.shortterm) {
        try {
            await models.insertShortTermWeather(lat, long, term)
        } catch (err) {
            throw new Error(err as string)
        }

    }
}


export default {
    fetchObservationWeather,
    fetchShortTermWeather
}