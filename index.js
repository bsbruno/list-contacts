const express = require('express')
const app  = express()
const port = 8080
const bodyParser = require('body-parser')
const connection = require('./databases/Database')
const saveContacts = require('./databases/SalveContacts')



//connection DB
 connection
.authenticate()
.then(()=>{
    console.log("conexão realizada")
})
.catch((e) =>{
    console.log(e)

})
 


//Render html EJS
app.set('view enginer' , 'ejs');
//case using static arq
app.use(express.static('public'))

//pegando o formulario e pegando os dados do form
app.use(bodyParser.urlencoded({extended:false}))



//routers
app.get("/", (req,res)=>{
    res.render('index.ejs')
})
app.get("/contacts" , (req, res)=>{
    saveContacts.findAll().then(contacts =>{
        res.render("contacts.ejs",{
            contacts:contacts
        })
    })
   
})

app.post("/savContacts" , (req,res) =>{
    let fisrtsname = req.body.fisrtsname
    let lastname = req.body.lastname
    let email = req.body.email
    let phone = req.body.phone

    saveContacts.create({
      fisrtsname:fisrtsname,
      lastname:lastname,
      email:email,
      phone:phone  
  }).then(()=>{
      res.redirect("/contacts")
  })
    //salvando  no BD
})

app.listen(port, ()=>{
    console.log("Working server")
})

