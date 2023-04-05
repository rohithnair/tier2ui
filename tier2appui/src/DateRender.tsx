import { MUIDataTableColumn, MUIDataTableMeta } from "mui-datatables";

type DateRenderProps = {
    value : any;
    tableMeta: MUIDataTableMeta;
}

export const dateAddedColumn: MUIDataTableColumn = {
    name: "dateAdded", label: 'Date Added',
    options: {
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta) =>  <DateRender value={value} tableMeta ={tableMeta} />
    }
    
    }
 
 const DateRender = ({ value, tableMeta}: DateRenderProps ) => {
    var dateLocal = new Date(value);
    const dateString = dateLocal.toLocaleDateString('en-GB');
    return(<>{dateString}</>)
}