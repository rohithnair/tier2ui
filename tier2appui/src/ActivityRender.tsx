import { MUIDataTableColumn, MUIDataTableMeta } from "mui-datatables";
import DoneIcon from '@mui/icons-material/Done';
import { ActivityFlag } from "./TierData";
import { pink } from '@mui/material/colors';
import { Box } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from "@mui/material/Tooltip";

type ActivityRenderProps = {
    value : any;
    tableMeta: MUIDataTableMeta;
}

export const activityColumn: MUIDataTableColumn = {
    name: "contactActivityFlag", label: 'Activity',
    options: {
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta) =>  <ActivityRender value={value} tableMeta ={tableMeta} />
    }
    
    }
 
 const ActivityRender = ({ value, tableMeta}: ActivityRenderProps ) => {
     const activity = value as ActivityFlag;
     const isContacted = activity === ActivityFlag.Contacted;
     const isRejected =   activity === ActivityFlag.Rejected;
     var activityDate = new Date(tableMeta.rowData[2]);
     const activityDateString = 'Contacted on '+activityDate.toLocaleDateString('en-GB');
     return(<Box color="success">
          {isContacted ? <Tooltip title= {activityDateString} ><DoneIcon color="success"/></Tooltip>: null}
          {isRejected ?<Tooltip title= {activityDateString} ><ClearIcon sx= {{color: pink[500]}}/></Tooltip> : null}
          </Box>)
}