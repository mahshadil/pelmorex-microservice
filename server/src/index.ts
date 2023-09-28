import { exit } from 'process';
import cronTask from  './cronTask'
import database from './database';
import { Request, Response, NextFunction } from 'express';

const express = require('express')
const cors = require('cors');

const app = express()
const port = 8080

const routes = require ('./routes');


app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
    // Allows any origin to access your API
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Specifies the allowed HTTP methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  next();
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Use our routes
app.use('/', routes);

app.listen(port, async () => {
  try{
    await database.setupTables()
  }catch(err){
    console.error('Unable to setUp the database', err)
    exit(1)
  }
  cronTask.run()
  console.log(`Example app listening on port ${port}`)
})