const express=require('express');
const path=require("path");
const { googleCalendarPlugin } = require('@fullcalendar/google-calendar');



const app=express();

app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public"))); 
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>
{
    res.render("test.ejs");
});

app.listen(9999,()=>
{
    console.log("listening");
});