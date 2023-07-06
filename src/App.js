import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode Activated", "success");
      setMode("dark");

      setInterval(() => {
        document.title = "Textutils-Dark";
      }, 2000);

      setInterval(() => {
        document.title = "Textutils-says hii!";
      }, 1500);
    } else {
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Activated", "success");
      document.title = "Textutils-Light";
      setMode("light");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" about="About Us" /> */}

        <Navbar mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className='container my-3'>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch >
        </div>
      </Router >
    </>
  );
}

export default App;
