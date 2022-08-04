
import React, { useState } from 'react';
import Alert from './components/Alert';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import Workplace from './components/Workplace';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null)
},1500)
}
  
  const togleMode = ()=>{
    if (mode === 'dark'){
      setMode("light");
      document.body.style.backgroundColor='#dee4e1';
      document.body.style.color='black';
      showAlert('light mode Enabled successfully','success' );
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor='#0b1c37';
      document.body.style.color='white';
      showAlert('dark mode Enabled successfully', 'success')   
    }
  }

  return (
    <>
  <Navbar title='TextUtils' togleMode={togleMode} mode={mode}/>
  <Alert alert={alert}/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workplace showAlert={showAlert} inst="enter your text here" mode={mode}/>}/>
       <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter> */}
  
  <Workplace showAlert={showAlert} inst="enter your text here" mode={mode}/>
  {/* <About/> */}
    
    </>
  );
}

export default App;

