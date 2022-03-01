import { Country } from "@/types/country";
import { computed, ComputedRef, Ref, ref } from "vue";
import { useStore } from "vuex";

type Response = {
  loadMore: () => void;
  currentCountries: ComputedRef<Country[]>;
  fetchData: () => Promise<void>;
  loading: Ref;
};

export default function useCountriesApi(): Response {
  const store = useStore();

  const loading = ref(false);
  const currentRecords = ref(10);

  const currentCountries = computed(() => {
    return store.state.countries.slice(0, currentRecords.value) || [];
  });

  const fetchData = async () => {
    currentRecords.value = 10;
    loading.value = true;
    try {
      await store.dispatch("fetchCountries");
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  const loadMore = () => (currentRecords.value += 10);

  return { loadMore, currentCountries, fetchData, loading };
}
