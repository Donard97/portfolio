import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedAccordions from './List';
import '../../stylesheet/skills.css';

function Skills() {
  return (
    <Box className="explorer">
      <div>
        <Typography variant="p" className="skillTitle">Explorer</Typography>
      </div>
      <CustomizedAccordions />
    </Box>
  );
}

export default Skills;
