<template>

    <FoneAdvantages style="position: absolute; z-index: 0" />

    <div class="header" style="height: 100%; width: 100%; border: #A4D144 1px solid">

        <v-row>
            <v-col cols="6" style="border: #A4D144 1px solid; height: 250vh">

                <div class="left_fonkitchen" style=" background-color: black; width: 60vh; height: 160vh; border-radius: 10px; margin-top: 9%; margin-left: 4%">

                    <div class="left_kitchen" style="position: absolute; z-index: 2; font-family: Iceland, sans-serif; font-size: 55px; color: white; margin-top: 5vh; margin-left: 13%"> for your kitchen </div>
                    <v-img class="left_kitchen" width="500" height="500" src="./src/assets/kitchenn.png" style="margin-top: 20vh"/>

                    <div class="left_kitchen" style="font-family: Iceland, sans-serif; font-size: 55px; color: white; margin-top: 5vh; margin-left: 7vh"> for your home </div>
                    <v-img class="left_kitchen" width="400" height="400" src="./src/assets/stena.png" style="margin-top: 5vh"/>

                    <div class="left_text" style="width: 45vh; height: fit-content">
                        <div style="font-family: Iceland, sans-serif; font-size: 55px; color: black;"> WE ARE THE BEST </div>
                        <div style="font-family: Iceland, sans-serif; font-size: 35px; color: black;"> fast delivery, individual packaging, high quality at a low price, prompt assistance, convenient website </div>
                    </div>

                </div>

            </v-col>

            <v-col cols="6" style="border: #d700ff 1px solid">

                  <div class="right_text" style=" width: 75vh; height: fit-content; margin-left: 30vh; margin-top: 10vh;">
                    <div style="font-family: Iceland, sans-serif; font-size: 55px; color: black;"> WRAP EVERYTHING </div>
                    <div style="font-family: Iceland, sans-serif; font-size: 35px; color: black;">
                        you can paste over metal, wood, concrete, many coverings and decorate your kitchen, room or furniture with it. you can use printed film to advertise on walls and objects. </div>
                  </div>

            </v-col>










<!--        <v-img class="right_kitchen" width="520" height="600" src="./src/assets/banner.png" style="position: absolute; z-index: 3; margin-left: 61%; margin-top: 63%"/>-->
<!--        <div class="right_kitchen" style="background-color: black; width: 60vh; height: 40%; border-radius: 10px; position: absolute; z-index: 1; margin-top: 50%; margin-left: 59%"/>-->
<!--        <div class="right_kitchen" style="font-family: Iceland, sans-serif; font-size: 55px; color: white; position: absolute; z-index: 2; margin-top: 55%; margin-left: 62%"> for your advertising </div>-->

<!--        <v-img class="right_kitchen" width="520" height="600" src="./src/assets/tumba.png" style="position: absolute; z-index: 3; margin-left: 63%; margin-top: 100%"/>-->
<!--        <div class="right_kitchen" style="background-color: black; width: 60vh; height: 37%; border-radius: 10px; position: absolute; z-index: 1; margin-top: 80%; margin-left: 59%"/>-->
<!--        <div class="right_kitchen" style="font-family: Iceland, sans-serif; font-size: 55px; color: white; position: absolute; z-index: 2; margin-top: 95%; margin-left: 66%"> for your furniture </div>-->

        </v-row>
    </div>



</template>


<script setup lang="ts">

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";
import FoneAdvantages from "./FoneAdvantages.vue";
import LeftAdvantages from "./LeftAdvantages.vue";

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {

    gsap.to('.left_kitchen', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 10.9
        },
        xPercent: 15,
    })

    gsap.to('.left_fonkitchen', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 5
        },
        xPercent: 42,
    })

    gsap.to('.right_kitchen', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 30.9
        },
        xPercent: -15,
    })

    gsap.to('.right_text', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 10.9
        },
        xPercent: -35,
    })

    gsap.to('.left_text', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 30.9
        },
        xPercent: 15,
    })

})



</script>



<style scoped>

.ror {
    stroke-dasharray: 40;
    stroke-dashoffset: 400;
    animation: rore 15s linear infinite;
}

@keyframes rore {
    to {
        stroke-dashoffset: 0;
    }
}

.rpr {
    stroke-dasharray: 40;
    stroke-dashoffset: 400;
    animation: rpre 15s linear infinite;
}

@keyframes rpre {
    to {
        stroke-dashoffset: 0;
    }
}

</style>
