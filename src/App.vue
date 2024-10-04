<template>
  <v-app>
      <router-view />
      <Warp/>
  </v-app>

</template>

<script lang="ts" setup>
import Warp from "./views/components/Warp.vue";
import {gsap} from "gsap";

</script>


<style lang="scss">
 *{
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}
</style>