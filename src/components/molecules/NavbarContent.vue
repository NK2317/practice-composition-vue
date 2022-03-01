<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-16 py-2.5 mb-2 rounded dark:bg-gray-800 shadow-lg"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex">
        <icon-world />
        <span
          class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
        >
          Countries vue app
        </span>
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-medium"
        >
          <li v-for="item in list" :key="item.id">
            <navbar-link-item
              :id="item.id"
              :label="item.label"
              :link="item.link"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import IconWorld from "@/components/atoms/icons/IconWorld.vue";
import { defineComponent, PropType } from "vue";
import NavbarLinkItem from "../atoms/NavbarLinkItem.vue";
type NavbarLink = { id: number; label: string; link: string };

export default defineComponent({
  components: { NavbarLinkItem, IconWorld },
  props: {
    list: {
      required: true,
      type: Array as PropType<NavbarLink[]>,
    },
  },
});
</script>
