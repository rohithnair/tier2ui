import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import React from 'react';
import { TierData } from './TierData';

 
  type TierDataTableProps = {
        data: Array<TierData>,
        options: MUIDataTableOptions,
        columnDefinitions: MUIDataTableColumnDef[],
  }; 

  export const TierDataTable = ({ data, options,columnDefinitions }: TierDataTableProps ) => {
      if(data === null || data === undefined) {
            data = [];
      }
      return(<React.Fragment>
        <MUIDataTable title="" columns={columnDefinitions} data={data}  options= {options} /> </React.Fragment>);
  }