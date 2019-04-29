import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TierApi from './services/TierApi';
import {Helmet} from "react-helmet";

const columns = [
  {name:"organisationName",label:'Company', options: {searchable:true}},
  {name:"town",label:'Town'},
  {name:"industry",label:'Industry'},
  {name:"mainTier",label:'Main Tier'},
  {name:"subTier",label:'Sub Tier'}
];


class Deleted extends Component {

  constructor()
  {
    super();
    this.changePage = this.changePage.bind(this);
    this.onTableChange = this.onTableChange.bind(this);
    this.searchPage = this.searchPage.bind(this);
    this.setInitialData = this.setInitialData.bind(this);
    this.options ={
        serverSide:true,
        filter: false,
        selectableRows: false, 
        search: true,
        print: false,
        download: false,
        rowsPerPage:10,
        sort:false,
        count :-1,
        onTableChange :this.onTableChange
        
        };
    this.state = {data: [],options:this.options};

   
  }

  setInitialData()
  {
    this.getDeletedCount().then((result) => {
  
        this.getDeleted(1,this.state.options.rowsPerPage).then((companyResults) =>{

            this.setState(prevState => ({
                options: {
                    ...prevState.options,
                    count: result.data,
                },
                data:companyResults.data.companies
            }));
        })
        .catch(ex=>
          {
            this.setState(prevState => ({
              options: {
                  ...prevState.options,
                  count: 0,
              },
              data:[]
          }));
          });
        
    }).catch(ex=>
      {
        this.setState(prevState => ({
          options: {
              ...prevState.options,
              count: 0,
          },
          data:[]
      }));
      });
  }
 
  componentDidMount()
  {
this.setInitialData();
   
  }


  async getDeletedCount()
  {
   let api = new TierApi();
   return api.GetTier2DeletedCount();
  }

  async getDeleted(pageNumber,rowsPerPage,searchText)
  {
   let api = new TierApi();
   return api.GetTier2Deleted(pageNumber,rowsPerPage,searchText);
  }

  changePage(searchCompany,page,rowsPerPage) {
    this.getDeleted(page,rowsPerPage,searchCompany).then((result) => {
    
        this.setState({data:result.data.companies});
      });
  }

  searchPage(searchCompany,page,rowsPerPage)
  {
    this.getDeleted(page,rowsPerPage,searchCompany).then((result) => {
    
        this.setState(prevState => ({
            options: {
                ...prevState.options,
                count: result.data.count,
            },
            data:result.data.companies
        }));
       
      });
  }


  onTableChange (action, tableState)  {
    switch (action) {
       
        case 'changePage':
         this.changePage(tableState.searchText,tableState.page,tableState.rowsPerPage);
          break;
        case 'search':
        if(tableState.searchText === null || tableState.searchText.trim().length === 0)
        {
            this.setInitialData();
        }
        else  if(tableState.searchText && tableState.searchText.length >3)
          this.searchPage(tableState.searchText,tableState.page,tableState.rowsPerPage);
           break;
          default:
          break;
      }
}

  render() {

let countOfRows = this.state.options.count;
    return (
      <React.Fragment>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Tier 2 Sponsor List - Deleted companies</title>
      <link rel="canonical" href="%PUBLIC_URL%/deleted" />
  </Helmet>
<div>
{countOfRows >= 0 ?
<div className="App">
        <MUIDataTable
  columns={columns}
  data ={this.state.data}
  options ={this.state.options}
/>
      </div> : null }</div> </React.Fragment>
    );    
  }

}

export default Deleted;
