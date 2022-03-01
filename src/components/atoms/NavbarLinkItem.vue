<template>
  <router-link
    class="hover:bg-gray-700 hover:text-gray-50 rounded-full py-3 px-3"
    :to="link"
    :id="`_link_${id}`"
  >
    {{ label }}
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
    label: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
  },
});
</script>
