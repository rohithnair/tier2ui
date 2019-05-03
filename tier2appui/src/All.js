import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TierApi from './services/TierApi';
import industries from './Industries';
import {Helmet} from "react-helmet";
import AdvancedSearch from './AdvancedSearch';

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

  componentDidMount()
  {
    
    this.setInitialData();
  }
  constructor()
  {
    super();
    this.changePage = this.changePage.bind(this);
    this.changePageForRows = this.changePageForRows.bind(this);
    this.onTableChange = this.onTableChange.bind(this);
    this.searchPage = this.searchPage.bind(this);
    this.setInitialData = this.setInitialData.bind(this);
    this.options ={
        serverSide:true,
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
    this.getAllCount().then((result) => {
  
        this.getAll(0,this.state.options.rowsPerPage).then((companyResults) =>{

           
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
    
   
  }
 
  async getAllCount()
  {
   let api = new TierApi();
   return api.GetTier2AllCount();
  }

  async getAll(pageNumber,rowsPerPage,industry,searchText)
  {
   let api = new TierApi();
   return api.GetTier2All(pageNumber,rowsPerPage,industry,searchText);
  }

  changePage(page,rowsPerPage,industry,searchText) {
    this.getAll(page,rowsPerPage,industry,searchText).then((result) => {
    
        this.setState({data:result.data.companies});
      });
  }

  changePageForRows(page,changedRowsPerPage,industry,searchText) {
    this.getAll(page,changedRowsPerPage,industry,searchText).then((result) => {
    
      this.setState(prevState => ({
        options: {
            ...prevState.options,
            rowsPerPage: changedRowsPerPage,
        },
        data:result.data.companies
    }));

      });
  }

  searchPage(page,rowsPerPage,filterText,searchText)
  {
    this.getAll(page,rowsPerPage,filterText,searchText).then((result) => {
    
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
      case 'search':
      if(tableState.searchText === null || tableState.searchText.trim().length === 0)
      this.searchPage(tableState.page,tableState.rowsPerPage,tableState.filterList[2][0],tableState.searchText);
      if(tableState.searchText && tableState.searchText.trim().length >3)
      this.searchPage(tableState.page,tableState.rowsPerPage,tableState.filterList[2][0],tableState.searchText);
      window.scrollTo(0, 0);
      break;
      case 'filterChange':
            this.searchPage(tableState.page,tableState.rowsPerPage,tableState.filterList[2][0],tableState.searchText);
            window.scrollTo(0, 0);
            break;
        case 'changePage':
            this.changePage(tableState.page,tableState.rowsPerPage,tableState.filterList[2][0],tableState.searchText);
            window.scrollTo(0, 0);
            break;
        case 'changeRowsPerPage':
           this.changePageForRows(tableState.page,tableState.rowsPerPage,tableState.filterList[2][0],tableState.searchText);
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
      <title>Tier 2 Sponsor List - All companies</title>
      <link  href="%PUBLIC_URL%/all" />
      <meta name="description" content="This page displays all the companies on the ascending order of company name. You can search for a company by name and also filter the list using industry."/>
  </Helmet>
<div>
 <AdvancedSearch/>
{countOfRows >= 0 ?
<div className="App">
        <MUIDataTable
  columns={columns}
  data ={this.state.data}
  options ={this.state.options}
/>
      </div> : null }</div>
      </React.Fragment>
    );    
  }

}

export default All;
