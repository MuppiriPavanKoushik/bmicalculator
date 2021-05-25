const bodyParser = require("body-parser");
const express=require("express");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
});
app.post("/",function(request,response){
    var num1=Number(request.body.num1);
    var num2=Number(request.body.num2);
    var result=num1/(num2*num2);
    response.send("your bmi index is :"+result);
    response.send("your are in correct bmi");
});

app.listen(5000,function(){
    console.log("server started at port 5000");
});

