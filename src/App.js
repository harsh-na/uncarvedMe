import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Copyright from './Components/Copyright/Copyright';
function App() {

  return (
    <div>
      <NavigationBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
      <Copyright/>
    </div>
  );
}

export default App;
