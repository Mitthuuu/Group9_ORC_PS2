const express = require('express');
const path = require('path');
const app = express();
const port = 5000;


//our pug demo endpoint
// app.get("/demo", (req ,res)=>{
//     res.status(200);
//     res.render('demo' ,{title:'Pug' , message:'HI this is the pug demo here ' , para:'this is the example paragraph introduced to learn pug'})
// })
var data = {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}


app.post("/about" ,(req ,res )=>{
    res.send(data)
});
let result;
			result = parsedBody['result'];
			console.log("Sum of Array from Python: ", result);
app.listen(port ,()=>{
    console.log(`Express app started at port ${port}`)
});
