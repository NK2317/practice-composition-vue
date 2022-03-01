<template>
  <button
    class="p-2 border-2 border-gray-800 text-gray-800 bg-white hover:bg-gray-800 hover:text-gray-50 rounded-md"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      defaul: "Default button text",
    },
  },
});
</script>
