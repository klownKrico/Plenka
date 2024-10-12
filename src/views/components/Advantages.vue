<template>

    <div class="header" style="height: 100%; width: 100%; border: #A4D144 1px solid; position: relative">

        <v-img class="left_kitchen" width="600" height="600" src="./src/assets/kitchenn.png" style="position: absolute; z-index: 3; margin-top: 20%"/>
        <div class="left_kitchen" style="background-color: black; width: 60vh; height: 40%; border-radius: 10px; position: absolute; z-index: 1; margin-top: 9%; margin-left: 4%"/>
        <div class="left_kitchen" style="font-family: Iceland, sans-serif; font-size: 55px; color: white; position: absolute; z-index: 2; margin-top: 13%; margin-left: 13%"> for your kitchen </div>


      <div class="right_text" style=" width: fit-content; height: fit-content; margin-left: 65%; margin-top: 19%; position: absolute; z-index: 1">
        <div style="font-family: Iceland, sans-serif; font-size: 55px; color: black;"> WRAP EVERYTHING </div>
        <div style="font-family: Iceland, sans-serif; font-size: 35px; color: black;">
            you can paste over metal, wood, concrete, many coverings and decorate your kitchen, room or furniture with it. you can use printed film to advertise on walls and objects. </div>
      </div>




        <v-img class="left_kitchen" width="520" height="600" src="./src/assets/stena.png" style="position: absolute; z-index: 3; margin-left: 6%; margin-top: 63%"/>
        <div class="left_kitchen" style="background-color: black; width: 60vh; height: 30%; border-radius: 10px; position: absolute; z-index: 1; margin-top: 50%; margin-left: 4%"/>
        <div class="left_kitchen" style="font-family: Iceland, sans-serif; font-size: 55px; color: white; position: absolute; z-index: 2; margin-top: 60%; margin-left: 7%"> for your home </div>


        <div style="font-family: Iceland, sans-serif; margin-left: 5%; margin-top: 10%; font-size: 55px; color: black; position: absolute; z-index: 0; line-height: 60px;"> <p> I </p>
            <p> N </p>
            <p> D </p>
            <p> I </p>
            <p> V </p>
            <p> I </p>
            <p> D </p>
            <p> U </p>
            <p> A </p>
            <p> L </p>
            <p> P </p>
            <p> A </p>
            <p> C </p>
            <p> K </p>
            <p> A </p>
            <p> G </p>
            <p> I </p>
            <p> N </p>
            <p> G </p>
        </div>


 <div style="font-family: Iceland, sans-serif; margin-left: 89%; margin-top: 50%; font-size: 55px; color: black; position: absolute; z-index: 0; line-height: 60px;">
            <p> E </p>
            <p> X </p>
            <p> P </p>
            <p> R </p>
            <p> E </p>
            <p> S </p>
            <p> S </p>
            <p> D </p>
            <p> E </p>
            <p> L </p>
            <p> I </p>
            <p> V </p>
            <p> E </p>
            <p> R </p>
            <p> G </p>
            <p> Y </p>
        </div>


        <div class="left_text" style="width: 45vh; height: fit-content; margin-left: 13%; margin-top: 105%; position: absolute; z-index: 1">
            <div style="font-family: Iceland, sans-serif; font-size: 55px; color: black;"> WE ARE THE BEST </div>
            <div style="font-family: Iceland, sans-serif; font-size: 35px; color: black;"> fast delivery, individual packaging, high quality at a low price, prompt assistance, convenient website </div>
        </div>

        <v-img class="right_kitchen" width="520" height="600" src="./src/assets/banner.png" style="position: absolute; z-index: 3; margin-left: 61%; margin-top: 63%"/>
        <div class="right_kitchen" style="background-color: black; width: 60vh; height: 40%; border-radius: 10px; position: absolute; z-index: 1; margin-top: 50%; margin-left: 59%"/>
        <div class="right_kitchen" style="font-family: Iceland, sans-serif; font-size: 55px; color: white; position: absolute; z-index: 2; margin-top: 55%; margin-left: 62%"> for your advertising </div>

        <v-img class="right_kitchen" width="520" height="600" src="./src/assets/tumba.png" style="position: absolute; z-index: 3; margin-left: 63%; margin-top: 100%"/>
        <div class="right_kitchen" style="background-color: black; width: 60vh; height: 37%; border-radius: 10px; position: absolute; z-index: 1; margin-top: 80%; margin-left: 59%"/>
        <div class="right_kitchen" style="font-family: Iceland, sans-serif; font-size: 55px; color: white; position: absolute; z-index: 2; margin-top: 95%; margin-left: 66%"> for your furniture </div>


    </div>



</template>


<script setup lang="ts">

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";

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
