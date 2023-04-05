import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
            return(
            <>
            <Helmet>
            <meta charSet="utf-8" />
            <title>UKTiersponsors- Privacy Policy</title>
            <link  href="%PUBLIC_URL%/privacy-policy" />
            <meta name="description" content="This page displays the privacy policy of UKTiersponsors."/>
            </Helmet>
            <Box sx= {{marginTop:3, marginLeft:3, fontFamily:'"Roboto","Helvetica","Arial",sans-serif',fontSize:'1.125rem'}}>

             <Typography variant="h4" sx= {{marginBottom:1}}>Privacy Policy</Typography>

            <Typography>At UKTiersponsors, accessible from <Link href="https://uktiersponsors.co.uk">https://uktiersponsors.co.uk</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by UK Tiersponsors and how we use it. </Typography>
            
            <Typography>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. </Typography>
            
            <Typography variant="h5" sx= {{marginTop:3, marginBottom:1}}>General Data Protection Regulation (GDPR)</Typography>
            <Typography>We are a Data Controller of your information. </Typography>
            
            <Typography>UkTiersponsors legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information: </Typography>
            <List dense={true} sx={{fontSize:'1rem'}}>
                <ListItem>UkTiersponsors needs to perform a contract with you</ListItem>
                <ListItem>You have given UkTiersponsors permission to do so</ListItem>
                <ListItem>Processing your personal information is in UkTiersponsors legitimate interests</ListItem>
                <ListItem>UkTiersponsors needs to comply with the law</ListItem>
            </List>
              
            <Typography>UkTiersponsors will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. </Typography>
            
            <Typography>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us. </Typography>
            <Typography>In certain circumstances, you have the following data protection rights: </Typography>
            <List dense={true} sx={{fontSize:'1rem'}}>
                <ListItem>The right to access, update or to delete the information we have on you.</ListItem>
                <ListItem>The right of rectification.</ListItem> 
                <ListItem>The right to object.</ListItem>
                <ListItem>The right of restriction.</ListItem>
                <ListItem>The right to data portability</ListItem>
                <ListItem>The right to withdraw consent</ListItem>
            </List>
            
            <Typography variant="h5" sx= {{marginTop:3, marginBottom:1}}>Log Files</Typography>
            
            <Typography>UK Tiersponsors follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. </Typography>
            
            <Typography variant="h5" sx= {{marginTop:3, marginBottom:1}}>Cookies and Web Beacons</Typography>
            
            <Typography>Like any other website, UK Tiersponsors uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. </Typography>
            
            <Typography variant="h5" sx= {{marginTop:3, marginBottom:1}}>Google DoubleClick DART Cookie</Typography>
            
            <Typography>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a> </Typography>
            
            
            <Typography variant="h5" sx= {{marginTop:3, marginBottom:1}}>Privacy Policies</Typography>
            
            <Typography>You may consult this list to find the Privacy Policy for each of the advertising partners of UK Tiersponsors. </Typography>
            
            <Typography>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on UK Tiersponsors, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. </Typography>
            
            <Typography>Note that UK Tiersponsors has no access to or control over these cookies that are used by third-party advertisers. </Typography>
            
            <Typography variant="h5" sx= {{marginTop:3, marginBottom:1}}>Third Party Privacy Policies</Typography>
            
            <Typography>UK Tiersponsors's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </Typography>
            
            <Typography>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. </Typography>
            
            <Typography>Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in UK Tiersponsors. This policy is not applicable to any information collected offline or via channels other than this website. </Typography>
            
            <Typography variant="h5" sx= {{marginTop:3, marginBottom:1}}>Consent</Typography>
            
            <Typography sx= {{marginBottom:3}}>By using our website, you hereby consent to our Privacy Policy and agree to its terms. </Typography></Box></>)

}

export default PrivacyPolicy;