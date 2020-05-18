const controller=require('../../controllers/controller.js')
const router= (route, app) => {
    app.get(`${route}/fetchAll` , controller.fetchAll);
    app.get(`${route}/fetchOne` , controller.fetchOne);
    app.post(`${route}/insertOne` , controller.insertOne);
    app.put(`${route}/editOne` , controller.editOne);
}

module.exports = {
     router
}
