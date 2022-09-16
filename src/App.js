import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }

  const toggleMode = () => {
    // removeBodyClasses()
    // console.log(cls);
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
      document.title = "Texttify - Dark mode";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success");
      document.title = "Texttify - Light mode";
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="Textify" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container mb-3">
          {/* <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route> */}
            <TextForm showAlert={showAlert} heading="Try Textify - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
            {/* </Route>
          </Routes> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
