export interface TierData {

    organisationName : string;
    website: string;
    socialWebsite: string;
    town: string;
    industry: string;
    mainTier: string;
    subTier: string;
    dateAdded: Date;
}

export interface TierDataWithActivity extends TierData {

  id : number;
  contactActivityFlag: ActivityFlag;
  contactActivityDate: Date
}

export enum ActivityFlag {
        None = 0,
        Contacted = 1,
        Rejected = 2,
}

export interface TierDataPaged {
  companies: TierData[];
  count: number;
}

export interface TierDataPagedForUser {
  companies: TierDataWithActivity[];
  count: number;

}