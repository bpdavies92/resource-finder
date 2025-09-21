<template>
  <v-app>
    <v-app-bar :elevation="0" class="pr-12 pl-12 position-absolute top-0">
      <!-- <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template> -->

      <v-app-bar-title class="cursor-pointer" @click="router.push({path: '/'})">Resource finder</v-app-bar-title>

      <v-btn size="large" variant="text" to="/explore">Explore</v-btn>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>

const router = useRouter()

</script>