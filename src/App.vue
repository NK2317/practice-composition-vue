<template>
  <div class="justify-between">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/organisms/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>
