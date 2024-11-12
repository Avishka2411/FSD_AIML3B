// function cCompiler() {
//   return "C Compiler"
// }
// function javaCompiler() {
//   return "Java Compiler"
// }
// function selectLanguage (clbk) {
//  return "You have selected: "+clbk()
// }

// const result = selectLanguage(cCompiler);
// console.log(result);

/*function selectLanguage(language="no compiler selected"){
    let data=language;
    if(language == "c")
    {
        function cCompiler()
        {
            return "C Compiler";
        }
        data = cCompiler();
    }
    if (language =="java")
    {
        function javaCompiler()
        {
            return "Java Compiler";
        }
        data = javaCompiler();
    }
    return data;
}
const result=selectLanguage("java");
console.log(result);

console.dir(document); // Logs the document object to the console
const div = document.getElementsByClassName("parent"); 
console.dir(div); 
div[0].innerHTML = "<h2 style='color:red;'>Hello Everyone</h2>"; 
const h1 = document.createElement("h1");
h1.innerHTML = "DOM Manipulation";
h1.style.backgroundColor = "cyan";
console.log(h1);
div[0].appendChild(h1);
const img = document.createElement("img");
img.src = "./logo1.jpg";
img.setAttribute("height","200");
console.log(img);

div[0].appendChild(img);
const btn=document.getElementById("btn")
const disp=document.getElementById("disp");
console.dir(disp);
function getData(){
    console.log("Get Data Called");
    disp.innerHTML="<h2>Hello, You have called GetData</h2>"
}
btn.addEventListener("click",getData);*/


const myPromise = new Promise((resolve, reject) =>
{
    // "Producing Code" (May take some time)

    let a=12;
    if(a>10){
      resolve({name:"Rahul",branch:"AIMLCSE"});
     }
     else{ 
      reject("Rejected"); 
      } 
    }
);
    
  

        myPromise.then(msg=>console.log(msg.name))
        .catch(msg=>{console.log(msg)});

