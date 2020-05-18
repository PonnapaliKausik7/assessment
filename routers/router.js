const controller=require('../controllers/controller.js')
const router= (app) => {
    app.get('/api/fetchAll' , controller.fetchAll);
    app.get('/api/fetchOne' , controller.fetchOne);
    app.post('/api/insertOne' , controller.insertOne);
    app.put('/api/editOne/' , controller.editOne);
}

module.exports = {
     router
}
