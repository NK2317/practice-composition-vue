import { Country } from "@/types/country";

export type CountriesState = {
  countries: Country[];
  storedCountries: Country[];
};

export type CountrySearchCriteria = (country: Country) => boolean;

export type SearchCountryPayload = {
  searchCriteria: CountrySearchCriteria;
};

export type CountryStateMutations = {
  SET_COUNTRIES: (state: CountriesState, payload: Country[]) => void;
  SET_STORED_COUNTRIES: (state: CountriesState, payload: Country[]) => void;
};
