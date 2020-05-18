 
const category = require('../models/category');

//Insert data into tables
const insertOne= (req,res) => { 
    const { id,name } = req.query
    
    category.create({
        category_id: id,
        name: name,
    }).then().catch(err => {console.log(err)})
    res.send(200)
}

//Get all rows
const fetchAll= (req,res) => { 
    
    category.findAll().then((category) =>  res.send(category)).catch(err => {console.log(err)})
}

//Get one row
const fetchOne= (req,res) => { 
    const {id} = req.query;
    category.findAll({where : {category_id : id }}).then((category) =>  res.send(category)).catch(err => {console.log(err)})
}

//Editing a field by finding with ID. 
const editOne= (req,res) => { 
    const {id,name} = req.query;
    category.findByPk(id).then((category) => {category.name = name ; return category.save() }).then((category)=> res.send(category)).catch(err => {console.log(err)})
}

module.exports = {
    editOne,
    fetchOne,
    insertOne,
    fetchAll
}
