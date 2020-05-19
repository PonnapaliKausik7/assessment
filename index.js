const mongo=require('./mongo');
const env = require('./env');
const express = require('express');
const db = require('./util/database');
const {  notFound , handleError } = require('./util/error-handler')
//Getting sequelize object
const sequelize = require('./util/sequelize');
//logging
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'assessment' , streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'info',
      path: './info.log'  // log info and above to a file
    }
  ]});


//For auto creating models from tables in Data base
const sequelizeAuto = require('./util/sequelizeAuto');

const app = new express()

const router = require('./routers/mainRouter.js')

router.mainRouter(app)
app.use(notFound)
app.use(handleError)

log.info('welcome');
//log.warn({lang: 'english'}, 'au revoir');

const service = {
    async run() {
        
        //await mongo.connect(env.MONGO_CONNECTION_STRING, env.DB_NAME);
        await app.listen(env.PORT);
        
        //The below command should be run only if there are any new tables in SQL data bases. 
        
        //await sequelizeAuto.run(err => {console.log(err)});
        
        //The below code will sync all the models in models folder and create table schema in DB.
        await sequelize.sync();
        
        console.log(`Connectiing to port ${env.PORT} ${env.DB_NAME}`)
    },
};

service.run().catch((err) => {console.log("error starting server", err)



process.exit(1);
});

