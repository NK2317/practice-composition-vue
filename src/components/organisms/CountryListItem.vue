<template>
  <div>
    <div
      class="user flex items-center text-center flex-col sm:flex-row sm:text-left"
    >
      <div class="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
        <img
          class="avatar w-20 h-20"
          :src="country.flags.png || ''"
          async
          alt="flag"
        />
      </div>
      <div class="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
        <a href="#" class="text-xl no-underline">
          {{ country.name.common }} ({{ country.name.official }})
        </a>
        <div class="flex flex-col">
          <span class="text-gray-800"> Continent: {{ country.region }} </span>
        </div>
        <div class="flex flex-col">
          <span class="text-blue-600">
            Population: {{ country.population }}
          </span>
        </div>
      </div>
    </div>
    <div class="user-option mx-auto sm:ml-auto sm:mr-0 space-x-3">
      <button-default @click="goDetail()"> See more </button-default>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Country } from "@/types/country";
import ButtonDefault from "../atoms/ButtonDefault.vue";
export default defineComponent({
  components: { ButtonDefault },
  props: {
    country: {
      required: true,
      type: Object as PropType<Country>,
    },
  },
  methods: {
    goDetail() {
      localStorage.setItem("country", JSON.stringify(this.country));
      this.$router.push("/detail");
    },
  },
});
</script>
