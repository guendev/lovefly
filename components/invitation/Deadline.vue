<script setup lang="ts">
import { differenceInSeconds } from 'date-fns'

const deadlineString = '31/07/2025'
const [day, month, year] = deadlineString.split('/').map(Number)
const deadline = new Date(year, month - 1, day, 0, 0, 0)

const now = useNow({ interval: 1000 })

const remaining = computed(() => {
    const totalSeconds = Math.max(0, differenceInSeconds(deadline, now.value))

    const days = Math.floor(totalSeconds / (60 * 60 * 24))
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    const seconds = totalSeconds % 60

    return [
        { label: 'Ngày', value: days },
        { label: 'Giờ', value: hours },
        { label: 'Phút', value: minutes },
        { label: 'Giây', value: seconds }
    ]
})
</script>

<template>
  <div class="flex flex-col items-center gap-y-6 py-12 bg-pattern-4 bg-cover">
    <div class="text-center text-yellow-500">
      CHO ĐẾN NGÀY
    </div>
    <div class="text-5xl text-center tracking-widest font-dancing font-semibold">
      Về Chung Một Nhà
    </div>
    <div class="text-gray-400">
      Cùng chúng mình đếm ngược nhé!
    </div>
    <div class="w-full py-4 px-4">
      <div
        class="flex flex-col lg:flex-row items-center gap-y-8 justify-evenly font-dancing border-2 border-gray-600 rounded-full py-12 max-w-5xl mx-auto"
      >
        <div
          v-for="(item, index) in remaining" :key="index"
          class="text-center before:last:hidden before:hidden lg:before:block before:content-empty relative isolate before:absolute before:h-full before:w-px before:right-0 before:top-0 w-full before:bg-gray-200"
        >
          <div class="text-6xl">
            {{ item.value }}
          </div>
          <div class="text-xl mt-3">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>