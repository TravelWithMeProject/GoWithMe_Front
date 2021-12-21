export interface CovidState {
  data: CovidData[];
  loading: boolean,
  done: boolean,
  error: string,
}

export interface CovidData {
  Active: number
  City: string
  CityCode: string
  Confirmed: number
  Country: string
  CountryCode: "KR"
  Date: string
  Deaths: number
  ID: string
  Lat: string
  Lon: string
  Province: string
  Recovered: number
}