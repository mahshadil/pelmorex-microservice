export type Info = {
    temperature: string | number;
    feelsLike: string | number;
    relativeHumidity: string | number;
    pressure: {
        value: string | number;
    };
    wind: {
        direction: string;
        speed: string | number;
    };
}


export type City = { city?: string, latitude: number, longitude: number }


export type WeatherData = {
    id: string | number;
    lat: string | number;
    long: string | number;
    temp: string | number;
    wind: string | number;
    humidity: string | number;
    timestamp: number | Date;
}