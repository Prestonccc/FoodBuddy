const express = require('express')
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/' + 'index.html')
})

app.get('/food/:id', (req, res) => {
    res.sendFile(__dirname + '/static/' + 'showFood.html')
})

app.get('/filter', (req,res) => {
    res.sendFile(__dirname + '/static/' + 'filter.html')
})

app.post('/filter', (req, res) => {
    res.send('stub: process incoming filter data')
})
app.get('*', (req, res) => {
    res.status(404).send('<p> Invaild request </p>')
})

app.listen(8080, () => {
    console.log('Food Buddy server is listening for requests...')
})