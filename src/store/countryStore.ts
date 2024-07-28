import { makeAutoObservable } from "mobx";
import { CountryInfo } from "api/apiService";

class CountryStore {
  countries: CountryInfo[];

  constructor() {
    this.countries = [];
    makeAutoObservable(this);
  }
  
  setCountries(countries: CountryInfo[]) {
    this.countries = countries;
  }
}

export const countriesController = new CountryStore();
export const secondCountriesController = new CountryStore();
export default CountryStore
