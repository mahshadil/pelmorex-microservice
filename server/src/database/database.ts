import { Pool } from 'pg';

const dotenv = require('dotenv')
dotenv.config({ path: './.env.development' });

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST_URL,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: Number(process.env.DB_PORT),
});

export default {
    query: (text: string, params?: any) => pool.query(text, params),
};