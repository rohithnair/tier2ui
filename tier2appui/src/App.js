import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TierApi from './services/TierApi';
import {Helmet} from "react-helmet";


function renderDate(value)
{
  var dateLocal = new Date(value);
  return dateLocal.toLocaleDateString('en-GB');
};

const columns = [
  {name:"organisationName",label:'Company'},
  {name:"town",label:'Town'},
  {name:"industry",label:'Industry'},
  {name:"mainTier",label:'Main Tier'},
  {name:"subTier",label:'Sub Tier'},
  {name:"dateAdded",label:'Date Added',options: { customBodyRender: renderDate}}
];




class App extends Component {

  componentDidMount()
  {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-2315083194835446",
      enable_page_level_ads: true
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
  componentDidMount()
  {
    this.getTierData().then((result) => {
  
      this.setState({data:result.data});
    }).catch(()=>{

      this.setState({data:[],options:this.options});
    });
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
      <div className="App">
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
