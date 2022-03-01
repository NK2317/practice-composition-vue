import { Country } from "@/types/country";
import { Ref, ref } from "vue";
import { useStore } from "vuex";

type Result = {
  search: (name: string) => Promise<void>;
  result: Ref<Country[]>;
};

export default function useSearchCountrySearch(): Result {
  const store = useStore();
  const result = ref<Country[]>([]);
  const search = async (name: string): Promise<void> => {
    result.value = [];
    result.value = await Promise.resolve(
      store.getters.GET_COUNTRY_BY_NAME(name)
    );
  };

  return { search, result };
}
