import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const styles = {
 
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  ButtonMargin:{
    marginLeft: 40
  },
  Button: {
    marginLeft: 40,

  },
  Border: {
    borderBottomStyle: 'solid',
    borderWidth: '1px',
    marginLeft: 40,
  }
};

function Header(props) {
  const { classes ,history} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" color="inherit">
            Tier 2 Sponsors List
          </Typography>
      
          {history.location.pathname === '/' || ((history.location.pathname !== '/deleted')  && 
          (history.location.pathname !== '/recent')
          ) ?
          <Button className={classes.Border} color="inherit" onClick={() => history.push('/')}>All</Button>
          :   <Button className={classes.Button} color="inherit" onClick={() => history.push('/')}>All</Button>
             }

          {history.location.pathname === '/recent' ?
          <Button className={classes.Border} color="inherit" onClick={() => history.push('/recent')}>Recently added</Button>
          :  <Button className={classes.Button} color="inherit" onClick={() => history.push('/recent')}>Recently added</Button>
           
           }
        
 {history.location.pathname === '/deleted' ?
          <Button className={classes.Border} color="inherit" onClick={() => history.push('/deleted')}>Deleted companies</Button>
       : <Button className={classes.Button} color="inherit" onClick={() => history.push('/deleted')}>Deleted companies</Button>
            } 

<Button className={classes.Button} color="inherit" aria-haspopup="true" onClick={handleClick}>
 Csv Download
</Button>
<Menu
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}  component="a" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_All.csv"  rel="nofollow noopener noreferrer"
                >All</MenuItem>
    <MenuItem onClick={handleClose}  component="a" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_Recent.csv"   rel="nofollow noopener noreferrer"
                >Recent</MenuItem>
   <MenuItem onClick={handleClose}  component="a" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_Deleted.csv"  rel="nofollow noopener noreferrer"
                >Deleted</MenuItem>
</Menu>

<Button className={classes.Button} color="inherit" href="https://github.com/rohithnair/tier2ui" target="_blank" rel="nofollow noopener noreferrer">Source Code</Button>
          
       </Toolbar>
      </AppBar>
    </div>
  );
}

 

export default withRouter(withStyles(styles)(Header));
