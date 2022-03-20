/* eslint-disable */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import CssIcon from '@mui/icons-material/Css';
import '../../stylesheet/accordionSkills.css';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: `none`,
  color: `#89919a`,
  marginLeft: `15px`,
  fontSize: `15px`,
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  marginTop: `-15px`,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  textDecoration: `none`,
  paddingLeft: `50px`,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="list">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <FolderIcon sx={{color: `#e36363`}}/>
          <Typography variant="p" sx={{padding: `4px`}}>HTML/CSS</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion">
          <ul>
            <li>Boostrap</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <FolderIcon sx={{color: `#d0c64d`}}/>
          <Typography variant="p" sx={{padding: `4px`}}>JavaScript</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <FolderIcon sx={{color: `#5cc227`}}/>
          <Typography variant="p" sx={{padding: `4px`}}>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Redux</li>
            <li>React Boostrap</li>
            <li>Material UI</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <FolderIcon sx={{color: `#39cb9f`}}/>
          <Typography variant="p" sx={{padding: `4px`}}>Ruby</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <FolderIcon sx={{color: `#2ea1c7`}}/>
          <Typography variant="p" sx={{padding: `4px`}}>Ruby on Rails</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel5d-header">
          <FolderIcon sx={{color: `#146bd2`}}/>
          <Typography variant="p" sx={{padding: `4px`}}>PostgreSQL</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
