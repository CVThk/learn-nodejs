const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const routers = require('./resources/routers');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

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

routers(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })