<template>
<div ref="container">
<!--<v-parallax src="./src/assets/plenkaPlusMetall.png">-->

<!--</v-parallax>-->


</div>
</template>


<script setup lang="ts">
import { useParallax } from '@vueuse/core'
import {ref} from "vue";

const container = ref(null)
const { tilt, roll, source } = useParallax(container)


</script>



<style scoped>



</style>
