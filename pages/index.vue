<script setup lang="ts">
import { confetti, variation } from 'party-js'

function play(source: HTMLDivElement | MouseEvent) {
    confetti(source, {
        count: variation.range(20, 40)
    })
}
</script>

<template>
  <div @click="play">
    <invitation-overview />
  </div>
</template>

<style scoped>

</style>