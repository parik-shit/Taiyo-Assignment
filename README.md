
![image](https://github.com/user-attachments/assets/cb27b568-d87e-4c6e-8f19-bc629710a0b0)

In this app, 3 API enpoints are used - 
World wide data of cases: https://disease.sh/v3/covid-19/all
Country Specific data of cases: https://disease.sh/v3/covid-19/countries
Graph data for cases with date:
https://disease.sh/v3/covid-19/historical/all?lastdays=all

for each api, an interface was made, also all the fetch functions are in `src/api.ts`, these are used by React Query
for https://disease.sh/v3/covid-19/all 
this interface was used 
```
interface AllData {
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
    affectedCountries: number;
}

```
The following interface was used in the data that was fetched from https://disease.sh/v3/covid-19/countries
It is used in map to for showing the country-wise data in a popup on map.
```
interface CountryInfo {
  _id: number;
  lat: number;
  long: number;
}

interface CountryData {
  country: string;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: CountryInfo;
}
```
```
// interface for https://disease.sh/v3/covid-19/historical/all?lastdays=all
export interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

```

for caching the fetched data, React query was also used 
#Note: The logic for all the pages is written in /src/pages/contact and /src/pages/maps 

There is a sidebar menu, on clicking you will find 3 buttons, Home, Contact, Map and Graph button. They will take you to the respective route. 

The contact component on the route `"/contact"`. You can create a contact , edit contact and delete it as well. 
The states are managed using the Redux, the states are stored in the redux store in `src/redux/store.ts`. 
The reducer function are in the `contactSlices.ts`. These reducers are used by the contact components. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


