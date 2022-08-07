const express=require("express");
const bodyparser=require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res){
   var weight=parseFloat(req.body.weight);
   var height=parseFloat(req.body.height);
   var bmi =weight/(height*height);
   res.send("your BMI is"+bmi);
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){
    var num1=parseInt(req.body.number1);
    var num2=parseInt(req.body.number2);
    var result=num1+num2;
    res.send(333);
});
app.listen(3000,function(){
    console.log("serverstarted at port 3000");
});
