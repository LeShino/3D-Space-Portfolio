<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'

/////Here the model does not show up glb extension
// const { scene: model, animations } = await useGLTF('/models/empyrean_zed.glb')
const { scene: model, animations } = await useGLTF('/models/spirit_blossom_sett.glb')

const { actions } = useAnimations(animations, model)



//Selection de l'animation
const currentAction = ref(actions.Respawn);
// const currentAction = ref(actions.Run_Homeguard);

//Selection de l'echelle de model
const modelScale = [0.007, 0.007, 0.007]

//Gestion de la rotation
const degToRad = (deg: number) => (deg * Math.PI) / 180;

const modelPosition = [1, 0.2, 0]

currentAction.value?.play()

const detectDevice = () => {
  // States dynamiques
  const modelScale = ref([0.007, 0.007, 0.007])
  const modelPosition = ref([0, 0, 0])

  const isMobile = window.matchMedia('(max-width: 600px)').matches
  const isTablet = window.matchMedia('(min-width: 601px) and (max-width: 1024px)').matches

  if (isMobile) {
    modelScale.value = [0.006, 0.006, 0.006]
    modelPosition.value = [0, -0.2, 0]
  } else if (isTablet) {
    modelScale.value = [0.004, 0.004, 0.004]
    modelPosition.value = [0, -0.1, 0]
  } else {
    modelScale.value = [0.005, 0.005, 0.005]
    modelPosition.value = [0, 0, 0]
  }
}


onMounted(() =>{
  console.log('Animations disponibles:', Object.keys(actions))

  // detectDevice();

  // Étape 1 : lancer l'animation initiale
  const intro = actions['Respawn']; // nom exact de l’animation à jouer en premier
  const idle = actions['Run_Base'];   // animation qui tournera en boucle ensuite

  if (intro && idle) {
    currentAction.value = intro
    intro.reset().play()

    // Étape 2 : après 5 secondes, arrêter l'intro et jouer Idle en boucle
    setTimeout(() => {
      intro.stop()
      currentAction.value = idle
      idle.reset().play()
    }, 2500)
  }
  else {
    console.warn('Les animations "Intro" ou "Idle" sont introuvables.')
  }
})
</script>

<template>
  <primitive :object="model" :scale="modelScale" :rotation="[0, degToRad(45), 0]" :position="modelPosition"/>
</template>