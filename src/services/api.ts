// src/services/api.ts
import axios from 'axios';
import { CountryData } from '../types/CountryData';
import { HistoricalData } from '../types/HistoricalData';
import {AllData} from '../types/AllData';
const BASE_URL = 'https://disease.sh/v3/covid-19';

export const fetchWorldwideData = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data as AllData;
};

export const fetchCountrySpecificData = async (): Promise<CountryData[]> => {
  const response = await axios.get(`${BASE_URL}/countries`);
  return response.data as CountryData[];
};
export const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.data as HistoricalData;
};
