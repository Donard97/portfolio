import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../stylesheet/footer.css';

function Footer() {
  return (
    <Box className="footer">
      <ul className="footerList">
        <li>
          <Typography variant="p" component="div">find me by:</Typography>
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <GitHubIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
    </Box>
  );
}

export default Footer;
