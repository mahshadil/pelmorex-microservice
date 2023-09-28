import { getShortTermWeather, getObservationWeather  } from "./controllers/weather.controller";

const express = require('express');
const router = express.Router();

// Define your GET route
router.get('/short-term-weather',  getShortTermWeather);
router.get('/observation-weather',  getObservationWeather);

module.exports = router;