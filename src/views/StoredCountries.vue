<template>
  <div>
    <div class="w-full text-center">
      <h1 class="text-3xl">Stored countries</h1>
      <div v-if="storedCountries.length > 0">
        <countries-section :list="storedCountries" />
      </div>
      <div v-else>There is no stored countries</div>
    </div>
  </div>
</template>
<script setup lang="ts">
/*
  here is an example of how usefull are components in vue, i builded an entire functional list (similar to the main list)
  with a few lines of code
*/
import CountriesSection from "@/components/sections/CountriesSection.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const storedCountries = computed(() => {
  return store.state.storedCountries || [];
});
</script>
