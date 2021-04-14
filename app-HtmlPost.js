const express = require('express')
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.status(200)
    res.write('<h1> Home Page </h1>')
    res.write('<p> User can browse a list of foods </p>')
    res.write('<ul>')
    res.write('<li> <a href = "/food/1"> Food 1 </a> </li>')
    res.write('<li> <a href = "/food/2"> Food 2 </a> </li>')
    res.write('</ul>')
    res.end('<a href = "/filter"> Set your food filter </a>')
})

app.get('/food/:id', (req, res) => {
    res.status(200)
    res.write('<h1> Details of one food </h1>')
    res.write('<h2> Food ' + req.params.id + ' </h2>' )
    res.write('<p> The user clicked on a food. Display details of that food here. </p>')
    res.end('<p> Requested food id is: ' + req.params.id + '</p>')
})

app.get('/filter', (req, res) => {
	res.status(200)
	res.write('<h1> Food filter </h1>')
	res.write('<p> User can see the food filter page. They enter their filter details and press a Submit button to send the details. </p>')
	res.write('<form method="post" action="/filter">')
	res.write('<label for="vegan"> Vegan </label>')
	res.write('<input type="checkbox" name="vegan"> <br />')
	res.write('<label for="organic"> Organic </label>')
	res.write('<input type="checkbox" name="organic"> <br />')
	res.write('<input type="submit" value="Send filter details">')
	res.end('</form>')
})

app.post('/filter', (req, res) => { // POST - user's food filter data
	res.status(200)
	res.write('<h1> Filter details posted </h1>')
	res.write('<p> The user has posted their filter details to the server. We should record details and forward the user to the home page, which is now filtered. They sent:</p>')
	res.write(JSON.stringify(req.body))
	res.end('<p> <a href="/">Browse foods</a> </p>')
})

app.all('*', (req, res) => {  // 'default' route to catch invalid routes
	res.status(404).send('<p>invalid request</p>')
})

app.listen(8080, () => {
    console.log('Food Buddy server is listening for requests...')
})