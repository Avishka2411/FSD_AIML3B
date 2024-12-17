import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({regdata}) {
    const[email,setEmail]=useState();
    const[password,setpassword]=useState();
    const[myname,setName]=useState();
    const[userdata,setuserData]=useState();
    
function getData(e){
    e.preventDefault();
    //console.log(myname,email,password);
    alert("hi"+email+"name:"+myname+"pass:"+password);
const data={
    myname,password,email
}
console.log(data);
//setuserData(data);
regdata(data);

}

  return (
    <div>
      {/* {JSON.stringify(userdata)} */}
      <div style={{color:'red',backgroundColor:'#36c2c5', width:'300px', height:'30px', paddingLeft:'100px'}}>Registration</div>
        <div>
<form>
<div class="form-group">
    <label for="exampleInputname">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputName"  placeholder="Enter Name" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
</form>
            
        </div>
      
    </div>
  )
}

export default Registration