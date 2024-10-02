
<template>

	<v-row>


	<v-col cols="12" style="min-height: 100vh; border: aliceblue 1px solid; background-color: aliceblue">
		<MainScreen/>
	</v-col>

	<v-col cols="12" style="min-height: 200vh; border: aquamarine 1px solid;  background-color: aliceblue">
		<Advantages/>
	</v-col>

	<v-col cols="12" style="min-height: 100vh; border: aqua 1px solid;  background-color: aliceblue">
		<Order/>
	</v-col>

	<v-col cols="12" style="min-height: 20vh; border: blueviolet 1px solid;  background-color: aliceblue">
		<Info/>
	</v-col>


	</v-row>
</template>


<script setup lang="ts">

import MainScreen from "@/views/components/MainScreen.vue";
import Advantages from "@/views/components/Advantages.vue";
import Order from "@/views/components/Order.vue";
import Info from "@/views/components/Info.vue";
</script>



<style scoped>

</style>
