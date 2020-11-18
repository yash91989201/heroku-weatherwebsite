const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;
const host =process.env.HOST || "127.0.0.1";
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));
//ROUTING
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/about/*",(req,res)=>{
    res.render("404 ERROR page");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("/weather/*",(req,res)=>{
    res.render("404 ERROR page");
});
app.get("*",(req,res)=>{
    res.render("404 ERROR page");
});
app.listen(port,host,()=>{
    console.log(`Server is running at Port:${port}`);
});