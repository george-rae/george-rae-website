<template>
  <section class="loading__screen">
    <p>
      <span v-for="(letter, index) in letters" :key="index">
        {{ letter }}
      </span>
    </p>
    <div class="loading-container">
      <div class="loading-container__bar"></div>
    </div>
  </section>
</template>

<script setup>
const letters = generateLetters("Loading...");
</script>
