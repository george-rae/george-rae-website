<template>
  <div class="menu-button" @click="toggleMenu">
    <span class="menu-button__bar menu-button__bar--top">&nbsp;</span>
    <span class="menu-button__bar menu-button__bar--burger">&nbsp;</span>
    <span class="menu-button__bar menu-button__bar--bottom">&nbsp;</span>
  </div>
  <SiteMenu />
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    function toggleMenu() {
      const header = document.querySelector("header");

      header.classList.toggle("menu-active");
      document.body.classList.toggle("menu-active");
    }

    return { toggleMenu };
  },
});
</script>
