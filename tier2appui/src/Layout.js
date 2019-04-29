import React, { Component } from 'react';
import Header from  './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  root: {
    flexGrow: 1,
  },
};
class Layout extends Component {
 
    render() {
      const { classes } = this.props;
        return(
            <div className={classes.root}>
          <Header />
           {this.props.children}
           <Footer />
           </div>

        );
    }
  }
  
  export default withStyles(styles)(Layout);
  