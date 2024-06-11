import React from "react";
import Dmenu from './Dmenu';
import "./Navbar.css";


function App() {
  return (
      <nav className="main-nav">
          <div className="left"> <Dmenu /> </div>
          <div className="center">
              <h1>OAH API CATELOG</h1>
          </div>
    </nav>
  );
}

export default App;
