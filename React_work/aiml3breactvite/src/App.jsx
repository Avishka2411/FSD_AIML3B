import React, { useState } from 'react'
import Student from './Student';
import logo from './abeslogo.png'
import StudentState from './StudentState';
import ImageManipulation from './ImageManipulation';
import UseEffectWorking from './UseEffectWorking';
import Login from './Login';
import Registration from './Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainLayout from './MainLayout';

function App() {
const[shareData,setShareData]=useState();
  // const studentdata={
    
  //   college:"ABES Engineering College",
  //   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
  //   roll:"56565656",
  //   name:"Rahul Kumar",
  //   branch:"CSE AIML",
  //   section:"B"
    
  // }
  
  return (
    <div style={{marginLeft:"300px"}}>
  {JSON.stringify(shareData)}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>} >
     <Route path='/login' element={<Login  />} />
    <Route path='/reg' element={<Registration regdata={setShareData}/>} />
    </Route>
      </Routes>
      
      </BrowserRouter>
    
    
    
    {/* <div>{JSON.stringify(shareData)}</div> */}

{/* <Registration regdata={setShareData}  /> */}

      {/* <UseEffectWorking /> */}

      {/* <ImageManipulation /> */}
      {/* <Student data={studentdata} /> */}
      {/* <StudentState /> */}

      {/* <Student 
      pic={<img src={logo} height={100} width={100} />}
      college="ABES Engineering College" roll="21478778" name="Rahul Kumar" branch="CSE AIML" section="B" />
     */}
    {/* <Student 
      pic={<img src={logo} height={100} width={100} />}
       roll="898989" name="Vansh Tomer" branch="CSE AIML" section="B" /> */}

{/* <Student 
      pic={<img src={logo} height={100} width={100} />}
      college="ABES Engineering College" roll="674646" name="Ansh tomer" branch="CSE AIML" section="B" /> */}
    
    </div>
  )
}

export default App
