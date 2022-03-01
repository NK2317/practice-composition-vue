import { createStore } from "vuex";
import { fetchCountries, addStoredCountry } from "./countries/actions";
import { GET_COUNTRY_BY_NAME } from "./countries/getters";
import { SET_COUNTRIES, SET_STORED_COUNTRIES } from "./countries/mutations";
const CountriesStore = createStore({
  state: {
    countries: [],
    storedCountries: [],
  },
  mutations: {
    SET_COUNTRIES,
    SET_STORED_COUNTRIES,
  },
  actions: {
    fetchCountries,
    addStoredCountry,
  },
  getters: {
    GET_COUNTRY_BY_NAME,
  },
});

export default CountriesStore;
