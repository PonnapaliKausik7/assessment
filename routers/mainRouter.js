const router = require('./childRouters/router.js')

const mainRouter = (app) => {

    router.router('/api',  app);

}

module.exports = {mainRouter};