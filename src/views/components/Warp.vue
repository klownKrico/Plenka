
<template>

	<v-row no-gutters class="ob">


	<v-col cols="12" style="background-image: url('./src/assets/fone.png'); padding: inherit; background-size: cover; height: 102vh;">
		<MainScreen/>
	</v-col>

	<v-col cols="12" style="min-height: 250vh; padding: inherit">
		<Advantages/>
	</v-col>

	<v-col cols="12" style="height: 100vh; background-image: url('./src/assets/metall.svg'); padding: inherit; background-size: cover; overflow-y: hidden;">
		<Order/>
	</v-col>

	<v-col cols="12" style="min-height: 20vh; border: blueviolet 1px solid;">
		<Info/>
	</v-col>


	</v-row>
</template>


<script setup lang="ts">


import MainScreen from "./MainScreen.vue";
import Advantages from "./Advantages.vue";
import Order from "./Order.vue";
import Info from "./Info.vue";
import InfoTop from "./InfoTop.vue";
</script>



<style scoped>

.ob * {
  overflow-y: hidden;
}

</style>
