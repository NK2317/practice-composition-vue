import { Country } from "@/types/country";
import { useStore } from "vuex";

type Result = {
  add: (country: Country) => Promise<void>;
};
export default function useStoredCountries(): Result {
  const store = useStore();

  const add = async (country: Country) => {
    await store.dispatch("addStoredCountry", country);
  };

  return { add };
}
