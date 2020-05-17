import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import industries from './Industries';
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 1,
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  input:{
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  table: {
  },
  select:
  {
    marginTop:'25px'
  },
  button:
  {
    marginTop:'23px',
  },
  clearButton:
  {
    marginTop:'23px',
    marginLeft:'10px',
  },
  icon:{
    marginTop:'10px',
  },

  textField:
  {
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  selectEmpty:
  {
    autoWidth:'false',
    width:'200px'
  }
});

  
 

class AdvancedSearch extends Component {

  constructor(props)
  {
    super(props);
    this.searchClickCallBack=props.searchClick;
    this.filterClearClickCallBack=props.clearFilter;
    this.classes=props.classes;
    this.state ={company:'',town:'',industry:''};
    this.companyChange=this.companyChange.bind(this);
    this.industryChange=this.industryChange.bind(this);
    this.townChange=this.townChange.bind(this);
    this.filterClearClick=this.filterClearClick.bind(this);
    this.searchClick=this.searchClick.bind(this);
    this.state ={company:'',town:'',industry:''};
  }

  townChange(e)
  {
    this.setState({town:e.target.value});
  }

  companyChange(e)
  {
    this.setState({company:e.target.value});
  }
  industryChange(e)
  {
    this.setState({industry:e.target.value});
  }
  
  filterClearClick()
  {
    this.setState({town:'',company:'',industry:''});
    this.filterClearClickCallBack();
  }
  searchClick(e)
  {
    e.preventDefault();
    this.searchClickCallBack(this.state.company,this.state.town,this.state.industry);
  }

  render(){
  return(
    <div className={this.classes.root}>
 <form  onSubmit={this.searchClick}>

 <Grid container  spacing={8}
  direction="row"
  justify="flex-start"
  alignItems="center">
        <Grid item xs={3}>
        <TextField
          id="company-search"
          label="company"
          type="search"
          className={this.classes.textField}
          margin="normal"
          onChange={this.companyChange}
          value={this.state.company}
        />
        </Grid>
        <Grid item xs={3}>
        <TextField classes={{'root':this.classes.input}}
                id="town-search"
                label="town"
                type="search"
                value={this.state.town}
                className={this.classes.textField}
                margin="normal"
                onChange={this.townChange}
              />
            
        </Grid>
        <Grid item xs={3}>
        <Select classes={{'selectMenu':this.classes.select,'icon':this.classes.icon}}
            displayEmpty
            name="industry" value={this.state.industry}
            className={this.classes.selectEmpty}
            onChange={this.industryChange}
          >
            <MenuItem value="">
               All industries 
            </MenuItem>
            {industries.map((item,index)=>
            <MenuItem key={index} value={item.CategoryName}>{item.CategoryName}</MenuItem>
            )}
          </Select>
        </Grid>
        <Grid item xs>
        <Button type="submit" variant="contained" color="primary" className={this.classes.button} onClick={this.searchClick}>
              Search
            </Button>
        
        </Grid>
        <Grid item>
        <Button variant="contained" color="secondary" className={this.classes.clearButton} onClick={this.filterClearClick}>
              Clear
            </Button>
        </Grid>
      </Grid>


          

      
              
          
            
           
            
       
           
         

 
          
        
          
        </form>
    </div>
  );
}
}

 

export default withStyles(styles)(AdvancedSearch);