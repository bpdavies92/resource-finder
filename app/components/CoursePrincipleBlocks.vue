<template>
  <v-sheet color="warning" class="rounded-xl overflow-hidden">
    <v-img
    :src="image"
    cover

    ></v-img>
    <div class="pa-3">
      <h3><slot name="principle"></slot></h3>
    </div>
  </v-sheet>
</template>

<script setup>
  
  const props = defineProps(['image'])


</script>
