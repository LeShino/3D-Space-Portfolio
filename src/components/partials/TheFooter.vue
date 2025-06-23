<script setup>
import {socials} from "@/constants/socials.js";
</script>

<template>
  <section class="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
    <div class="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

    <div class="flex gap-2">
      <p>Terms & Conditions</p>
      <p>|</p>
      <p>Privacy Policy</p>
    </div>

    <div class="flex gap-3">
      <a v-for="(social, index) in socials" :key="index" :href="social.href" >
        <img :src="social.icon" class="w-5 h-5" :alt="social.name" />
      </a>
    </div>

    <p>© 2025 Ali. All rights reserved.</p>
  </section>
</template>

<style scoped>

</style>