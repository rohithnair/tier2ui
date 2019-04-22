import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

class App extends Component {


  render() {
    return (
      <div className="App">
        <MUIDataTable
  data={data}
  columns={columns}
/>
      </div>
    );
  }
}

export default App;
