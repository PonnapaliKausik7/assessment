const mongo=require('./mongo');
const env = require('./env');
const express = require('express');
const db = require('./util/database');

//Getting sequelize object
const sequelize = require('./util/sequelize');

//For auto creating models from tables in Data base
const sequelizeAuto = require('./util/sequelizeAuto');

const app = new express()

const router = require('./routers/router.js')



router.router(app)


const service = {
    async run() {
        
        await mongo.connect(env.MONGO_CONNECTION_STRING, env.DB_NAME);
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

