const express= require("express");
const app = express();
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/final.html");
});
app.get("/signUp",function(req,res){
    res.sendFile(__dirname + "/signUp.html");
});
app.get("/return",function(req,res){
    res.redirect("/");
});
app.get("/index",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/plus",function(req,res){
    res.sendFile(__dirname + "/payment1.html");
});
app.get("/pro",function(req,res){
    res.sendFile(__dirname + "/payment2.html");
});
app.get("/pro-plus",function(req,res){
    res.sendFile(__dirname + "/payment3.html");
});
app.get("/final",function(req,res){
    res.sendFile(__dirname + "/final.html");
});
app.get("/forget",function(req,res){
    res.sendFile(__dirname + "/forget22.html");
});
app.get("/otp",function(req,res){
    res.sendFile(__dirname + "/opt.html");
});
app.listen(3000,function(req,res){
    console.log("Server is running at port 3000");
});
// Award Space
