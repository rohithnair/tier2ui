import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TierApi from './services/TierApi';
import {Helmet} from "react-helmet";
import Website from './images/link.png'
import Youtube from './images/youtube.png'
import Twitter from './images/twitter.png'
import Facebook from './images/facebook.png'
import LinkedIn from './images/linkedin.png'

function renderDate(value)
{
  var dateLocal = new Date(value);
  return dateLocal.toLocaleDateString('en-GB');
};

const columns = [
  {name:"organisationName",label:'Company'},
  {name:"website",label:'Website',options:{ filter: false,customBodyRender: renderWebsite}},
  {name:"socialWebsite",label:'Social website',options:{ customBodyRender: renderSocialWebsite}},
  {name:"town",label:'Town'},
  {name:"industry",label:'Industry'},
  {name:"mainTier",label:'Main Tier'},
  {name:"subTier",label:'Sub Tier'},
  {name:"dateAdded",label:'Date Added',options: { customBodyRender: renderDate}}
];

function renderWebsite(value,tableMeta)
{
  if(tableMeta.rowData !==undefined)
  if(value !==undefined)
  return(
   <div>
    {value.length > 0 ? <a href={value} target="_blank" rel="nofollow noopener noreferrer"> <img src={Website} alt={value}/> </a> :null }
    </div>);
    
}

function renderSocialWebsite(value,tableMeta)
{
  if(tableMeta.rowData !==undefined)
  if(value !==undefined)
  if(tableMeta.rowData[2] !== undefined)
  return(
   <div>
    {tableMeta.rowData[2].indexOf("twitter") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={Twitter} alt={tableMeta.rowData[2]}/> </a>:null}
    {tableMeta.rowData[2].indexOf("facebook") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={Facebook} alt={tableMeta.rowData[2]}/> </a>:null}
    {tableMeta.rowData[2].indexOf("linkedin") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={LinkedIn} alt={tableMeta.rowData[2]}/> </a>:null}
    {tableMeta.rowData[2].indexOf("youtube") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={Youtube} alt={tableMeta.rowData[2]}/> </a>:null}
    </div>);
   
}



class App extends Component {

  componentDidMount()
  {
 
  this.getTierData().then((result) => {
    
    this.setState({data:result.data});
  }).catch(()=>{

    this.setState({data:[],options:this.options});
  });
  }

  constructor()
  {
    super();

    this.onTableChange = this.onTableChange.bind(this);

    this.options ={
      serverSide:false,
      filter: false,
      selectableRows: false, 
      search: true,
      print: false,
      download: false,
      rowsPerPage:10,
      sort:false,
      rowsPerPageOptions:[10,15,20],
      onTableChange :this.onTableChange
      };
      this.state = {data: [],options:this.options};
  }
 

  async getTierData()
  {
   let api = new TierApi();
   return api.GetRecentTier2Providers();
  }

  onTableChange (action, tableState)  {
    
    switch (action) {
       
        case 'filterChange':
            window.scrollTo(0, 0);
        break;

        case 'changePage':
         window.scrollTo(0, 0);
          break;

          case 'changeRowsPerPage':
          window.scrollTo(0, 0);
          
           break;
          default:
          break;
      }
}

  render() {
    return (
      <React.Fragment>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Tier 2 Sponsor List - Recently added companies</title>
      <link href="%PUBLIC_URL%/recentlyadded" />
      <meta name="description" content="UK Tier 2,5 Sponsor Register helps you to search through the companies who provide tier 2 and tier 5 sponsorship visa. This page helps in viewing all the recently added companies. You can search companies based on the name."/>
  </Helmet>
      <div>
        <MUIDataTable
  columns={columns}
  data ={this.state.data}
  options ={this.state.options}
/>
      </div> </React.Fragment>
    );
  }
}

export default App;
