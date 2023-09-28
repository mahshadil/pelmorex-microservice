import db from '../database';

const getShortTermWeather = async (lang: number, long: number) => {
    const text = `SELECT * FROM short_term_weather WHERE lat = $1 AND long = $2 ORDER BY timestamp ASC`;
    const values = [lang, long];
    const result = await db.query(text, values);
    return result.rows;
};


const getObservationWeather = async (lang: number, long: number) => {
    const text = `SELECT * FROM observation_weather WHERE lat = $1 AND long = $2 ORDER BY timestamp ASC`;
    const values = [lang, long];
    const result = await db.query(text, values);
    return result.rows;
};


export default {
    getShortTermWeather,
    getObservationWeather
}