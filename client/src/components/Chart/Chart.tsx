import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    Point
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useGetShortTermWeather from '../../hooks/useGetShortTermWeather';
import { City, WeatherData } from '../../types'
import { format } from 'date-fns'
import Box from '@mui/material/Box';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const Chart = ({ selectedCityPosition }: { selectedCityPosition: City }) => {
    const [data, setData] = useState({labels: [], datasets: []} as ChartData<"line", (number | Point | null)[], unknown>)
    const [getShortTermWeather] = useGetShortTermWeather()
    useEffect(() => {
        const fetchWeatherData = async () => {
            const weatherData = await getShortTermWeather(selectedCityPosition.latitude, selectedCityPosition.longitude)
            const tempArr = [] as any
            const windArr = [] as any
            const humidityArr = [] as any
            const timestampArr = [] as any
            weatherData.map((data: WeatherData) => {
                timestampArr.push(format(new Date(data.timestamp), 'MM/dd HH:mm'))
                tempArr.push(data?.temp)
                windArr.push(data.wind)
                humidityArr.push(data.humidity)
                return null
            })
            const dataset = {
                labels: timestampArr,
                datasets: [
                    {
                        label: 'Wind Speed (Km/H)',
                        data: windArr,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: 'Temperature (\u00b0c) ',
                        data: tempArr,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                    {
                        label: 'Humidity (%)',
                        data: humidityArr,
                        borderColor: 'rgb(67, 239, 124)',
                        backgroundColor: 'rgba(67, 239, 124, 0.5)',
                    },
                ],
            };
            setData(dataset)
          }
      
        fetchWeatherData();
    }, [selectedCityPosition])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Weather Line Chart',
            },
        },
    };

    return (<Box sx={{ width: "50vw" }}><Line options={options} data={data} /></Box>)
}
export default Chart