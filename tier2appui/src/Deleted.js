import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TierApi from './services/TierApi';

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


class Deleted extends Component {

  constructor()
  {
    super();
    this.changePage = this.changePage.bind(this);
    this.onTableChange = this.onTableChange.bind(this);
   
    this.options ={
        serverSide:true,
        filter: false,
        selectableRows: false, 
        search: true,
        print: false,
        download: false,
        rowsPerPage:10,
        sort:false,
        count:200,
        onTableChange :this.onTableChange
        
        };
    this.state = {data: [],options:this.options};

   
  }


  componentDidMount()
  {

    this.getDeletedCount().then((result) => {
        this.setState(prevState => ({
            options: {
                ...prevState.options,
                count: result.data
            }
        }))
    });
  }


  async getDeletedCount()
  {
   let api = new TierApi();
   return api.GetTier2DeletedCount();
  }

  async getDeleted(pageNumber,rowsPerPage)
  {
   let api = new TierApi();
   return api.GetTier2Deleted(pageNumber,rowsPerPage);
  }


  changePage(page,rowsPerPage) {
    this.getDeleted(page,rowsPerPage).then((result) => {
    
        this.setState({data:result.data});
      });
  }


  onTableChange (action, tableState)  {

    console.log(action, tableState);
    // a developer could react to change on an action basis or
    // examine the state as a whole and do whatever they want

    
    switch (action) {
        case 'changePage':
        console.log(this);
         this.changePage(tableState.page,tableState.rowsPerPage);
          break;
          default:
          break;
      }
}

  render() {
    return (
      <div className="App">
        <MUIDataTable
  columns={columns}
  data ={this.state.data}
  options ={this.state.options}
/>
      </div>
    );
  }
}

export default Deleted;
