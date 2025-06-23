<script setup lang="ts">
import FlipWords from "@/components/ui/flip-words/FlipWords.vue";
</script>

<style scoped>
@keyframes fadeInWord {
  0% {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes fadeInLetter {
  0% {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.v-enter-active {
  animation: enterWord 0.6s ease-in-out forwards;
}

.v-leave-active {
  animation: leaveWord 0.6s ease-in-out forwards;
}

@keyframes enterWord {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leaveWord {
  0% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
  100% {
    opacity: 0;
    transform: scale(2);
    filter: blur(8px);
  }
}
</style>

<template>
  <div class="flex h-[40rem] items-center justify-center px-4">
    <div class="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
      Vuejs: The
      <FlipWords
          :words="['Progressive', 'Approachable', 'Performant', 'Versatile']"
          :duration="3000"
          class="text-4xl !text-primary"
      />
      <div>
        JavaScript Framework for building <br />
        Modern Web Apps
      </div>
    </div>
  </div>
</template>