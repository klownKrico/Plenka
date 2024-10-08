
<template>

	<v-row>


	<v-col cols="12" style="background-image: url('./src/assets/fone.png'); padding: inherit; background-size: cover; height: 102vh;">
		<MainScreen/>
	</v-col>

	<v-col cols="12" style="min-height: 270vh; padding: inherit">
		<Advantages/>
	</v-col>

	<v-col cols="12" style="min-height: 100vh; border: aqua 1px solid;">
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

</style>
