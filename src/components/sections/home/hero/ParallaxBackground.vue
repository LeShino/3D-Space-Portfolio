<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import {motion, useScroll, useSpring, useTransform} from 'motion-v'


const { scrollYProgress } = useScroll();
const xSpringDamping = useSpring(scrollYProgress, {damping:50});
const mountain3Y = useTransform(xSpringDamping, [0, 0.5], ["0%","70%"]);
const planetsX = useTransform(xSpringDamping, [0, 0.5], ["0%","-20%"]);
const mountain2Y = useTransform(xSpringDamping, [0, 0.5], ["0%","30%"]);
const mountain1Y = useTransform(xSpringDamping, [0, 0.5], ["0%","0%"]);

const translateY = ref(0)

const handleScroll = () => {
  translateY.value = window.scrollY * 0.3 // Effet parallax
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="absolute inset-0 bg-black/40">
    <div class="relative h-screen overflow-y-hidden">
    <!--      <h1 class="text-5xl text-info-500">gtwertsertsertg</h1>-->
    <!--    Background sky-->
      <div class="absolute inset-0 w-full h-screen -z-50"
           style="background-image: url(/images/jpg/sky.jpg); background-position: bottom; background-size: cover;"
      />
    <!--    Mountain Layer 3-->
      <motion.div class="absolute inset-0 w-full h-screen -z-40"
           style="background-image: url(/images/png/mountain-3.png); background-position: bottom; background-size: cover;"
           :style="{ y: mountain3Y }"
      />
    <!--    Planets-->
    <motion.div class="absolute inset-0 w-full h-screen -z-30"
         style="background-image: url(/images/png/planets.png); background-position: bottom; background-size: cover;"
         :style="{ x: planetsX }"
    />
    <!--    Mountain Layer 2-->
    <motion.div class="absolute inset-0 w-full h-screen -z-20"
         style="background-image: url(/images/png/mountain-2.png); background-position: bottom; background-size: cover;"
         :style="{ y: mountain2Y }"
    />
    <!--    Mountain Layer 1-->
    <motion.div class="absolute inset-0 w-full h-screen -z-10"
         style="background-image: url(/images/png/mountain-1.png); background-position: bottom; background-size: cover;"
         :style="{ y: mountain1Y }"
    />
    </div>
  </section>
</template>

<style scoped>

</style>