//interface for https://disease.sh/v3/covid-19/countries
export interface CountryInfo {
  _id: number;
  lat: number;
  long: number;
}

export interface CountryData {
  country: string;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: CountryInfo;
}

