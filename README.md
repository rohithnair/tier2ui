[![Build Status](https://dev.azure.com/rrohithr/UKTiersponsors%20webapp/_apis/build/status/rohithnair.tier2ui?branchName=master)](https://dev.azure.com/rrohithr/UKTiersponsors%20webapp/_build/latest?definitionId=1&branchName=master)


This project is the front-end for https://uktiersponsors.co.uk

Sorry i haven't open sourced the entire project yet.

Nitty Gritty
--------------------------------

a) A service which downloads pdf every day and checks whether pdf is new. If the pdf is new , the pdf is downloaded
b) Each page of pdf is extracted and different company information is put to database. The database is SQL2016.
c) This scans will delete companies from the database, if the company no longer sponsors. The deleted data is moved to a new table, so as to display it back to users.
d) Another service, will fetch the company address, and NIC codes from Companies House API.
       https://developer.companieshouse.gov.uk/api/docs/
     
     This is done to augment the existing data with the industry in which the company operates. 
   
   This also helps in finding the exact company address and other financial obligations like whether bankrupt or made arrears which are currently stored in the database, 
        -- This is not brought to website yet. 
        
 e) Another service, will crawl, the search engines like Bing, Yahoo and DuckDuckGo to extract company website. This is done using company name, town combination and a union of the results from Page 1 of the search engines are taken and the result which is appearing in all three are counted and ranked based on exclusions (eg:-listing from common company name aggregators like companieshouse,bizstats to name a few are avoided).

 This data is put to a Mongo DB database,which contains a list of common urls , (website and social websites)
 
 f) Another service, will fetch the first common url and social website link from Mongo DB and puts it back to the SQL database , which contains the tier 2 companies as described in step(b) , so as to avoid multiple db calls and data consolidation.
 
   This has the added advantage , that if I want to change the algorithm for website finding after analysing existing mongo db search set, i can reinsert it back to the main database easily.
   
Techincal details
-------------------------------------------
Webiste front end   -  Ported from ASP.NET MVC 4 to ReactJS with Web API 2.0 to serve data from SQL 2016.
Pdf extractor service  - .NET 4.5 , SQL 2016
Industry finder from Companies House service - .NET 4.5, SQL 2016.
Website extractor service - .NET Core, Mongo DB
Website inserter service, .NET Core, Mongo DB, SQL 2016.

The entire website is hosted at aspnethosting VPS.






 
 
        
      
  
     
  
