<template>
  <h2>My Name is Jorje Rae</h2>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "Navbar",
    props: {
      cool: {
        type: Boolean,
        default: false
      },
    }
  })
</script>

<style lang="scss">
  h2 {
    font-size: 150px;
    margin: 0;
  }
</style>
