import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import {ChatState} from './ChatProvider'

export default function Dmenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdown, setdropdown] = useState(["Pathway Archive", "Pathway Call History", "cs-mtm","cs-scheduler", "RSA Mailing", "Pathway Icuei3"])
  const { setSelectedChat } = ChatState();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {dropdown.map((data, index) => (
          <MenuItem key={index} onClick={handleClose}>
            
            <NavLink exact style={{ textDecoration: 'none' }} onClick={() => setSelectedChat(data)} to="/Screen2">{data}</NavLink>
          </MenuItem>
      ))}
        
      </Menu>
    </div>
  );
}
