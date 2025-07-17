<script setup lang="ts">
import { ref } from "vue"
import FlipWords from "@/components/ui/flip-words/FlipWords.vue";
import { motion } from "motion-v"

const flipWordsFr = ['Modern','Stunning','Secure','Versatile', 'Scalable'];
const flipWordsEn = ['Secure', 'Progressive', 'Modern', 'Performant', 'Versatile', 'Scalable'];
const variants = {
  hidden:{opacity: 0, x: -50},
  visible:{opacity: 1, x: 0}
}
</script>

<template>
  <!-- Version Desktop -->
  <div class="flex-col hidden md:flex c-space"  >
    <motion.h1 class="text-4xl font-medium"
               :initial="{opacity: 0, x: -50}"
               :animate="{opacity: 1, x: 0}"
               :transition="{ delay: 1 }"
    >
      Hello I'm Laubet
    </motion.h1>
    <div class="flex flex-col items-start">
      <motion.p class="text-5xl font-medium text-neutral-300"
                :initial="{opacity: 0, x: -50}"
                :animate="{ opacity: 1, x: 0 }"
                :transition="{ delay: 1.2 }"
      >
        A Developer <br/> Dedicated to Crafting
      </motion.p>
      <motion.div
          :initial="{opacity: 0, x: -50}"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ delay: 1.5 }"
      >
        <FlipWords
            :words="flipWordsFr"
            :duration="3000"
            class="font-black text-white text-8xl"
        />
      </motion.div>
      <motion.p class="text-4xl font-medium text-neutral-300"
                :initial="{opacity: 0, x: -50}"
                :animate="{ opacity: 1, x: 0 }"
                :transition="{ delay: 1.5 }"
      >
        Web Solutions
      </motion.p>
    </div>
  </div>
  <!-- Version Desktop -->

  <!-- Version Mobile -->
  <div class="flex flex-col space-y-6 md:hidden">
    <motion.p class="text-4xl font-medium"
              :initial="{opacity: 0, x: -50}"
              :animate="{ opacity: 1, x: 0 }"
              :transition="{ delay: 1 }"
    >
      Hello I'm Laubet
    </motion.p>
    <div>
      <motion.p class="text-5xl font-bold text-neutral-300"
                :initial="{opacity: 0, x: -50}"
                :animate="{ opacity: 1, x: 0 }"
                :transition="{ delay: 1.2 }"
      >
        Building
      </motion.p>
      <motion.div
          :initial="{opacity: 0, x: -50}"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ delay: 1.5 }"
      >
        <FlipWords
            :words="flipWordsFr"
            :duration="3000"
            class="font-black text-white text-6xl text-center"
        />
      </motion.div>
      <motion.p class="text-4xl font-bold text-neutral-300 "
                :initial="{opacity: 0, x: -50}"
                :animate="{ opacity: 1, x: 0 }"
                :transition="{ delay: 1.8 }"
      >
        Web Applications
      </motion.p>
    </div>
  </div>
  <!-- Version Mobile -->
</template>

<style scoped>

</style>