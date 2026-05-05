import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        {/* <div className="image-wrapper">
          <img
            src=""
            alt="Avatar"
          />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/kazare"
              target="_blank"
              rel="noreferrer"
            >
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
          <h1>Kazare Joynes</h1>
          <p>
            I’m a React-focused web developer who turns Figma designs into
            clean, responsive builds. I partner with agencies to handle overflow
            work so they can keep projects moving without stretching their team.
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/kazare"
              target="_blank"
              rel="noreferrer"
            >
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
        </div>
      </div>
    </div>
  );
}

export default Main;
