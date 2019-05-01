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

  componentDidMount()
  {
 
   this.setInitialData();
   
  }

  constructor()
  {
    super();
    this.changePage = this.changePage.bind(this);
    this.onTableChange = this.onTableChange.bind(this);
    this.searchPage = this.searchPage.bind(this);
    this.changePageForRows = this.changePageForRows.bind(this);
    this.setInitialData = this.setInitialData.bind(this);
    this.options ={
        serverSide:true,
        filter: false,
        selectableRows: false, 
        search: true,
        print: false,
        download: false,
        rowsPerPage:10,
        rowsPerPageOptions:[10,15,20],
        sort:false,
        count :-1,
        onTableChange :this.onTableChange
        
        };
    this.state = {data: [],options:this.options};

   
  }

  setInitialData()
  {
    this.getDeletedCount().then((result) => {
  
        this.getDeleted(0,this.state.options.rowsPerPage).then((companyResults) =>{

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
 
  


  async getDeletedCount()
  {
   let api = new TierApi();
   return api.GetTier2DeletedCount();
  }

  async getDeleted(pageNumber,rowsPerPage,industry,searchText)
  {
   let api = new TierApi();
   return api.GetTier2Deleted(pageNumber,rowsPerPage,industry,searchText);
  }

  changePage(industry,searchText,page,rowsPerPage) {
    this.getDeleted(page,rowsPerPage,industry,searchText).then((result) => {
    
        this.setState({data:result.data.companies});
      });
  }

  changePageForRows(industry,searchText,page,changedRowsPerPage) {
    this.getDeleted(page,changedRowsPerPage,industry,searchText).then((result) => {
    
      this.setState(prevState => ({
        options: {
            ...prevState.options,
            rowsPerPage: changedRowsPerPage,
        },
        data:result.data.companies
    }));
      });
  }





  searchPage(industry,searchText,page,rowsPerPage)
  {
    this.getDeleted(page,rowsPerPage,industry,searchText).then((result) => {
    
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
       
      case 'changeRowsPerPage':
      this.changePageForRows(tableState.filterList[2][0],tableState.searchText,tableState.page,tableState.rowsPerPage);
      window.scrollTo(0, 0);
      break;

     case 'changePage':
         this.changePage(tableState.filterList[2][0],tableState.searchText,tableState.page,tableState.rowsPerPage);
         window.scrollTo(0, 0);
          break;

     case 'search':

     if(tableState.searchText === null || tableState.searchText.trim().length === 0)
     this.searchPage(tableState.filterList[2][0],tableState.searchText,tableState.page,tableState.rowsPerPage);
     if(tableState.searchText && tableState.searchText.trim().length >3)
     this.searchPage(tableState.filterList[2][0],tableState.searchText,tableState.page,tableState.rowsPerPage);
     break;

     case 'filterChange':
          this.searchPage(tableState.filterList[2][0],tableState.searchText,tableState.page,tableState.rowsPerPage);
          window.scrollTo(0, 0);
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
      <link  href="%PUBLIC_URL%/deleted" />
      <meta name="description" content="This page displays all the companies which got deleted from the sponsor list in the UK. These companies cannot sponsor any more in the UK for various reasons. You can search for a company by name."/>
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
