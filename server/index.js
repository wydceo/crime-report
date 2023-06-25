import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
const app = express();

const db = mysql.createPool({
  host: 'mysql_db',
  user: 'MYSQL_USER',
  password: 'MYSQL_PASSWORD',
  database: 'crimes'
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Test for home page load
app.get('/', (req, res) => {
  res.send('Home Page')
});
// All records
// Accessing from url eg: http://localhost:3050/api/crimes
app.get('/crimes', (req, res) => {
  const SelectQuery = "SELECT * FROM crimes";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
});

// All records by 'Reported Date'
// Accessing from url eg: http://localhost:3050/api/crimesbydate?reported_date="01/07/2029"
app.get('/crimesbydate', (req, res) => {
  const SelectQuery = `SELECT * FROM crimes Where reported_date = ${req.query.reported_date}`;
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
});
// Get count for 'Offence count' by 'Offence Level 1 Description'
// Accessing from url eg: http://localhost:3050/api/count
app.get('/count', (req, res) => {
  const SelectQuery = `SELECT offence_level_1, count(offence_count) FROM crimes GROUP BY offence_level_1`;
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
});

app.listen('3001', () => { })
