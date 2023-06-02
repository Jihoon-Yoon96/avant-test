// packages/nuxt3-websites-package> index.ts
import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
    setup(_, nuxt) {
        nuxt.hook('components:dirs', dirs => {
            // 공통 컴포넌트
            dirs.push({
                path: join(__dirname, 'lib/components'),
            })
            // 공통 레이아웃
            dirs.push({
                path: join(__dirname, 'lib/layouts'),
                prefix: 'nx3',
            })
        })

        const { resolve } = createResolver(import.meta.url)

        /*
        * 공통 플러그인
        * 아래에서 위 순서로 nuxtApp에 인식됨
        * */
        addPlugin(resolve('lib/plugins/helper.ts'))
        addPlugin(resolve('lib/plugins/dayjs.ts'))
        addPlugin(resolve('lib/plugins/dialog.ts'))
        // addPlugin(resolve('lib/plugins/vee-validate.js'))
        addPlugin(resolve('lib/plugins/i18n.ts'))
        addPlugin(resolve('lib/plugins/popup.ts'))
    },
})