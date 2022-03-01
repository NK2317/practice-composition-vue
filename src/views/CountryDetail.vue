<template>
  <div>
    <div v-if="country">
      <div class="w-full md:flex md:justify-center mt-8 mb-16">
        <div class="md:w-2/3 px-3">
          <div class="py-4 px-8 bg-white shadow-lg rounded-lg">
            <div class="mb-2 w-full md:flex md:justify-center">
              <div>
                <div class="md:w-full">
                  <img :src="country.flags.png || ''" async alt="flag" />
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold tex-center mb-3">
                {{ country.name.official }}
                ({{ country.name.common }})
              </h2>
              <CountryBasicPropsList :country="country" />
            </div>
            <div class="mt-4 space-x-3">
              <button-default @click="whatchOnMaps">
                Whatch on google maps
              </button-default>
              <button-default @click="addToFavorites">
                Add to favorites
              </button-default>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
<script setup lang="ts">
import ButtonDefault from "@/components/atoms/ButtonDefault.vue";
import CountryBasicPropsList from "@/components/molecules/CountryBasicPropsList.vue";
import useStoredCountries from "@/hooks/useStoredCountries";
import { Country } from "@/types/country";
import { onMounted, ref } from "vue";

const country = ref<Country>();
const { add } = useStoredCountries();
const whatchOnMaps = () => {
  const urlSection = `@${country.value?.latlng[0]},${country.value?.latlng[1]},6z`;
  window.open(`https://www.google.com/maps/${urlSection}`);
};

const addToFavorites = async () => {
  if (country.value) {
    await add(country.value);
    alert("added!");
  }
};

onMounted(() => {
  try {
    window.scrollTo(0, 0);
    const json = localStorage.getItem("country");
    if (json) country.value = JSON.parse(json);
  } catch (e) {
    console.error(e);
    alert("Error getting country");
  }
});
</script>
