// interface for https://disease.sh/v3/covid-19/historical/all?lastdays=all
export interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

