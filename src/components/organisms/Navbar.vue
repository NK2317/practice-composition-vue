<template>
  <navbar-content :list="list" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavbarContent from "../molecules/NavbarContent.vue";

export default defineComponent({
  components: { NavbarContent },
  data() {
    return {
      list: [
        { id: 1, label: "Countries", link: "/" },
        { id: 2, label: "My favorite countries", link: "/stored-countries" },
      ],
    };
  },
});
</script>
