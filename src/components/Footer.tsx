import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  // Using react-portfolio-template originally designed by Yuji Sato.
  // Usage granted by MIT License
  return (
    <footer>
      <div>
        <a href="https://github.com/kazare" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/kazarejoynes/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
