import { Button, Grid, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, {  SyntheticEvent, useState } from 'react';
import industries from './Industries';

type AdvancedSearchProps = {
   searchCallBack: (company: string, town: string, industry: string) => void;
   filterClearCallBack: () => void;
};
 
const AdvancedSearch  = ({ searchCallBack, filterClearCallBack }:  AdvancedSearchProps) => {

  const [company, setCompany] = useState('');
  const [town, setTown] = useState('');
  const [industry, setIndustry] = useState('');
  
  const filterClearClick = () =>
  {
   
    setCompany('');
    setTown('');
    setIndustry('');
    
    filterClearCallBack();
  };

  const setCompanyHandler = (e:React.ChangeEvent<HTMLInputElement>) =>  {
      setCompany(e.currentTarget.value);
  };

  const setTownHandler = (e:React.ChangeEvent<HTMLInputElement>) =>  {
    setTown(e.currentTarget.value);
};


const setIndustryHandler = (e:SelectChangeEvent<string>) =>  {
  
    setIndustry(e.target.value);
};

  const searchClick =( e:SyntheticEvent) =>  
  {
    e.preventDefault();
    searchCallBack(company, town, industry);
  }
  
  return(
 <form  onSubmit={searchClick}>
  <Grid container={true} spacing={8}

   alignItems="center"
  >
        <Grid item xs={3}>
        <TextField
        sx= {{fontSize: '0.75rem',
        fontWeight: '500'}}
          id="company-search"
          label="company"
          type="search"
          margin="normal"
          onChange={setCompanyHandler}
          value={company}
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
                sx= {{fontSize: '0.75rem',
                fontWeight: '500'}}
                id="town-search"
                label="town"
                type="search"
                value={town}
                margin="normal"
                onChange={setTownHandler}
              />
            
        </Grid>
        <Grid item xs={3}>
        <Select 
            displayEmpty
            sx={{ autoWidth:'false',
            width:'200px'}}
            name="industry" value={industry}
            onChange={setIndustryHandler}
          >
            <MenuItem value="">
               All industries 
            </MenuItem>
            {industries.map((item,index: number)=>
            <MenuItem key={index} value={item.CategoryName}>{item.CategoryName}</MenuItem>
            )}
          </Select>
        </Grid>
        <Grid item xs>
        <Button type="submit"  variant="contained" color="primary" onClick={searchClick} sx={{ marginTop:2}}>
              Search
            </Button>
        
        </Grid>
        <Grid item>
        <Button variant="contained" color="secondary"  onClick={filterClearClick} sx={{  marginTop:2, marginLeft:2,marginRight:2}}>
              Clear
            </Button>
        </Grid>
        </Grid>
        </form>
  );
}

 

export default AdvancedSearch;