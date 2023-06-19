const express = require('express');
const routers = express.Router();

const siteController = require('../controllers/SiteController');

routers.use('/search', siteController.search);
routers.use('/', siteController.home);

module.exports = routers;