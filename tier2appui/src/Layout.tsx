import React from 'react';
import Header from  './Header';
import Footer from './Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider } from './AuthContext';
import { Provider } from 'react-redux';
import store from './store';


type Props = {
  children?: React.ReactNode
};



const theme = createTheme({
  components: {
    MUIDataTableHeadCell: {
      styleOverrides : {
      root : {
      }
    }
    }
  },
  palette: {
    primary: {
      main:"#3f51b5",
    },
  },
});

  const Layout = ({ children }: Props)  => {


    
    return(<>
     <AuthProvider>
     <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </ThemeProvider>
      </Provider>
      </AuthProvider>
    </>)
  }

export default Layout;
  
  