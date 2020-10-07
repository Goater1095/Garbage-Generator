// set related express module
const express = require('express')
const app = express()
const port = 3000
const generateTrash = require('./generator')


//set related express-handlebars 
const exhbs = require('express-handlebars')
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/produce', (req, res) => {
  const optionCareer = req.query.career
  const trashTalk = generateTrash(optionCareer)
  res.render('index', { trashTalk })
})

// listen & start up the server
app.listen(port, () => {
  console.log(`This Server start on http://localhost:${port}`)
})