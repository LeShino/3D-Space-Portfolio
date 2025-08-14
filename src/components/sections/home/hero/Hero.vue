<script setup lang="ts">
import { ref } from "vue";
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

import HeroText from "@/components/sections/home/hero/HeroText.vue";
import ParallaxBackground from "@/components/sections/home/hero/ParallaxBackground.vue";
import ZedEmpyrean3D from "@/components/sections/home/hero/SettSpiritBlossom3D.vue";


</script>

<template>
  <section class="flex flex-col items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
    <div class="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <HeroText></HeroText>
      <ParallaxBackground></ParallaxBackground>

      <!-- start 3D glb model -->
      <div class="absolute inset-0  ">
       <TresCanvas class="border-2 hover:border-primary-100 ">
         <OrbitControls :enableZoom="false" :enableRotate="false" :enablePan="false" />
         <Suspense>
           <ZedEmpyrean3D />
         </Suspense>
       </TresCanvas>
      </div>
      <!-- start 3D glb model -->

    </div>
  </section>


<!--    <section class="flex flex-col md:flex-row min-h-screen overflow-hidden ">-->
<!--      &lt;!&ndash; Texte à gauche &ndash;&gt;-->
<!--      <div class="w-full md:w-1/2 z-10">-->
<!--        <HeroText />-->
<!--      </div>-->

<!--      &lt;!&ndash; Modèle à droite &ndash;&gt;-->
<!--      <div class="w-full md:w-1/2 relative">-->
<!--               <TresCanvas class="border-2 border-amber-600">-->
<!--                 <OrbitControls />-->
<!--                 <Suspense>-->
<!--                   <ZedEmpyrean3D />-->
<!--                 </Suspense>-->
<!--               </TresCanvas>-->
<!--      </div>-->
<!--    </section>-->
</template>

<style scoped>

</style>