import React from "react"
import Navbar from './Navbar'
import { Link, useNavigate } from "react-router-dom";
import {ChatState} from './ChatProvider'


import './Screen2.css'
function Screen2() {
    // console.log(props)
  const navigate = useNavigate();
  const { selectedChat } = ChatState();
  
  return (
      <>
          <Navbar />
          <div className="body">
        <h1>{selectedChat}</h1>          
              <div className="button-group">
                <button className="btn red" onClick={() => navigate('/Screen3')}  >DEV</button>
                <button className="btn green">TEST</button>
                <button className="btn blue">STAGE</button>
              </div>
              {/* <div className="boxbody"> A</div>
              <div className="boxbody"> A</div>
              <div className="boxbody"> A</div> */}
          </div>
      </>
  );
}

export default Screen2;
