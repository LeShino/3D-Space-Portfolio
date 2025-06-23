<script setup lang="ts">
import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'

/////Here the model show up but its a gtlf extension
// const { scene: model, animations } = await useGLTF(
//   'https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/ugly-naked-bunny/ugly-naked-bunny-animated.gltf',
// )

/////Here the model does not show up glb extension
const { scene: model, animations } = await useGLTF('/models/empyrean_zed.glb')

const { actions } = useAnimations(animations, model)

const currentAction = ref(actions.Greeting)

currentAction.value.play()

</script>

<template>
  <primitive :object="model" />
</template>