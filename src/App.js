
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'darkBlue';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - Light Mode"
    }
  }

  // tut13
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Navbar title="tut5" aboutText="aboutText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        {/* <About/>  */}
      </div>
      {/* <Navbar/>   */}
      {/* It will take the values from default props */}
    </>
  );
}

export default App;
