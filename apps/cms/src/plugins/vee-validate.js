import {defineRule, configure} from 'vee-validate';

import {required, email, min, confirmed } from "@vee-validate/rules/dist/vee-validate-rules";
import {Form, Field, ErrorMessage} from 'vee-validate'
import {commonRules, commonMessages} from 'common-packages/lib/plugins/vee-validate/vee-validate'

export default defineNuxtPlugin((nuxtApp) => {


    commonRules(defineRule)

    const generateMessage = commonMessages

    configure({
        validateOnInput: true,
        validateOnBlur: true,
        validateOnChange: true,
        generateMessage,
    });
    nuxtApp.vueApp.component('Form', Form)
    nuxtApp.vueApp.component('Field', Field)
    nuxtApp.vueApp.component('ErrorMessage', ErrorMessage)

})
