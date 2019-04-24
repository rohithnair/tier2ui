import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TierApi from './services/TierApi';


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
                data:companyResults.data
            }));
        });
        
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

  async getDeletedByName(searchText)
  {
   let api = new TierApi();
   return api.GetTier2DeletedByName(searchText);
  }


  changePage(page,rowsPerPage) {
    this.getDeleted(page,rowsPerPage,null).then((result) => {
    
        this.setState({data:result.data});
      });
  }

  searchPage(searchCompany)
  {
    this.getDeleted(null,null,searchCompany).then((result) => {
    
        this.setState(prevState => ({
            options: {
                ...prevState.options,
                count: result.data.length,
            },
            data:result.data
        }));
       
      });
  }


  onTableChange (action, tableState)  {
    console.log(action);
    switch (action) {
       
        case 'changePage':
        console.log(this);
         this.changePage(tableState.page,tableState.rowsPerPage);
          break;
        case 'search':
        console.log(tableState.searchText);
        if(tableState.searchText === null || tableState.searchText.trim().length === 0)
        {
            this.setInitialData();
        }
        else  if(tableState.searchText && tableState.searchText.length >3)
          this.searchPage(tableState.searchText);
           break;
          default:
          break;
      }
}

  render() {

let countOfRows = this.state.options.count;
    return (
<div>
{countOfRows >= 0 ?
<div className="App">
        <MUIDataTable
  columns={columns}
  data ={this.state.data}
  options ={this.state.options}
/>
      </div> : null }</div>
    );    
  }

}

export default Deleted;
