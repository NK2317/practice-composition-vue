import { Country } from "@/types/country";
import { CountriesState } from "../types";

export const SET_COUNTRIES = (
  state: CountriesState,
  payload: Country[]
): void => {
  state.countries = payload;
};
export const SET_STORED_COUNTRIES = (
  state: CountriesState,
  payload: Country[]
): void => {
  state.storedCountries = payload;
};
