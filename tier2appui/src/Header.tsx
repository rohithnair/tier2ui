import React, { SyntheticEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TodayIcon from '@mui/icons-material/Today';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { Badge, Box, Button, ListItemButton, Tooltip } from '@mui/material';
import { useAuth } from './AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SecurityIcon from '@mui/icons-material/Security';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {

    const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
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

    const handleLogout =( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/logout", {replace:true});
    }   

    const handleLogin =( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/login", {replace:true});
    }   

    
    const handleAllClick=( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/", {replace:true});
    }   

    const handleRecentClick=( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/recent", {replace:true});
    }   

    const handleDeletedClick=( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/deleted", {replace:false});
    }   

    const handleChatClick=( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/chat", {replace:false});
    }   


    const handleAboutUsClick=( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/about-us", {replace:false});
    }  

    
    const handlePrivacyPolicyClick=( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/privacy-policy", {replace:false});
    }   

    const handleReleasNotesClick=( e:SyntheticEvent) =>  
    {
      e.preventDefault();
      navigate("/release-notes", {replace:false});
    }   


    type anchorType = "left" | "top" | "right" | "bottom";
    const  navigate = useNavigate() ;
    const list = (anchor: anchorType) => (
        <div

            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItemButton onClick={handleAllClick} component="a" key={'All'} color="inherit" target="_self">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'All'} />
                </ListItemButton>

                <ListItemButton onClick={handleRecentClick} component="a" key={'Recent'} color="inherit" target="_self">
                    <ListItemIcon><TodayIcon /></ListItemIcon>
                    <ListItemText primary={'Recent'} />
                </ListItemButton>

                <ListItemButton  onClick={handleDeletedClick} component="a" key={'Deleted'} color="inherit" target="_self">
                    <ListItemIcon><DeleteIcon /></ListItemIcon>
                    <ListItemText primary={'Deleted'} />
                </ListItemButton>

                <ListItemButton  onClick={handleChatClick} component="a" key={'Chat'} color="inherit" target="_self">
                    <ListItemIcon><ChatIcon /></ListItemIcon>
                    <ListItemText primary={'Chat'} />
                </ListItemButton>

                </List>
                <Divider />
                <List> 
                    {isAuthenticated?
                <ListItemButton  onClick={handleLogout} component="a" key={'Logout'} color="inherit" target="_self">
                    <ListItemIcon><LogoutIcon /></ListItemIcon>
                    <ListItemText primary={'Logout'} />  </ListItemButton>:
                    
                    <ListItemButton  onClick={handleLogin} component="a" key={'Login'} color="inherit" target="_self">
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary={'Login'} /> 
                </ListItemButton>}
                </List>
     
            <Divider />
            <List>
                <ListItemButton component="a" key={'DownloadAll'} color="inherit" target="_blank" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_All.csv" rel="nofollow noopener noreferrer">
                    <ListItemIcon><CloudDownloadIcon /></ListItemIcon>
                    <ListItemText primary={'Download All'} />
                </ListItemButton>

                <ListItemButton component="a" key={'DownloadRecent'} color="inherit" target="_blank" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_Recent.csv" rel="nofollow noopener noreferrer">
                    <ListItemIcon><CloudDownloadIcon /></ListItemIcon>
                    <ListItemText primary={'Download Recent'} />
                </ListItemButton>


                <ListItemButton component="a" key={'DownloadDeleted'} color="inherit" target="_blank" href="https://uktiersponsors.blob.core.windows.net/excel/UkTiersponsors_Deleted.csv" rel="nofollow noopener noreferrer">
                    <ListItemIcon><CloudDownloadIcon /> </ListItemIcon>
                    <ListItemText primary={'Download Deleted'} />
                </ListItemButton>

            </List>
            <Divider />
            <List>
                <ListItemButton component="a" key={'JoinSlack'} color="inherit" target="_blank" href="https://join.slack.com/t/uktiersponsors/shared_invite/enQtNzU3NDIxNjExOTU4LTZlODFjNDMyZDlkNWE5NjY4OTE2OTc4NjZmMGM2NmE2MWVhMjdjMjMzYmQ2MzAzYzZhNDU4Zjc1OWZhZDc5ZDA" rel="nofollow noopener noreferrer">
                    <ListItemIcon><ForumIcon /></ListItemIcon>
                    <ListItemText primary={'Join slack community'} />
                </ListItemButton>
            </List>
            <Divider />
            <List>
            <ListItemButton component="a" key={'SourceCode'} color="inherit" target="_blank" href="https://github.com/rohithnair/tier2ui" rel="nofollow noopener noreferrer">
                <ListItemIcon><CodeIcon /></ListItemIcon>
                <ListItemText primary={'Github'} />
            </ListItemButton>
            </List>
            <Divider />
            <List>
            <ListItemButton  onClick={handlePrivacyPolicyClick} component="a" key={'PrivacyPolicy'} color="inherit" target="_self">
                    <ListItemIcon><SecurityIcon /></ListItemIcon>
                    <ListItemText primary={'Privacy Policy'} />  </ListItemButton>:

                   <ListItemButton  onClick={handleReleasNotesClick} component="a" key={'ReleaseNotes'} color="inherit" target="_self">
                    <ListItemIcon><NewspaperIcon /></ListItemIcon>
                    <ListItemText primary={'Release Notes'} />  </ListItemButton>:
                           
                    <ListItemButton  onClick={handleAboutUsClick} component="a" key={'AboutUs'} color="inherit" target="_self">
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary={'About Us'} />  </ListItemButton>:
            </List>             
        </div>
    );

    const location = useLocation();
    const {isAuthenticated, user} = useAuth();
    const title= 'Hi, '+user?.emailAddress;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>



                    <Typography variant="h6" color="inherit">
                        Tier 2 Sponsors List
                    </Typography>

                    {['left' as anchorType].map((anchor: anchorType) => (
                        <React.Fragment key={anchor}>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)} sx={{ marginRight: 3, marginLeft: 3 }}>
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

                    {location.pathname === '/recent' ?
                        <Typography variant="h6" color="inherit">
                            Recently added companies
                        </Typography> : <React.Fragment></React.Fragment>}

                    {location.pathname === '/deleted' ?
                        <Typography variant="h6" color="inherit">
                            Deleted companies
                        </Typography> : <React.Fragment></React.Fragment>}

                     {location.pathname === '/chat' ?
                        <Typography variant="h6" color="inherit">
                            Chat
                        </Typography> : <React.Fragment></React.Fragment>}


                    <Typography variant="h6" color="inherit">

                        <Box sx={{marginLeft:2}}>
                        <a href="https://www.buymeacoffee.com/uktiersponsors" target='_blank' rel="noopener noreferrer" color='inherit' >
                            <IconButton color="inherit" style={{ color: "white" }}>
                                <FavoriteIcon />
                            </IconButton>
                        </a>
                        </Box>
                        </Typography>


                    <Typography variant="h6" color="inherit">
                        <Box sx={{marginLeft:2}}>
                            <IconButton  
                              sx={{ color: 'orange', '&:hover': { color: 'yellow', transform: 'scale(1.2)' }, transition: '0.2s' }}
                            onClick={handleChatClick} color="inherit" style={{ color: "orange" }}>
                                <ChatIcon />
                            </IconButton>
                        </Box>
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block', marginLeft:'auto' } }}>
                        {isAuthenticated? 
                        <>
                        <IconButton><Tooltip color="inherit" title={title} placement="right-end"><AccountCircleIcon  color="inherit"></AccountCircleIcon></Tooltip></IconButton>
                        <Button  color="inherit"  onClick={handleLogout}>Logout</Button></>: 
                        <Button  color="inherit" variant="text" onClick={handleLogin}>Login</Button>}
                        </Box>
                        
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
