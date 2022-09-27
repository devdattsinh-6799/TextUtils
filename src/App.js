
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
// import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  //  whether the dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'black';
    showAlert("Dark mode has been enabled", "success");
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText= "About US" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert= {alert}/>
    <div className="container m-auto w-1/2 ">
    {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>
          </Route>
        </Switch> */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;

