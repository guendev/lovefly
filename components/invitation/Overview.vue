<script setup lang="ts">
import type { AnimationOptions, AnimationPlaybackControls, AnimationSequence } from 'motion-v'

import { NuxtImg } from '#components'
import { stagger } from 'motion-v'

const [scope, animate] = useAnimate()

onMounted(async () => {
    const sequence: AnimationSequence = [
        [
            '.flowers1',
            {
                opacity: [0, 1],
                y: [0, 50]
            },
            {
                duration: 1
            }
        ],
        [
            '.flowers2',
            {
                opacity: [0, 1],
                y: [0, -50]
            },
            {
                at: 0,
                duration: 1
            }
        ],
        [
            '.overview-item',
            {
                opacity: [0, 1],
                y: [50, 0]
            },
            {
                at: 0,
                delay: stagger(0.1),
                duration: 0.5,
                ease: 'easeInOut'
            }
        ],
        [
            '.sasunaru1',
            {
                opacity: [0, 1],
                x: [-50, 0]
            },
            {
                at: 0,
                duration: 1,
                ease: 'easeInOut'
            }
        ],
        [
            '.sasunaru2',
            {
                opacity: [0, 1],
                x: [50, 0]
            },
            {
                at: 0,
                duration: 1,
                ease: 'easeInOut'
            }
        ]
    ]

    await animate(sequence).finished

    // Flowers animation
    const flowersOptions: AnimationOptions = {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse'
    }
    animate(
        '.flowers1',
        {
            y: [50, 0]
        },
        flowersOptions
    )
    animate(
        '.flowers2',
        {
            y: [-50, 0]
        },
        flowersOptions
    )
})

const HCircleImage = defineComponent({
    props: {
        flip: {
            default: false,
            type: Boolean
        },
        src: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const target = ref<HTMLDivElement>()
        const controller = ref<AnimationPlaybackControls>()
        const id = useId()

        const isHovered = useElementHover(target)
        debouncedWatch(isHovered, (value) => {
            if (value) {
                controller.value?.play()
            }
            else {
                controller.value?.cancel()
            }
        }, {
            debounce: 200
        })

        onMounted(() => nextTick(() => {
            controller.value = animate(
                `#${id}`,
                {
                    scale: [1, 1.03]
                },
                {
                    autoplay: false,
                    duration: 1,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse'
                }
            )
        }))

        return () => h('div', {
            class: `relative isolate ${props.flip ? 'rotate-180' : ''}`,
            ref: target
        }, [
            h(
                'div',
                {
                    class: 'w-55 lg:w-65 aspect-5/7 rounded-full overflow-hidden border border-solid p-3 border-gray-400',
                    id
                },
                [
                    h(NuxtImg, {
                        class: 'w-full h-full object-cover rounded-full',
                        src: props.src
                    })
                ]
            ),
            [
                h(
                    NuxtImg,
                    {
                        class: twMerge(
                            'w-24 absolute bottom-0 translate-y-10',
                            props.flip ? 'right-0 translate-x-5 -scale-x-full' : 'left-0 -translate-x-5'
                        ),
                        src: '/images/icon-flowers-3.png'
                    }
                ),
                h(
                    NuxtImg,
                    {
                        class: twMerge(
                            'w-24 absolute top-0 -translate-y-10',
                            props.flip ? 'left-0 -scale-x-full -translate-x-5' : 'right-0 translate-x-5'
                        ),
                        src: '/images/icon-flowers-4.png'
                    }
                )
            ]
        ])
    }
})
</script>

<template>
  <div ref="scope" class="relative isolate">
    <div class="relative z-3 lg:pt-50 pt-40 pb-17 px-16">
      <div class="flex justify-evenly flex-col lg:flex-row items-center gap-y-12">
        <HCircleImage
          class="sasunaru1 opacity-0" src="/images/naruto/sasunaru-1.jpg"
        />
        <div class="flex flex-col items-center gap-y-2 order-first lg:order-none">
          <p class="overview-item uppercase text-center tracking-wider font-medium">
            Chúng mình cưới
          </p>
          <div class="font-vibes flex-col flex items-center text-5xl gap-y-4">
            <h1 class="overview-item text-center mt-2">
              Uzumaki Naruto
            </h1>
            <div class="overview-item text-7xl font-dancing">
              &
            </div>
            <h1 class="overview-item text-center mt-2">
              Uchiha Sasuke
            </h1>
          </div>
          <div class="overview-item flex flex-col gap-y-1 mt-6">
            <div class="w-full h-0.5 bg-gray-800" />
            <div class="font-dancing text-3xl word-spacing-widest tracking-widest">
              25 Tháng 12, 2024
            </div>
            <div class="w-full h-0.5 bg-gray-800" />
          </div>

          <div class="overview-item flex items-center gap-x-1 mt-3">
            <icon name="solar-map-point-favourite-bold" />
            <span>The Village Hidden in the Leaves</span>
          </div>
        </div>
        <HCircleImage flip class="sasunaru2 opacity-0" src="/images/naruto/sasunaru-2.webp" />
      </div>
    </div>
    <NuxtImg src="/images/overlay.jpg" class="inset-0 size-full absolute z-1" />

    <NuxtImg src="/images/icon-flowers-1.png" class="flowers1 absolute left-0 bottom-20 lg:w-50 w-40 z-2" />
    <NuxtImg src="/images/icon-flowers-2.png" class="flowers2 absolute right-0 top-20 lg:w-50 w-40 z-2" />
  </div>
</template>

<style scoped>
.overview-item {
    opacity: 0;
}
</style>