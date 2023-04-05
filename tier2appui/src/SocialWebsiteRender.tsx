import { MUIDataTableColumn, MUIDataTableMeta } from "mui-datatables";
import Youtube from './images/youtube.png'
import Twitter from './images/twitter.png'
import Facebook from './images/facebook.png'
import LinkedIn from './images/linkedin.png'
import { TierData } from "./TierData";

type SocialWebsiteRenderProps = {
    value : any;
    tableMeta: MUIDataTableMeta<TierData>;
}


export const socialWebsiteColumn: MUIDataTableColumn = {
    name: 'socialWebsite',
    label: 'Social website',
    options: {
      customBodyRender: (value: any, tableMeta: MUIDataTableMeta) =>  <SocialWebsiteRender value={value} tableMeta ={tableMeta} />
    }
  }

   const SocialWebsiteRender = ({ value, tableMeta}: SocialWebsiteRenderProps ) => {

  if(tableMeta.rowData !==undefined && tableMeta.rowData !==null)
  if(value !==undefined && value !==null)
  return(
   <div>
    {value.indexOf("twitter") >0?<a href={value} target="_blank" rel="nofollow noopener noreferrer"> <img src={Twitter} alt={value}/> </a>:null}
    {value.indexOf("facebook") >0?<a href={value} target="_blank" rel="nofollow noopener noreferrer"> <img src={Facebook} alt={value}/> </a>:null}
    {value.indexOf("linkedin") >0?<a href={value} target="_blank" rel="nofollow noopener noreferrer"> <img src={LinkedIn} alt={value}/> </a>:null}
    {value.indexOf("youtube") >0?<a href={value} target="_blank" rel="nofollow noopener noreferrer"> <img src={Youtube} alt={value}/> </a>:null}
    </div>)
    
    return(<></>)
}
