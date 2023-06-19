const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// template engine
var engine = handlebars.engine({ 
    defaultLayout: 'main',
    extname : '.hbs'
});
app.engine('hbs', engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get("/", (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })