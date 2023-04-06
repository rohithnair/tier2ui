import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return(<><Helmet>
        <meta charSet="utf-8" />
        <title>UKTiersponsors- About Us</title>
        <link  href="%PUBLIC_URL%/about-us" />
        <meta name="description" content="This page displays the information about UKTiersponsors."/>
        </Helmet>
          <Paper> <Box sx= {{marginBottom:2}} display="flex" flexDirection="column">
        <Typography variant= "h4"  sx= {{marginBottom:3}}>About Us</Typography>
        <Typography  sx= {{marginBottom:1}}>UKTiersponsors started in 2013, aiming to provide search functionality on top of pdf list provided by UK government. Then, catergorisation by industries were added and then subsequently website of the company was added to enhance the list</Typography>
        <Typography>From 2020, the government started providing CSV list and that has made searching better, but UKTiersponsors are committed to providing an easier interface for search</Typography>

   
        <Typography variant= "h5" sx= {{marginBottom:3,marginTop:2}} >Application details</Typography>
        <Typography> The application data is refreshed every 7 pm GMT</Typography>
        <Typography>Some companies license information is consolidated so the count from actual csv of government site and the application may be different</Typography>
     
        
        <Typography variant= "h5" sx= {{marginBottom:3,marginTop:2}} >Disclaimer</Typography>
        <Typography> We are not affiliated to the government. We just source the information from the UK government provided sponsor list.</Typography>
        <Typography>We also do not provide recruitment services to people. The sole aim of this website is providing a search interface and nothing else. </Typography>
        <Typography >Please be aware that, UKTiersponsors will not collect any money in the name of recruitment and so any thirdparty claiming to be from UKTiersponsors should be dealt accordingly</Typography>
        
        </Box>

    </Paper></>)
}

export default AboutUs;