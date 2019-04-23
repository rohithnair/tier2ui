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



const options ={
serverSide:false,
filter: false,
selectableRows: false, 
search: true,
print: false,
download: false,
rowsPerPage:10,
sort:false
};
class App extends Component {

  constructor()
  {
    super();
    this.state = {data: []};
  }
  componentDidMount()
  {
    this.getTierData().then((result) => {
  
      this.setState({data:result.data});
    });
  }




  async getTierData()
  {
   let api = new TierApi();
   return api.GetRecentTier2Providers();
  }



  render() {
    return (
      <div className="App">
        <MUIDataTable
  columns={columns}
  data ={this.state.data}
  options ={options}
/>
      </div>
    );
  }
}

export default App;
