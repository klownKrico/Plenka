<template>

    <div class="animate__animated animate__fadeInDown"
         style="font-family: Iceland, sans-serif; font-size: 40px; color: #d3d3d3; margin-left: 60%; word-spacing: 1em; position: fixed; z-index: 20">
        <router-link to="#"> assortiment</router-link>
        <router-link to="#"> basket</router-link>
        <router-link to="#"> support</router-link>
    </div>

    <car-background style="position:absolute; z-index: 0; width: 100%; height: 100%"/>


    <v-row>

        <v-col cols="6" style="height: 90vh">

            <v-img style="position: absolute" class="animate__animated animate__flipInY animate__two mt-6 ml-10" src="./src/assets/logo.svg" width="200"/>

            <v-img class="animate__infinite animate__animated animate__fadeOutDown" src="./src/assets/lineONE.png"
                   width="65" height="50" style=" margin-left: 10vh; margin-top: 65vh"/>
            <v-img class="animate__infinite animate__animated animate__fadeOutDown" src="../src/assets/lineTWO.png"
                   width="80" height="45" style=" margin-left: 9vh"/>

        </v-col>

    <v-col cols="6" class="header" style="height: 90vh">
        <div class="leftinfo"
             style="margin-left: 100%;  margin-top: 10%; z-index: 6; width: 100vh; height: 50vh">
            <div class="mt-5 title__film stroke"
                 style="font-family: Iceland, sans-serif; color: white; font-size: 50px; margin-left: 20%">
                Film for your cars
            </div>
            <div class="subtitle__film stroke"
                 style="font-family: Iceland, sans-serif; color: white; font-size: 30px; line-height: 30px; margin-top: 2%; margin-left: 20%">
                <p> The ideal coating of any color and size,</p>
                <p>order or look for it in car dealerships in your city</p>
            </div>
        </div>
    </v-col>

    </v-row>




        <div class="d-flex section-title" style=" background-color: black; width: fit-content; height: 8vh; color: #4f4f4f; font-family: Iceland, sans-serif; font-size: 40px; margin-top: 7vh">

          <InfoTop/>

        </div>


</template>


<script setup lang="ts">

import anime from 'animejs/lib/anime.es.js';
import {onMounted, ref} from "vue";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import InfoTop from "./InfoTop.vue";
import CarBackground from "./CarBackground.vue";

gsap.registerPlugin(ScrollTrigger);



onMounted(() => {

    setTimeout(() => {
        anime({
            targets: '.iconanimat',
            translateX: 270,
            direction: 'alternate',
            loop: 1,
            duration: 1000,
            easing: function (el, i, total) {
                return function (t) {
                    return Math.pow(Math.sin(t * (i + 1)), total);
                }
            }
        })
    }, 2000)

    setTimeout(() => {
        anime({
            targets: '.leftinfo',
            translateX: -700,
            direction: 'alternate',
            easing: 'easeInOutSine',
            endDelay: 6000,
        });
    }, 60)


    setTimeout(() => {
        gsap.to('.title__film', {
            x: 150,
            scale: 1.5,
            duration: 2,
        })
    }, 1000)

    setTimeout(() => {
        gsap.to('.subtitle__film', {
            x: -150,
            scale: 0.8,
            duration: 2,
        })
    }, 1000)




    gsap.to('.header .stroke', {
    scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 1.9
    },
    xPercent: 500
    })

    gsap.to('.header_img', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        xPercent: -150
    })

    gsap.to('.header_imghells', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        xPercent: -950
    })

    gsap.to('.section-title', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 1.9
        },
        xPercent: -20,
    })

    setTimeout(() => {
        livLogo()
    }, 1500)



})



const livLogo = () => {
    document.querySelector('.animate__two').classList.add('animate__flipOutY')
}



</script>


<style scoped>
.header {
    position: relative;
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

</style>
