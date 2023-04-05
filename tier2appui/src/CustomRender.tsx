import { MUIDataTableColumn } from "mui-datatables";

export const organisationColumn: MUIDataTableColumn = {
    name: 'organisationName',
    label: 'Company',
    options:  {
      setCellProps :() => ({ style: { minWidth: "150px", maxWidth: "150px" }})
    }
  }

  export const townColumn: MUIDataTableColumn = {
    name: "town", label: 'Town',
  };

  export const industryColumn: MUIDataTableColumn = {
    name: "industry", label: 'Industry'
  };

  export const mainTierColumn: MUIDataTableColumn = {
    name: "mainTier", label: 'Main tier'
  };

  export const subTierColumn: MUIDataTableColumn = {
    name: "subTier", label: 'Sub tier'
  };

  export const activityDate: MUIDataTableColumn = {
    name: "contactActivityDate", label: 'ActivityDate',
    options : {
      display: false,
    }
  };


