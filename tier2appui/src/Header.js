import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  ButtonMargin:{
    marginLeft: 40
  },
  Button: {
    marginLeft: 40
  },
};

function Header(props) {
  const { classes ,history} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Tier 2 Sponsors List
          </Typography>
          <span className={classes.ButtonMargin}>
          <Button className={classes.Button} color="inherit" onClick={() => history.push('/')}>Recently added</Button>
          <Button className={classes.Button} color="inherit" onClick={() => history.push('/all')}>All</Button>
          <Button className={classes.Button} color="inherit" onClick={() => history.push('/deleted')}>Deleted companies</Button>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

 

export default withRouter(withStyles(styles)(Header));
