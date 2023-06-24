import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
const app = express();

const db = mysql.createPool({
  host: 'crime_db',
  user: 'crimeuser',
  password: 'crimepass',
  database: 'crime'
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Test for home page load
app.get('/', (req, res) => {
  res.send('Home Page')
});

app.listen('3001', () => { })
