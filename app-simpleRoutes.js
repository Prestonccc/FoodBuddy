 const express = require('express')
 const app = express();

 app.get('/', (req, res) => {
     res.send('<h1> Home Page </h1>')
 })

 app.get('/food/:id', (req, res) => {
     res.send('<h1> Details of one food </h1>')
 })

 app.get('/filter', (req,res) => {
     res.send('<h1> Food filter </h1>')
 })

 app.get('*', (req, res) => {
     res.status(404).send('<p> Invaild request </p>')
 })

 app.listen(8080, () => {
     console.log('Food Buddy server is listening for requests...')
 })