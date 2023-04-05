
import { MUIDataTableColumn, MUIDataTableMeta } from 'mui-datatables';
import ActionMenu from './ActionMenu';
import { ActivityFlag } from './TierData';

export const actionColumn: MUIDataTableColumn = {
    name: "id", label: 'Action',
    options: { 
        customBodyRender: (value: any, tableMeta: MUIDataTableMeta) =>  {
            
            const activityFlag= tableMeta.rowData[1] as ActivityFlag;
            return(<ActionMenu organisationId={value} activityFlag={activityFlag}/>)
        }
      }
  };

 

 