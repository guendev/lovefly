<script setup lang="ts">
interface Item {
    image: string
    subtitle: string
    time: string
    title: string
}

const items: Item[] = [
    {
        image: '/images/services2-1.png',
        subtitle: 'Đón dâu tại nhà nữ',
        time: '08:30',
        title: 'Đón dâu'
    },
    {
        image: '/images/services2-2.png',
        subtitle: 'Làm lễ tại nhà nam',
        time: '09:00',
        title: 'Làm lễ'
    },
    {
        image: '/images/services2-3.png',
        subtitle: 'Bắt đầu khai tiệc',
        time: '11:00',
        title: 'Khai tiệc'
    }
]
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-evenly py-10"
  >
    <div
      v-for="(item, index) in items" :key="index"
    >
      <div
        class="flex flex-col gap-y-2 items-center"
      >
        <nuxt-img
          :src="item.image"
          :alt="item.title"
          class="w-50"
        />
        <time class="text-gray-500 underline">{{ item.time }}</time>
        <h3 class="font-medium font-dancing text-4xl my-2">
          {{ item.title }}
        </h3>
        <p class="font-light text-gray-500">
          {{ item.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>