<template>

	<div class="d-flex">
		<v-text-field variant="outlined" label="SEARCH" style="max-width: 30%; max-height: 1%; border-radius: 5px; color: #72A800" class="mt-5 ml-5"/>
		<router-link to="#" class="ml-8 mt-8"> <v-img src="../../assets/cor.png" width="30" height="30" /> </router-link>
		<router-link to="#" class="ml-5 mt-8"> <v-img src="../../assets/pok.png" width="30" height="30" /> </router-link>
	</div>


	<v-img src="../../assets/name.png" width="1500" height="500" style="margin-left: 10%; z-index: 1; position: absolute"/>
	<div>
	<v-img src="../../assets/car.png" width="1000" height="500" style=" margin-left: 25%; margin-top: 20%; z-index: 2; position: absolute" />
	<v-img src="../../assets/carpurple.png" width="1000" height="500" style=" margin-left: 24%; margin-top: 20%; z-index: 3; position: absolute" />
	<div class="neons" style="margin-top: 32%; margin-left: 45%; width: 20px; height: 20px; z-index: 5; position: absolute"/>
	<v-img src="../../assets/1.png" width="160" height="175" id="whellItems" style="position: absolute; z-index: 4; margin-top: 36%; margin-left: 49%" />
	<v-img src="../../assets/1.1.png" width="150" height="150" id="whellItemsTwo" style="position: absolute; z-index: 4; margin-top: 36%; margin-left: 72%" />
	</div>

	<div class="animate__animated animate__bounce animate__infinite" style="color: black; font-size: 40px; z-index: 3; position: absolute; margin-top: 35%; margin-left: 9%; font-family: Iceland, sans-serif"> scroll </div>
	<v-img class="animate__infinite animate__animated animate__fadeOutDown" src="../../assets/lineONE.png" width="65" height="50" style="z-index: 3; position: absolute; margin-top: 40%; margin-left: 10%"/>
	<v-img class="animate__infinite animate__animated animate__fadeOutDown" src="../../assets/lineTWO.png" width="80" height="50" style="z-index: 3; position: absolute; margin-top: 38%; margin-left: 9.5%"/>




</template>


<script setup lang="ts">

import {onMounted, ref} from "vue";

const imgItem = ref<HTMLElement>({} as HTMLElement )
let currentWheel = 0

const wheelCar = () => {
	imgItem.value = document.querySelector('#whellItems img')
	switch (currentWheel) {
		case 0: imgItem.value.setAttribute("src", "/src/assets/1.png"); break
		case 1: imgItem.value.setAttribute("src", "/src/assets/2.png"); break
		case 2: imgItem.value.setAttribute("src", "/src/assets/3.png"); break
		case 3: imgItem.value.setAttribute("src", "/src/assets/4.png"); break
		case 4: imgItem.value.setAttribute("src", "/src/assets/5.png"); break
		case 5: imgItem.value.setAttribute("src", "/src/assets/7.png"); break
		case 6: imgItem.value.setAttribute("src", "/src/assets/8.png"); break
		case 7: imgItem.value.setAttribute("src", "/src/assets/9.png"); break
		case 8: imgItem.value.setAttribute("src", "/src/assets/10.png"); break
		case 9: imgItem.value.setAttribute("src", "/src/assets/11.png"); break
	}

	currentWheel++
	if (currentWheel >= 10) {currentWheel = 0}
}

const wheelCarTwo = () => {
	imgItem.value = document.querySelector('#whellItemsTwo img')
	switch (currentWheel) {
		case 0: imgItem.value.setAttribute("src", "/src/assets/1.1.png"); break
		case 1: imgItem.value.setAttribute("src", "/src/assets/2.1.png"); break
		case 2: imgItem.value.setAttribute("src", "/src/assets/2.3.png"); break
		case 3: imgItem.value.setAttribute("src", "/src/assets/2.4.png"); break
		case 4: imgItem.value.setAttribute("src", "/src/assets/2.5.png"); break
		case 5: imgItem.value.setAttribute("src", "/src/assets/2.6.png"); break
		case 6: imgItem.value.setAttribute("src", "/src/assets/2.7.png"); break
		case 7: imgItem.value.setAttribute("src", "/src/assets/2.8.png"); break
		case 8: imgItem.value.setAttribute("src", "/src/assets/2.9.png"); break
		case 9: imgItem.value.setAttribute("src", "/src/assets/10.1.png"); break
	}

	currentWheel++
	if (currentWheel >= 10) {currentWheel = 0}
}

onMounted(() => {
	setInterval(() => wheelCar(), 50)
	setInterval(() => wheelCarTwo(), 50)
})





</script>



<style scoped>

.animationLineTwo {
	animation: infinite aw 	0.3s linear;
}
@keyframes aw {
	0% {

	}
	30% {
		rotate: 90deg;
	}
	60% {
		rotate: 180deg;
	}
	100% {
		rotate: 360deg;
	}
}

.neons {
	animation: neon .3s alternate-reverse infinite;
	animation-iteration-count: 5;
	//
}

@keyframes  neon {
	from{
		background-color: rgba(255,255,255,1);
		width: 2px;
		height: 2px;
		filter: blur(5px);
	}
	to {
		background-color: rgba(255,255,255,1);
		width: 20px;
		height: 20px;
		filter: blur(10px);
	}

}

</style>
