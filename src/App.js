import React from "react"
import {Route,Routes } from "react-router-dom";
import Home from './Home';
import Screen2 from "./Screen2";
import Screen3 from './Screen3';


const App=()=>{
  return (<>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Screen2" element={<Screen2 />}/>
              <Route exact path="/Screen3" element={<Screen3/>}/>
      
      
           </Routes>
    </>
)}

export default App;