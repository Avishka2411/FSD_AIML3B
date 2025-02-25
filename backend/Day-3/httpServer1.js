const http=require("http");
const fs=require("fs/promises");
const server=http.createServer(async(req,res)=>{
    const url = req.url;
    if(url=="/home" && req.method=="GET"){
        const data=await fs.readFile("home.html","utf-8");
        res.write(data);

    }
    else if(url=="/about" && req.method=="GET"){
        const data=await fs.readFile("about.html","utf-8");
        res.write(data);
    }
    else{
        res.write("<h1>Error Page</h1>")
    }
    res.end();
})

Server.listen(3001,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is not responding")
    }

})
