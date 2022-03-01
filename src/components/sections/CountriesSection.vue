<template>
  <div>
    <ul
      v-if="list.length > 0"
      class="w-full md:px-16 mx-auto bg-white rounded-xl flex flex-col"
    >
      <li v-for="item in list" :key="item.cca2">
        <CountryListItem
          class="transform transition hover:scale-105 shadow-xl user-row flex flex-col items-center justify-between p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]"
          :country="item"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Country } from "../../types/country";
import CountryListItem from "../organisms/CountryListItem.vue";

export default defineComponent({
  name: "CountriesSection",
  components: { CountryListItem },
  props: {
    list: {
      required: true,
      type: Array as PropType<Country[]>,
    },
  },
});
</script>
