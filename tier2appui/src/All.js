import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TierApi from './services/TierApi';
import industries from './Industries';

function renderDate(value)
{
  var dateLocal = new Date(value);
  return dateLocal.toLocaleDateString('en-GB');
};

const columns = [
  {name:"organisationName",label:'Company',options:{ filter: false}},
  {name:"town",label:'Town',options:{ filter: false}},
  {name:"industry",label:'Industry',
  options: {
    filter: true,
    filterType: 'dropdown',
    filterOptions: industries.map((item)=> item.CategoryName)
  }

},
  {name:"mainTier",label:'Main Tier',options:{ filter: false}},
  {name:"subTier",label:'Sub Tier',options:{ filter: false}},
  {name:"dateAdded",label:'Date Added',options: { filter:false,customBodyRender: renderDate}}
];


class All extends Component {

  constructor()
  {
    super();
    this.changePage = this.changePage.bind(this);
    this.onTableChange = this.onTableChange.bind(this);
    this.searchPage = this.searchPage.bind(this);
    this.setInitialData = this.setInitialData.bind(this);
    this.options ={
        serverSide:true,
        selectableRows: false, 
        search: false,
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
    this.getAllCount().then((result) => {
  
        this.getAll(1,this.state.options.rowsPerPage).then((companyResults) =>{

            console.log("Data loaded");
            this.setState(prevState => ({
                options: {
                    ...prevState.options,
                    count: result.data,
                },
                data:companyResults.data.companies
            }));
        }).catch(() =>{

            this.setState(prevState => ({
                options: {
                    ...prevState.options,
                    count: 0,
                },
                data:[]
            }));
        });
        
    }).catch(() =>{

        this.setState(prevState => ({
            options: {
                ...prevState.options,
                count: 0,
            },
            data:[]
        }));
    });
    
    ;
  }
 
  componentDidMount()
  {
this.setInitialData();
   
  }


  async getAllCount()
  {
   let api = new TierApi();
   return api.GetTier2AllCount();
  }

  async getAll(pageNumber,rowsPerPage,searchText)
  {
   let api = new TierApi();
   return api.GetTier2All(pageNumber,rowsPerPage,searchText);
  }

  changePage(page,rowsPerPage,industry) {
    this.getAll(page,rowsPerPage,industry).then((result) => {
    
        this.setState({data:result.data.companies});
      });
  }

  searchPage(filterText,page,rowsPerPage)
  {
    this.getAll(page,rowsPerPage,filterText).then((result) => {
    
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
       
        case 'filterChange':
        if(tableState.filterList && tableState.filterList[2] && (tableState.filterList[2][0] === null || tableState.filterList[2][0] ===undefined ))
        {
            this.setInitialData();
        }
        else
        {
           this.searchPage(tableState.filterList[2][0],tableState.page,tableState.rowsPerPage);
        }
        break;

        case 'changePage':
         this.changePage(tableState.page,tableState.rowsPerPage,tableState.filterList[2][0]);
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

export default All;
