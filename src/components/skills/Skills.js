import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedAccordions from './List';
import '../../stylesheet/skills.css';

function Skills() {
  return (
    <Box className="explorer">
      <div className="title">
        <Typography variant="p">Explorer</Typography>
      </div>
      <div className="accordion">
        <CustomizedAccordions />
      </div>
    </Box>
  );
}

export default Skills;
