<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref} from "vue";
import { motion } from "motion-v"


const isMenuMobileOpen = ref(false);
const toggleMenuMobile = () => {
  isMenuMobileOpen.value = !isMenuMobileOpen.value
}

</script>

<template>
    <div class="fixed inset-x-0 z-20 w-full backdrop-blur-lg ">
      <!-- Debut menu -->
      <div class="mx-auto c-space max-w-7xl">
        <div class="flex items-center justify-between py-2 sm:py-0">
          <router-link :to="{name: 'Home'}" class="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Laubet
          </router-link>
          <button @click="toggleMenuMobile" class="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <!-- {{ isOpen ? 'Fermer le menu' : 'Ouvrir le menu' }}-->
            <img v-if="isMenuMobileOpen" src="@/assets/images/svg/close.svg" alt="" class="w-6 h-6">
            <img v-else src="@/assets/images/svg/menu.svg" alt="" class="w-6 h-6">
          </button>
          <nav class="hidden sm:flex">
            <ul class="nav-ul">
              <li class="nav-li">
                <router-link :to="{name: 'Home'}" class="nav-link"> Home </router-link>
              </li>
              <li class="nav-li">
                <router-link :to="{name: 'Home'}" class="nav-link"> About </router-link>
              </li>
              <li class="nav-li">
                <router-link :to="{name: 'Home'}" class="nav-link"> Work </router-link>
              </li>
              <li class="nav-li">
                <router-link :to="{name: 'Home'}" class="nav-link"> Contact </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- Fin menu -->

      <!-- Debut menu mobile-->
      <motion.div v-if="isMenuMobileOpen"
                  class="block overflow-hidden text-center sm:hidden"
                  :initial="{opacity: 0, x: 10}"
                  :animate="{ opacity: 1, x: 0 }"
                  :style="{ maxHeight: '100vh' }"
                  :transition="{ duration: 1 }"
      >
        <nav class="pb-5">
          <ul class="nav-ul">
            <li class="nav-li">
              <router-link :to="{name: 'Home'}" class="nav-link"> Home </router-link>
            </li>
            <li class="nav-li">
              <router-link :to="{name: 'Home'}" class="nav-link"> About </router-link>
            </li>
            <li class="nav-li">
              <router-link :to="{name: 'Home'}" class="nav-link"> Work </router-link>
            </li>
            <li class="nav-li">
              <router-link :to="{name: 'Home'}" class="nav-link"> Contact </router-link>
            </li>
          </ul>
        </nav>
      </motion.div>
      <!-- Fin menu mobile-->

    </div>
</template>

<style scoped>

</style>