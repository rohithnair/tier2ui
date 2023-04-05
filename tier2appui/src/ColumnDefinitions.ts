import { MUIDataTableColumnDef } from "mui-datatables";
import { actionColumn } from "./ActionsRender";
import { activityColumn } from "./ActivityRender";
import { activityDate, industryColumn, mainTierColumn, organisationColumn, subTierColumn, townColumn } from "./CustomRender";
import { dateAddedColumn } from "./DateRender";
import { socialWebsiteColumn } from "./SocialWebsiteRender";
import { websiteColumn } from "./WebsiteRender";

export const columnDefinitions: MUIDataTableColumnDef[] = [
    organisationColumn,
    websiteColumn,
    socialWebsiteColumn,
    townColumn,
    industryColumn,
    mainTierColumn,
    subTierColumn,
    dateAddedColumn
  ];

  export const columnDefinitionsForUser: MUIDataTableColumnDef[] = [
    organisationColumn,
    activityColumn,
    activityDate,
    actionColumn,
    websiteColumn,
    socialWebsiteColumn,
    townColumn,
    industryColumn,
    mainTierColumn,
    subTierColumn,
    dateAddedColumn
  ];
  
  export const columnDefinitionsForDeleted: MUIDataTableColumnDef[] = [
    organisationColumn,
    townColumn,
    industryColumn,
    mainTierColumn,
    subTierColumn
  ];
  