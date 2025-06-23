<script setup lang="ts">
import { ref } from "vue";
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

import HeroText from "@/components/sections/home/hero/HeroText.vue";
import ParallaxBackground from "@/components/sections/home/hero/ParallaxBackground.vue";
import ZedEmpyrean3D from "@/components/sections/home/hero/ZedEmpyrean3D.vue";

// const gl = {
//   // clearColor: '#F78B3D',
//   shadows: true,
//   alpha: false,
//   shadowMapType: BasicShadowMap,
//   outputColorSpace: SRGBColorSpace,
//   toneMapping: NoToneMapping,
//   windowSize: true,
// }
</script>

<template>
  <section class="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
    <div class="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <HeroText></HeroText>
      <ParallaxBackground></ParallaxBackground>

      <!-- start 3D glb model -->
      <figure class="absolute inset-0">
       <TresCanvas class="border-2 border-amber-600">
         <OrbitControls />
         <Suspense>
           <ZedEmpyrean3D />
         </Suspense>
       </TresCanvas>
      </figure>
      <!-- start 3D glb model -->
       
    </div>
  </section>
</template>

<style scoped>

</style>