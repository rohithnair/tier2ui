import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import {  toInteger } from 'lodash';
import React, { SyntheticEvent, useState } from 'react';
 

type PageNumberFooterProps= {
   pageNumberCallBack: (pageNumber: number) => void;
   pageNumber: number;
   totalRows: number;
   rowsPerPage: number;

};
 
const PageNumberFooter  = ({ pageNumberCallBack, pageNumber, totalRows,  rowsPerPage}:  PageNumberFooterProps) => {
 
const totalPages = toInteger(totalRows/rowsPerPage);
const pageAdornment  = "/"+totalPages.toString();
 
 
const [localPage, setLocalPage] = useState(pageNumber+1);

  const setPageHandler = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    const number = toInteger(e.currentTarget.value);
    if( number  > totalPages ) {
        return;
    }
    setLocalPage(number);

  };

  const setPageClick =( e:SyntheticEvent) =>  
  {
    e.preventDefault();
    pageNumberCallBack(localPage -1);
  }


  return(
    <Grid container={true} spacing={2} justifyContent='flex-end'  sx= {{marginBottom:1}}>
      <Grid item>
        <TextField
        sx= {{fontSize: '0.75rem',
        fontWeight: '500'}}
          id="pageNumber-search"
          label="Page"
          type="search"
          size="small"
          margin="normal"
          variant="standard" 
          onChange={setPageHandler}
          value={localPage}
          InputProps={{
            type: "number",
            endAdornment: <InputAdornment position="end">{pageAdornment}</InputAdornment>,
          }}
        />
        </Grid>
        <Grid item>
        <Button variant="contained" onClick={setPageClick}  type="submit" color="primary"  sx={{ marginTop:3}}>Go to  page</Button>
        </Grid>
        </Grid>
  );
  }
export default PageNumberFooter;