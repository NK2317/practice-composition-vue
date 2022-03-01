import { Country } from "@/types/country";
import { Commit } from "vuex";
import { CountriesState } from "../types";

type ParamType = {
  state: CountriesState;
  commit: Commit;
};

export const fetchCountries = async ({
  commit,
}: ParamType): Promise<Country[]> => {
  try {
    const response = await (
      await fetch("https://restcountries.com/v3.1/all")
    ).json();
    commit("SET_COUNTRIES", response);
    return response;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const addStoredCountry = (
  { state, commit }: ParamType,
  payload: Country
): boolean => {
  try {
    const storedCountries = state.storedCountries;
    commit("SET_STORED_COUNTRIES", [...storedCountries, payload]);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
