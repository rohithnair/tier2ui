import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    color:theme.primary
  },

  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  ButtonMargin:{
    marginLeft: 40
  },
  appBar: {
    top: 'auto',
    bottom: -20,
  },
  toolbar: {
  //  alignItems: 'center',
    justifyContent:'inherit',
  },
  Button: {
    marginLeft: 40
  },
});

function Footer(props) {
  const { classes } = props;
  return (
      <React.Fragment>
    <AppBar position="relative" color="primary" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
                © UKTierSponsors  2019. Disclaimer : Data extracted from&nbsp;&nbsp;

                <Link className={classes.link}   color="inherit"
       href="http://www.ukba.homeoffice.gov.uk/sitecontent/documents/employersandsponsors/pointsbasedsystem/pbsregisterofsponsors"
 target="_blank" rel="noopener noreferrer" 
    >Sponsor List</Link>&nbsp;&nbsp;of &nbsp;
    <Link className={classes.link} color="inherit"
      href="http://www.ukba.homeoffice.gov.uk/" target="_blank" rel="noopener noreferrer" 
    >UKBA
  </Link>
  
</Toolbar>
</AppBar>
</React.Fragment>
  );
}

 

export default withStyles(styles)(Footer);
