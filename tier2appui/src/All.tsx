import { MUIDataTableOptions, MUIDataTableState } from "mui-datatables";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AdvancedSearch from "./AdvancedSearch";
import { getAllCompanies, getAllCompaniesCount, getAllCompaniesForUser } from "./AllDataThunk";
import { useAuth } from "./AuthContext";
import { columnDefinitions, columnDefinitionsForUser } from "./ColumnDefinitions";
import { Filter } from "./Filter";
import { RootState, useAppDispatch } from "./store";
import { TierDataTable } from "./TierDataTable";
import { useSelector } from "react-redux";
import PageNumberFooter from "./PageNumberFooter";
import { debounce } from "lodash";

function All() {
  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [company, setCompany] = useState('');
    const [town, setTown] = useState('');
    const [industry, setIndustry] = useState('');
    const {isAuthenticated} = useAuth();
    const dispatch = useAppDispatch();
    const tierDataList = useSelector((state: RootState) => state.tierDataAll.tierDataList);
    const count = useSelector((state: RootState) => state.tierDataAll.count);
    
    const fetchAllCompanies = useCallback(async () => {

      try {
        const filter : Filter = {
            company, industry,page, rowsPerPage ,town
        }
        if(isAuthenticated) {
         
          dispatch(getAllCompaniesForUser(filter))
        }
        else 
        {
          dispatch(getAllCompanies(filter))
        }

      }catch(e) {
        console.log(e);
      }
        
      },[company,town,industry,rowsPerPage, page,isAuthenticated,dispatch]);

      const search =(company:string,town: string,industry: string) =>
      {
  
       setTown(town);
       setIndustry(industry);
       setCompany(company);
      }
    
      const clear= ()=>      {
        setTown('');
        setIndustry('');
        setCompany('');
      }
      const changePageCallback = (pageNumber: number) => {
        setPage(pageNumber);
        window.scrollTo({top: 0, behavior: 'smooth'});
       }
      
    const fetchTotalCount = useCallback(async () => {
      try {
        dispatch(getAllCompaniesCount())
      }
      catch(e) {
        console.log(e);
      }
      }, [dispatch]);


      useEffect(() => {
        fetchTotalCount();
        fetchAllCompanies()

        .catch(console.error);
    }, [fetchAllCompanies,fetchTotalCount]);

    const tableOptions: MUIDataTableOptions = {
        serverSide:true,
        selectableRows: 'none', 
        search: false,
        print: false,
        download: true,
        filter:false,
        rowsPerPage:20,
        rowsPerPageOptions:[10,15,20],
        viewColumns:false,
        sort:false,
        responsive:'simple',
        count: count,
        page: page,
      onTableChange: (action, tableState: MUIDataTableState) => {
  
        switch (action) {

            case 'changePage':
                    setRowsPerPage(tableState.rowsPerPage);
                    setPage(tableState.page);
                    window.scrollTo(0, 0);
                    break;
  
          case 'changeRowsPerPage':
                    setRowsPerPage(tableState.rowsPerPage);
                    setPage(tableState.page);
                    window.scrollTo(0, 0);
            break;
        }
      },
    };
  
    return (
      <React.Fragment>
         <Helmet>
      <meta charSet="utf-8" />
      <title>Tier 2 Sponsor List - All companies</title>
      <link  href="%PUBLIC_URL%/all" />
      <meta name="description" content="This page displays all the companies on the ascending order of company name. You can search for a company by name and also filter the list using industry."/>
        </Helmet>
        <div>
        <AdvancedSearch  searchCallBack={search} filterClearCallBack={clear}/>
          <TierDataTable options={tableOptions} columnDefinitions={isAuthenticated?columnDefinitionsForUser:columnDefinitions} data={tierDataList} />
          <PageNumberFooter pageNumberCallBack={changePageCallback}  pageNumber={page} rowsPerPage={rowsPerPage} totalRows={count}  /> 
        </div>
      </React.Fragment>
    );
  }
  
  export default All;
  