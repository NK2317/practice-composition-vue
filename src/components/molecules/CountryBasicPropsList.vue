<template>
  <ul class="list-disc space-y-1">
    <li>
      <strong>Spellings:</strong>
      {{ country.altSpellings?.join(", ") || "Not defined" }}
    </li>
    <li>
      <strong>Area:</strong>
      {{ country.area + " KM" || "Not defined" }}
    </li>
    <li>
      <strong>Borders with:</strong>
      {{ country.borders?.join(", ") || "Not defined" }}
    </li>
    <li>
      <strong>Capital:</strong>
      {{ country.capital?.join(", ") || "Not defined" }}
    </li>
    <li>
      <strong>Code CCA2:</strong>
      {{ country?.cca2 || "Not defined" }}
    </li>
    <li>
      <strong>Currencies</strong>
      <ul
        v-for="(currency, index) in country.currencies"
        :key="index"
        class="ml-4"
      >
        <li>Code: {{ index }}</li>
        <li>Name: {{ currency.name }}</li>
        <li>Symbol: {{ currency.symbol }}</li>
      </ul>
    </li>
    <li>
      <strong>Languages</strong>
      <ul
        v-for="(language, index) in country.languages"
        :key="index"
        class="ml-4"
      >
        <li>{{ index }}: {{ language }}</li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { Country } from "@/types/country";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    country: {
      required: true,
      type: Object as PropType<Country>,
    },
  },
});
</script>
