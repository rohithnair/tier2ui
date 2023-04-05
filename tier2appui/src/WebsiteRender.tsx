import { MUIDataTableColumn, MUIDataTableMeta } from "mui-datatables";
import Website from './images/link.png'

type WebsiteRenderProps = {
    value : any;
    tableMeta: MUIDataTableMeta;
}

export const websiteColumn: MUIDataTableColumn = {
    name: 'website',
    label: 'Website',
    options: {
      filter: false,
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta) => <WebsiteRender value={value} tableMeta ={tableMeta} />
    }
  }
 
  
 const WebsiteRender = ({ value, tableMeta}: WebsiteRenderProps ) => {

    if (tableMeta.rowData !== undefined && tableMeta.rowData !== null)
    if (value !== undefined && value !== null)
      return (
        <div>
          {value.length > 0 ? <a href={value} target="_blank" rel="nofollow noopener noreferrer"> <img src={Website} alt={value} /> </a> : null}
        </div>);
    
    return(<></>)
}
