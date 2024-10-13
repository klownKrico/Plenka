<template>

    <div style="position: relative; width: 100%; height: 100vh; z-index: 1;" class="header">
        <div class="car d-flex justify-center align-center" style="width: 100%; height: 100vh; position: relative">
            <v-img class="header_img" src="./src/assets/car.png" width="1000" height="500"
                   style="z-index: 2; position: absolute"/>
            <v-img class="header_img" src="./src/assets/carpurple.png" width="1000" height="500"
                   style="z-index: 3; position: absolute"/>

            <div style="height: 20vh; width: 20vh">
                <v-img class="header_imghells" src="./src/assets/1.png" width="160" height="173" id="leftWheel"
                       style="position: absolute; z-index: 4; margin-top: 2.3vh; margin-left: 1vh"/>
            </div>
            <div style="height: 20em; width: 20em">
                <v-img src="./src/assets/1.1.png" width="160" height="173" id="rightWheel"
                       style="position: absolute; z-index: 4; margin-top: calc(10em - 100px); margin-left: calc(10em - 100px)"/>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {gsap} from "gsap";
let currentWheel = 0

const rightWheel = ref<HTMLElement>({} as HTMLElement)
const leftWheel = ref<HTMLElement>({} as HTMLElement)

const wheelCar = () => {
    leftWheel.value = document.querySelector('#leftWheel img')
    rightWheel.value = document.querySelector('#rightWheel img')

    switch (currentWheel) {
        case 0:
            leftWheel.value.setAttribute("src", "/src/assets/1.png");
            break
        case 1:
            leftWheel.value.setAttribute("src", "/src/assets/2.png");
            break
        case 2:
            leftWheel.value.setAttribute("src", "/src/assets/3.png");
            break
        case 3:
            leftWheel.value.setAttribute("src", "/src/assets/4.png");
            break
        case 4:
            leftWheel.value.setAttribute("src", "/src/assets/5.png");
            break
        case 5:
            leftWheel.value.setAttribute("src", "/src/assets/7.png");
            break
        case 6:
            leftWheel.value.setAttribute("src", "/src/assets/8.png");
            break
        case 7:
            leftWheel.value.setAttribute("src", "/src/assets/9.png");
            break
        case 8:
            leftWheel.value.setAttribute("src", "/src/assets/10.png");
            break
        case 9:
            leftWheel.value.setAttribute("src", "/src/assets/11.png");
            break
    }

    switch (currentWheel) {
        case 0:
            rightWheel.value.setAttribute("src", "/src/assets/1.1.png");
            break
        case 1:
            rightWheel.value.setAttribute("src", "/src/assets/2.1.png");
            break
        case 2:
            rightWheel.value.setAttribute("src", "/src/assets/2.3.png");
            break
        case 3:
            rightWheel.value.setAttribute("src", "/src/assets/2.4.png");
            break
        case 4:
            rightWheel.value.setAttribute("src", "/src/assets/2.5.png");
            break
        case 5:
            rightWheel.value.setAttribute("src", "/src/assets/2.6.png");
            break
        case 6:
            rightWheel.value.setAttribute("src", "/src/assets/2.7.png");
            break
        case 7:
            rightWheel.value.setAttribute("src", "/src/assets/2.8.png");
            break
        case 8:
            rightWheel.value.setAttribute("src", "/src/assets/2.9.png");
            break
        case 9:
            rightWheel.value.setAttribute("src", "/src/assets/10.1.png");
            break
    }

    currentWheel++
    if (currentWheel >= 10) {
        currentWheel = 0
    }
}


onMounted(() => {
    setInterval(() => {
        wheelCar()
    }, 50)

    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        xPercent: -500
    })
})
</script>

<style scoped>

</style>