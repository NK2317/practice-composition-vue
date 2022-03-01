import { CountriesState } from "@/store/countries/types";
import { Country } from "@/types/country";

export const GET_COUNTRY_BY_NAME =
  (state: CountriesState) =>
  (payload: string): Country[] | undefined => {
    const lowered = payload.toLocaleLowerCase();
    const uppered = payload.toUpperCase();
    return state.countries.filter(
      (c) =>
        c.name.common.toLocaleLowerCase().includes(lowered) ||
        c.name.official.toLocaleLowerCase().includes(lowered) ||
        c.altSpellings.includes(uppered)
    );
  };
