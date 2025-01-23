import React from 'react';
import Link from '@mui/material//Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


function Footer() {

  return (
    <React.Fragment>
      <AppBar position="relative" color="primary">
        <Toolbar>
          © UKTierSponsors  2025. Disclaimer : Data extracted from&nbsp;&nbsp;

          <Link color="inherit"
            href="http://www.ukba.homeoffice.gov.uk/sitecontent/documents/employersandsponsors/pointsbasedsystem/pbsregisterofsponsors"
            target="_blank" rel="noopener noreferrer"
          >Sponsor List</Link>&nbsp;&nbsp;of &nbsp;
          <Link color="inherit"
            href="http://www.ukba.homeoffice.gov.uk/" target="_blank" rel="noopener noreferrer"
          >UKBA.
          </Link> &nbsp; This website is not affiliated to government.

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}



export default Footer;
