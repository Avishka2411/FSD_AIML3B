const http=require("http");
const port=3003;
const server=http.createServer((req,res)=>{
    const data=[{
        id:1,
        name:"Avishka",
        email:"avishka11b141@gmail.com"
    }];
    const url=req.url;
    if(url=="/users" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(data));

    }
    else if(url=="/user" && req.method=="POST"){


    }
    else{
        res.writeHead(404,{"Content-Type":"application/json"});
        res.write(JSON.stringify({status:"fail",message:"page not found"}));
    }
   res.end();
})

server.listen(port,(err)=>{
    try{
         if(err) throw err;
         console.log('Server is Running on port ${port}');

    }
    catch(err){
        console.log("Server Error", err.message);

    }
})
// server is stateless

