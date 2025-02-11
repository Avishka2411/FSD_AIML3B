const fs=require("fs");
function myReadFile(){
    try{
        fs.readFile("dummy.txt","utf-8",(err,data)=>{
            if(err) throw err;
            console.log("file data:",data)
        });

    }
    catch(err){
        console.log("File Reading error ",err.message);
    }
}
function myWriteFile(data){
    try{
        fs.writeFile("dummy.txt",data,(err)=>{
            if(err) throw err;
            console.log("successfully written file");
        });
    }
    catch(err){
        console.log("File Writing Error",err.message);

    }
}

myReadFile();
const data="Hello my name is Avishka and I am a Btech Student";
myWriteFile(data);
myReadFile();