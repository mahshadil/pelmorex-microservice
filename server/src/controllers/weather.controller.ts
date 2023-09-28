import { Request, Response, NextFunction } from 'express';
import * as  weatherHandler from '../handlers/weather.handler';


export const getShortTermWeather = async (req: Request, res: Response, next: NextFunction) => {
    const latitude = Number(req.query.lat)
    const longitude = Number(req.query.long)
    const response = await weatherHandler.getShortTermWeather(latitude, longitude)
    res.json(response)
}

export const getObservationWeather = async (req: Request, res: Response, next: NextFunction) => {
    const latitude = Number(req.query.lat)
    const longitude = Number(req.query.long)
    const response = await weatherHandler.getObservationWeather(latitude, longitude)
    res.json(response)
}