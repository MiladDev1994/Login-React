import {Route , Routes} from 'react-router-dom';
import './App.css';
import Navbar from "./elements/Navbar";
import Home from "./elements/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";

function App() {
  return (
      <>
          <Navbar />
          <div className={"bg-secondary"} style={{minHeight:"100vh"}}>
              <div style={{height:"70px"}}></div>
              <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/register"} element={<Register />} />
                  <Route path={"/login"} element={<Login />} />
              </Routes>
          </div>

      </>
  );
}

export default App;
