import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import '../../stylesheet/navbar.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar" sx={{ backgroundColor: '#020409', color: '#89919a' }}>
          <Typography component="div" className="menuList" sx={{ flexGrow: 0.02 }}>
            <Link to="/">_hello</Link>
          </Typography>
          <Typography component="div" className="menuList" sx={{ flexGrow: 0.02 }}>
            <Link to="/about">_about-me</Link>
          </Typography>
          <Typography component="div" className="menuList" sx={{ flexGrow: 0.02 }}>
            <Link to="/projects"> _projects</Link>
          </Typography>
          <Typography component="div" className="menuList" sx={{ flexGrow: 0.02 }}>
            <Link to="/contact"> _contact</Link>
          </Typography>
        </Toolbar>
        <Box className="underNav" />
      </AppBar>
    </Box>
  );
}
