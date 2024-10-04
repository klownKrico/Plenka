
<template>

	<v-row>


	<v-col cols="12" style="background-image: url('./src/assets/fone.png'); height: 100vh;">
		<MainScreen/>
	</v-col>

	<v-col cols="12" style="min-height: 300vh; border: aquamarine 1px solid">
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
</script>



<style scoped>
</style>
