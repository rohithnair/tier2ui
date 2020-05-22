import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
 
  menuButton: {
    marginRight: 10,
    marginLeft: 60
  },
  ButtonMargin:{
    marginLeft: 60
  },
  Button: {
    marginLeft: 40,

  },
  Border: {
    borderBottomStyle: 'solid',
    borderWidth: '1px',
    marginLeft: 40,
  },
  Heading:
  {
    marginLeft: 40,
  }
};

function Header(props) {
   const { classes,history} = props;
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const list = (anchor) => (
    <div
      
    role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button component="a" key={'All'} color="inherit"  target="_self" href="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText  primary={'All'} />
          </ListItem>

          <ListItem button component="a" key={'Recent'} color="inherit" target="_self" href="/recent">
            <ListItemIcon><TodayIcon /></ListItemIcon>
            <ListItemText  primary={'Recent'} />
          </ListItem>

          <ListItem button component="a" key={'Deleted'} color="inherit" target="_self" href="/deleted">
            <ListItemIcon><DeleteIcon /></ListItemIcon>
            <ListItemText  primary={'Deleted'} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button component="a" key={'DownloadAll'} color="inherit" target="_blank" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_All.csv"  rel="nofollow noopener noreferrer">
            <ListItemIcon><CloudDownloadIcon /></ListItemIcon>
            <ListItemText  primary={'Download All'} />
          </ListItem>

          <ListItem button component="a" key={'DownloadRecent'} color="inherit" target="_blank" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_Recent.csv"  rel="nofollow noopener noreferrer">
            <ListItemIcon><CloudDownloadIcon /></ListItemIcon>
            <ListItemText  primary={'Download Recent'} />
          </ListItem>

          
          <ListItem button component="a" key={'DownloadDeleted'} color="inherit" target="_blank" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_Deleted.csv"  rel="nofollow noopener noreferrer">
            <ListItemIcon><CloudDownloadIcon /> </ListItemIcon>
            <ListItemText  primary={'Download Deleted'} />
          </ListItem>

      </List>
      <Divider />
      <List>
      <ListItem button component="a" key={'TellYourStory'} color="inherit" target="_self" href="https://amazingstories.uktiersponsors.co.uk"  rel="nofollow noopener noreferrer">
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText  primary={'Tell Your Story'} />
       </ListItem>

       <ListItem button component="a" key={'JoinSlack'} color="inherit" target="_blank" href="https://join.slack.com/t/uktiersponsors/shared_invite/enQtNzU3NDIxNjExOTU4LTZlODFjNDMyZDlkNWE5NjY4OTE2OTc4NjZmMGM2NmE2MWVhMjdjMjMzYmQ2MzAzYzZhNDU4Zjc1OWZhZDc5ZDA"  rel="nofollow noopener noreferrer">
            <ListItemIcon><ForumIcon /></ListItemIcon>
            <ListItemText  primary={'Join slack community'} />
       </ListItem>

      </List>
      <Divider />

      <ListItem button component="a" key={'SourceCode'} color="inherit" target="_blank" href="https://github.com/rohithnair/tier2ui"  rel="nofollow noopener noreferrer">
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText  primary={'Github'} />
       </ListItem>

    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        


          <Typography variant="h6" color="inherit">
            Tier 2 Sponsors List
          </Typography>
      
          {['left'].map((anchor) => (
  <React.Fragment key={anchor}>
     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)} >
      <MenuIcon />
    </IconButton>
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      {list(anchor)}
    </SwipeableDrawer>
  </React.Fragment>
))}

        {history.location.pathname==='/recent'?
<Typography variant="h6" color="inherit"  className={classes.Heading}>
Recently added companies
</Typography>:<React.Fragment></React.Fragment>}

{history.location.pathname==='/deleted'?
<Typography variant="h6" color="inherit"   className={classes.Heading}>
Deleted companies
</Typography>:<React.Fragment></React.Fragment>}

       </Toolbar>
      </AppBar>
    </div>
  );
}

 

export default withRouter(withStyles(styles)(Header));
