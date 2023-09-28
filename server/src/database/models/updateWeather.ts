import db from '../database';

const insertShortTermWeather = async (lat: number, long: number, weather= {} as any) => {
    const text = `INSERT INTO short_term_weather(
        lat,
        long,
        temp,
        wind,
        humidity,
        timestamp
    ) VALUES ( $1, $2, $3, $4, $5, to_timestamp($6))
    ON CONFLICT (lat, long, timestamp) 
    DO NOTHING`;

    const values = [lat, long, weather.temperature?.value || 0, weather.wind?.speed || 0, weather.relativeHumidity || 0, new Date(weather.time?.utc || Date.now()).getTime() / 1000];
    const result = await db.query(text, values);
    return result.rows;
};


const insertObservationWeather = async (lat: number, long: number, weather= {} as any) => {
    const text = `INSERT INTO observation_weather(
        lat,
        long,
        temp,
        wind,
        humidity,
        timestamp
    ) VALUES ( $1, $2, $3, $4, $5, to_timestamp($6))
    ON CONFLICT (lat, long, timestamp) 
    DO NOTHING`;
    const values = [lat, long, weather.temperature || 0, weather.wind?.speed || 0, weather.relativeHumidity || 0, new Date(weather.time?.utc || Date.now()).getTime() / 1000];
    const result = await db.query(text, values);
    return result.rows;
};





export default {
    insertObservationWeather,
    insertShortTermWeather
}