<template>
  <div>
    <div class="w-full text-center">
      <h1 class="text-3xl">Countries list</h1>
      <button-default @click="fetchData">Reload list</button-default>
      <div class="mt-3">
        <Searchbar @onSearch="search" @onClear="clear" />
      </div>
      <div class="items-center mt-6" v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="countriesSearchResult.length === 0">
          <countries-section :list="currentCountries" />
          <div class="mt-3 mb-3">
            <button-default @click="loadMore">
              Load more countries
            </button-default>
          </div>
        </div>
        <div v-else>
          <countries-section :list="countriesSearchResult" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountriesSection from "@/components/sections/CountriesSection.vue";
import useCountriesApi from "@/hooks/useCountriesApi";
import useCountrySearch from "@/hooks/useCountrySearch";
import ButtonDefault from "@/components/atoms/ButtonDefault.vue";
import Searchbar from "@/components/molecules/Searchbar.vue";
import { onMounted } from "vue";

const { loadMore, currentCountries, fetchData, loading } = useCountriesApi();
const { search: searchCountry, result: countriesSearchResult } =
  useCountrySearch();

const search = (term: string) => searchCountry(term).catch(console.error);

const clear = () => (countriesSearchResult.value = []);

onMounted(() => {
  if (currentCountries.value.length === 0) fetchData();
});
</script>
