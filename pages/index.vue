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
    <invitation-timeline />
    <invitation-info />
    <invitation-deadline />
  </div>
</template>

<style scoped>

</style>