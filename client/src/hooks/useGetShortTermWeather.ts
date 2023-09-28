import axios from 'axios';

const useGetShortTermWeather = () => {
    const getShortTermWeather = async (lat: string | number, lng: string | number) => {
        const result = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/short-term-weather?lat=${lat}&long=${lng}`)
        return result?.data
    } 

    return [getShortTermWeather]
}

export default useGetShortTermWeather