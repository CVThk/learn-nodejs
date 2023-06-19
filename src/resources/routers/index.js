const siteRouter = require('./site');

function routers(app) {
    app.use('/', siteRouter);
}

module.exports = routers;