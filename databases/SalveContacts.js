const Sequelize = require('sequelize')
const connectio  = require('./Database')


//creating the table
const SaveContacts = connectio.define('salve' , {
    fisrtsname:{
        type:Sequelize.TEXT,
     
    },
    lastname:{
        type:Sequelize.TEXT,
    
    },
    email:{
        type:Sequelize.TEXT,
       
    },
    phone:{
        type:Sequelize.TEXT
        
    }
})

//sync table on DB
SaveContacts.sync({force:false}).then(()=>{})
module.exports = SaveContacts