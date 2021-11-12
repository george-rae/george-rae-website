<template>
  <div>
    <SiteHeader />
    <main class="page" :class="`page--${String($route.name)}`">
      <slot />
    </main>
  </div>
</template>
