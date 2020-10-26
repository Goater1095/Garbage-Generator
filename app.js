// set related express module
const express = require('express');
const bodyParser = require('body-parser');
const generateTrash = require('./generator');

const app = express();
const port = 3000;

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set related express-handlebars
const exhbs = require('express-handlebars');
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// set routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/produce', (req, res) => {
  const optionCareer = req.body.career;
  let engineerOn = 0;
  let designerOn = 0;
  let entrepreneurOn = 0;
  if (optionCareer === 'engineer') {
    engineerOn = 1;
  } else if (optionCareer === 'designer') {
    designerOn = 1;
  } else if (optionCareer === 'entrepreneur') {
    entrepreneurOn = 1;
  }

  const trashTalk = generateTrash(optionCareer);
  res.render('index', { trashTalk, engineerOn, designerOn, entrepreneurOn });
});

// listen & start up the server
app.listen(port, () => {
  console.log(`This Server start on http://localhost:${port}`);
});
