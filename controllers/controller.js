 
const category = require('../models/category');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'category' , streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'info',
      path: './info.log'  // log ERROR and above to a file
    }
  ]});


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
    category.findAll().then((category) => {log.info(JSON.stringify(category)); res.send(category)}).catch(err => { log.info(err); console.log(err)})
 
}

//Get one row
const fetchOne= (req,res) => { 
    const {id} = req.query;
    category.findAll({where : {category_id : id }}).then((category) => { log.info(JSON.stringify(category)) ; res.send(category)}).catch(err => {console.log(err)})
}

//Editing a field by finding with ID. 
const editOne= (req,res) => { 
    const {id,name} = req.query;
    category.findByPk(id).then((category) => {category.name = name ; return category.save() }).then((category)=> {log.info(JSON.stringify(category)) ; res.send(category)}).catch(err => {console.log(err)})
}

module.exports = {
    editOne,
    fetchOne,
    insertOne,
    fetchAll
}
