import Website from './images/link.png'
import Youtube from './images/youtube.png'
import Twitter from './images/twitter.png'
import Facebook from './images/facebook.png'
import LinkedIn from './images/linkedin.png'
import React from 'react';

 export function renderDate(value)
{
  var dateLocal = new Date(value);
  return dateLocal.toLocaleDateString('en-GB');
};


 export function renderWebsite(value,tableMeta)
{
  if(tableMeta.rowData !==undefined && tableMeta.rowData !==null)
  if(value !==undefined && value !==null)
  return(
   <div>
    {value.length > 0 ? <a href={value} target="_blank" rel="nofollow noopener noreferrer"> <img src={Website} alt={value}/> </a> :null }
    </div>);
    
}
export function renderSocialWebsite(value,tableMeta)
{
  if(tableMeta.rowData !==undefined && tableMeta.rowData !==null)
  if(value !==undefined && value !==null)
  if(tableMeta.rowData[2] !== undefined && tableMeta.rowData[2] !== null )
  return(
   <div>
    {tableMeta.rowData[2].indexOf("twitter") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={Twitter} alt={tableMeta.rowData[2]}/> </a>:null}
    {tableMeta.rowData[2].indexOf("facebook") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={Facebook} alt={tableMeta.rowData[2]}/> </a>:null}
    {tableMeta.rowData[2].indexOf("linkedin") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={LinkedIn} alt={tableMeta.rowData[2]}/> </a>:null}
    {tableMeta.rowData[2].indexOf("youtube") >0?<a href={tableMeta.rowData[2]} target="_blank" rel="nofollow noopener noreferrer"> <img src={Youtube} alt={tableMeta.rowData[2]}/> </a>:null}
    </div>);
   
}

