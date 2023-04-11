import { MUIDataTableOptions, MUIDataTableState } from "mui-datatables";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AdvancedSearch from "./AdvancedSearch";
import { columnDefinitionsForDeleted } from "./ColumnDefinitions";
import TierApi from "./TierApi";
import { TierData } from "./TierData";
import { TierDataTable } from "./TierDataTable";
 
function Deleted() {
  
    const [tierDataList, setTierDataList] = useState<TierData[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [company, setCompany] = useState('');
    const [town, setTown] = useState('');
    const [industry, setIndustry] = useState('');
    const [count, setCount] = useState(0);

    const fetchAllDeletedCompanies = useCallback(async () => {
      try {
        const apiClient = new TierApi();
        const response = await apiClient.GetTier2Deleted(page, rowsPerPage, company, town, industry);
        setTierDataList(response?.data?.companies);
        setCount(response.data.count);
      }catch(e) {
        console.log(e);
      }
      },[page, rowsPerPage, company, town, industry]);

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


    const fetchTotalCount = useCallback(async () => {
        const apiClient = new TierApi();
        const response = await apiClient.GetTier2DeletedCount();
         setCount(response.data);
      }, []);


      useEffect(() => {
        fetchTotalCount();
        fetchAllDeletedCompanies()

        .catch(console.error);
    }, [fetchAllDeletedCompanies,fetchTotalCount]);

 
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

  
    useEffect(() => {
      fetchAllDeletedCompanies()
      .catch(console.error);
  }, [fetchAllDeletedCompanies]);
  
    return (
      <React.Fragment>
   <Helmet>
      <meta charSet="utf-8" />
      <title>Tier 2 Sponsor List - Deleted companies</title>
      <link  href="%PUBLIC_URL%/deleted" />
      <meta name="description" content="This page displays all the companies which got deleted from the sponsor list in the UK. These companies cannot sponsor any more in the UK for various reasons. You can search for a company by name."/>
  </Helmet>
        <div>
        <AdvancedSearch  searchCallBack={search} filterClearCallBack={clear}/>
          <TierDataTable options={tableOptions} columnDefinitions={columnDefinitionsForDeleted} data={tierDataList} />
        </div>
      </React.Fragment>
    );
  }
  
  export default Deleted;
  