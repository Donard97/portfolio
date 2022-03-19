import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
          <Link href="https://www.linkedin.com/in/donardgolaj/">
            <LinkedInIcon />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Donard97">
            <GitHubIcon />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/donardgolaj">
            <TwitterIcon />
          </Link>
        </li>
      </ul>
    </Box>
  );
}

export default Footer;
