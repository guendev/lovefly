import { presetWebFonts } from '@unocss/preset-web-fonts'
import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
    presets: [
        presetWind3(),
        presetWebFonts({
            fonts: {
                dancing: 'Dancing Script',
                vibes: 'Great Vibes'
            }
        })
    ]
})