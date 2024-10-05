

<template>
<div class="d-flex">


    <div class="section-title__square" style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
S
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
H
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
S
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
T
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
J
    </div>    <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div>  <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
K
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
X
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
V
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
E
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
A
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
I
    </div> <div style="font-size: 270px; font-family: Iceland, sans-serif; color: black; height: fit-content;width: fit-content; border: #A4D144 1px solid">
p
    </div>


</div>
</template>

<script setup lang="ts">
import {gsap} from "gsap";
import registerPlugin = gsap.registerPlugin;
gsap.registerPlugin(ScrollTrigger)

const gsapsq = gsap.utils.toArray('.section-title__square');
gsapSq. forEach((gSq, i) => {
    const rotat = gsap.from(gSq, 3, {rotation: 720})
    ;
    ScrollTrigger.create({
        trigger: gSq,
        animation: rotat,
        start: 'top- bottom',
        scrub: 1.9
    })
})

</script>

<style scoped>

</style>