<template>
  <v-app>
    <v-main>
      <router-view />
      <Warp/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
import Warp from "@/views/components/Warp.vue";
</script>
