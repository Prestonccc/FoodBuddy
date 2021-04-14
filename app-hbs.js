// Food Buddy server using Handlebars
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const app = express();

app.engine('hbs', exphbs({
	defaultlayout: 'main',
	extname: 'hbs'
}))

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {  // /index.html
	res.render('index')
})

app.get('/food/:id', (req, res) => {
	res.render('showFood', {
		foodId: req.params.id
	})
})

app.get('/filter', (req, res) => {
	res.render('filter')
})

app.post('/filter', (req, res) => { // receives POST data - user's food filter 
	res.render('filterPost', {
		filterData: JSON.stringify(req.body)
	})
})

app.all('*', (req, res) => {  // 'default' route to catch user errors
	res.status(404).render('404')
})

app.listen(8080, () => {
	console.log('Food Buddy server listening for requests ...')
})
