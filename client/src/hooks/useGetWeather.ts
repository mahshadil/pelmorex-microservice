import axios from 'axios';

const useGetWeather = () => {
    const getWeather = async (lat: string | number, lng: string | number) => {
        const result = await axios.get(`${process.env.REACT_APP_WEATHER_API_HOST}/observation?lat=${lat}&long=${lng}`)
        return result?.data
    } 

    return [getWeather]
}

export default useGetWeather