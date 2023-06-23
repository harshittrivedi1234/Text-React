import './App.css';
import Alert from './components/Alert';
 import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

 
 

function App() {

  const togglemode=()=>{
    if(modes==='light'){
      Setmode('dark');
      document.body.style.backgroundColor='#A9A9A9';
      showalert("Dark mode has been enabled","success");
      // document.title = 'TextUtils-Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils ia Amazing';
        
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'TextUtils is Great';
        
      // }, 1500);
    }
    else{
      Setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
      // document.title = 'TextUtils-Light Mode';
    }
  }

  const [modes, Setmode] = useState('light');
  const [alert, Setalert] = useState(null);

  const showalert=(message,type)=>{
    Setalert({
      msg:message,
    type : type

    })
    setTimeout(() => {
      Setalert(null);
      
    }, 1500);

  }
  
  return (
     <>
     <Router>
    {/* //  <Navbar title= "textutils" textabout="Aboutus" /> */}
    {/* <Navbar/> */}

    
    <Navbar title= "textutils" modes={modes} togglemode={togglemode}/>
    <Alert alert={alert}/>
 
    
    <div className="container my-3">
    <Routes>
    
      <Route exact path='/about' element={<About modes={modes}/>} />
      <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the words" modes={modes}/>} />
          
          {/* <TextForm showalert={showalert} heading="Enter the words" modes={modes}/> */}
        
        </Routes>

    

    {/* <About/> */}



    </div>
    
    </Router>
   
    </>
    
  );
}

export default App;
