<template>
  <h1>
    <span v-for="(letter, index) in letters" :key="index">
      {{ letter }}
    </span>
  </h1>
</template>

<script setup>
const letters = generateLetters();
</script>
