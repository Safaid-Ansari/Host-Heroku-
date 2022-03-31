const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;
// const requests = require('requests');
const { addAbortSignal } = require('stream');

// console.log(__dirname);

// console.log(path.join(__dirname,"../public"));
const staticpath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

// to set the view engine 
app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partialsPath);

// template engine route 
app.get("", (req, res) => {
    res.render("index",
        {

            Name: "Safaid"
        });
})

app.get("/about", (req,res) => {
   res.render('about');
})

app.get('*', (req, res) => {

    res.render('404');
})


// build in  middleware
// for static data access
// app.use(express.static(staticpath));


// app.get('/',(req,res)=>{

//     // res.send('Hello Safaid-Ansari good job happy learning ');
// })
// app.get('/about', (req, res) => {
//     res.send('you are currently on about page ')
// })
// app.get('/contact', (req, res) => {
//     res.send('<h1>you are currently on contact page</h1>');
// })

app.get('/temp', (req, res) => {
    res.send([
        {
            id: 1,
            Name: 'safaid',
            course: ''
        },
        {
            id: 1,
            Name: 'safaid',
            course: 'BCA',
        },
        {
            id: 1,
            Name: 'safaid',
            course: 'BCA',
        },
        {

            id: 1,
            Name: 'safaid',
            course: 'BCA',

        },


    ]);
})

app.listen(8000, () => {
    console.log((`listening port 8000 ${port} `));
})