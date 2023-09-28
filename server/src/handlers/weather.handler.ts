import database from '../database'

export const getShortTermWeather = async (lat: number, long: number) => {
    const result = await database.models.getShortTermWeather(lat, long);
    return result
}

export const getObservationWeather = async (lat: number, long: number) => {
    const result = await database.models.getObservationWeather(lat, long);

    return result
}