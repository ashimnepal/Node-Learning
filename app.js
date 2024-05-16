const express = require('express')
const app = new express()
//We need to builtin package path to handle the file paths
const path = require('path')
// To use public folder for all static resources use this line of code
app.use(express.static('public'))




const port = 4000 //Giving out the port number
app.listen(port, ()=>{
console.log(`App listening on port ${port}`)
})





app.get('/',(req,res)=>{
    res.send(`


    <h2 style='color: red; text-align:center;'>This is the route thingy</h2>
    
    
    
    `)
    })

















    

//Using route for file home.html
app.get('/home',(req,res)=>{
    console.log(path.join(process.cwd(),'public','pages','home.html'))
    res.sendFile(path.join(process.cwd(),'public','pages','home.html'))
})

//Using route for file about.html
app.get('/about',(req,res)=>{
    console.log(path.join(process.cwd(),'public','pages','aboutus.html'))
    res.sendFile(path.join(process.cwd(),'public','pages','aboutus.html'))
})

//Using route for file contact.html
app.get('/contact',(req,res)=>{
    console.log(path.join(process.cwd(),'public','pages','contact.html'))
    res.sendFile(path.join(process.cwd(),'public','pages','contact.html'))
})

//Using route for file support.html
app.get('/support',(req,res)=>{
    console.log(path.join(process.cwd(),'public','pages','support.html'))
    res.sendFile(path.join(process.cwd(),'public','pages','support.html'))
})