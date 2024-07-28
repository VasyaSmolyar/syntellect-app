import { getCountryByName } from "api/apiService";
import CountryStore from "store/countryStore";

interface AutoCompleteViewModelProps {
  limit: number,
  countryController: CountryStore
};

export default function AutoCompleteViewModel({countryController, limit} : AutoCompleteViewModelProps) {
  const fetchCountries = async (searchValue: string) => {
    const response = await getCountryByName(searchValue);
    countryController.setCountries(response.slice(0, limit));
  };

  return {
    fetchCountries
  };
}
