export interface CovidState {
  LiveData: CovidLiveData[];
  AllCountryData: CovidAllCountryData[];
  LiveLoading: boolean;
  LiveDone: boolean;
  LiveError: string;
  AllCountryLoading: boolean;
  AllCountryDone: boolean;
  AllCountryError: string;
}

export interface CovidLiveData {
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

export interface CovidAllCountryData {
  Country: string
  ISO2: string
  Slug: string
}