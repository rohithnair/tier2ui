import { Divider, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Helmet } from "react-helmet";

const ReleaseNotes = () =>  {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }));
      
    return(<>
    <Helmet>
        <meta charSet="utf-8" />
        <title>UKTiersponsors- Release notes</title>
        <link  href="%PUBLIC_URL%/release-notes" />
        <meta name="description" content="This page displays the information about updates to UKTiersponsors website."/>
        </Helmet>
    
    
     <Typography variant= "h4"  sx= {{marginBottom:3, marginTop:2}}>Release Notes</Typography><Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >

          <Item>
            <Typography variant= "h5" >
            21/01/2025</Typography>
            <Typography variant= "h6" >
            Version 2.0.1</Typography>
            <List sx={{listStyleType: 'disc', pl: 4 }}>
            <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText
                    primary="Relaunch using new hosting provider"
                  />
                  <ListItemText sx={{ display: 'list-item' }} 
                    primary="Relaunched the website with a new hosting provider"
                  />
                </ListItem>
                </List>
            </Item>

        <Item>
            <Typography variant= "h5" >
            01/04/2023</Typography>
            <Typography variant= "h6" >
            Version 2.0.0</Typography>
            <List sx={{listStyleType: 'disc', pl: 4 }}>
            <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText
                    primary="Addition of account functionality to keep track of job search"
                  />
                  <ListItemText sx={{ display: 'list-item' }} 
                    primary="Addition of new pages to clarify intent of website"
                  />
                </ListItem>
                </List>
            </Item>
          
      </Stack></>)

}

export  default ReleaseNotes;