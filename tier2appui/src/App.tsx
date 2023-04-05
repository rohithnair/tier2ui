import { MUIDataTableOptions, MUIDataTableState } from 'mui-datatables';
import { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TierDataTable } from './TierDataTable';
import React from 'react';
import { columnDefinitions, columnDefinitionsForUser } from './ColumnDefinitions';
import { useAuth } from './AuthContext';
import { getAllRecentCompanies, getAllRecentCompaniesForUser } from './RecentDataThunk';
import { RootState, useAppDispatch } from './store';
import { useSelector } from 'react-redux';


function App() {
  
  const {isAuthenticated} = useAuth();
  const dispatch = useAppDispatch();
  const tierDataList = useSelector((state: RootState) => state.tierDataRecent.tierDataList);
  const count = useSelector((state: RootState) => state.tierDataRecent.count);
  const tableOptions: MUIDataTableOptions = {
    serverSide: false,
    selectableRows: 'none',
    search: true,
    print: false,
    download: true,
    filter: false,
    rowsPerPage: 20,
    rowsPerPageOptions: [10, 15, 20],
    viewColumns: false,
    sort: false,
    responsive:'standard',
    count: count,
    onTableChange: (action, tableState: MUIDataTableState) => {

      switch (action) {
        case 'filterChange':
          window.scrollTo(0, 0);
          break;

        case 'changePage':
          window.scrollTo(0, 0);
          break;

        case 'changeRowsPerPage':
          window.scrollTo(0, 0);
          break;
      }
    },
  };


  const fetchRecentCompanies = useCallback(async () => {
    try {

    if(isAuthenticated) {
        
      dispatch(getAllRecentCompaniesForUser())
    }
    else
    {
      dispatch(getAllRecentCompanies())
    }

    }catch(e) {
      console.log(e);
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    fetchRecentCompanies()
    .catch(console.error);
}, [fetchRecentCompanies]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tier 2 Sponsor List - Recently added companies</title>
        <link href="%PUBLIC_URL%/recentlyadded" />
        <meta name="description" content="UK Tier 2,5 Sponsor Register helps you to search through the companies who provide tier 2 and tier 5 sponsorship visa. This page helps in viewing all the recently added companies. You can search companies based on the name." />
      </Helmet>
      <div>
        <TierDataTable options={tableOptions} columnDefinitions={isAuthenticated?columnDefinitionsForUser:columnDefinitions} data={tierDataList} />
      </div>
    </React.Fragment>
  );
}

export default App;
