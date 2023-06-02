import {required, email, min, min_value, max, max_value, confirmed} from "@vee-validate/rules/dist/vee-validate-rules";

function commonRules(_defineRule){

    _defineRule('required', required);
    _defineRule('min', min)
    _defineRule('minValue', min_value)
    _defineRule('max', max)
    _defineRule('maxValue', max_value)
    _defineRule('email', email)
    _defineRule('pwdConfirmed', confirmed)

    _defineRule('byteCheck', (value, args) => {
        const byteLimit = parseInt(args[0], 10);
        const byteCount = new Blob([value]).size;

        if (byteCount > byteLimit) {
            return false
        }
        return true
    })

    _defineRule('name', value =>{
        if(/[^(가-힣a-zA-Z\s_\-)]/.test(value)){
            return false
        }
        return true
    })
    _defineRule('key', value=>{
        if(/[^(0-9a-zA-Z\s_\-)]/.test(value)){
            return false
        }
        return true
    })

    _defineRule('regex', (value, [pattern, flags]) => {
        let aa = ''
        const _regex = new RegExp(pattern.slice(1,-1));
        const regex = new RegExp(_regex, flags);
        return regex.test(value)
    })

    _defineRule('idDuplicateCheck',async value => {
        const check = await idDuplicateCheck(value)
        console.log('check', check)
        return !!check
    })

    function idDuplicateCheck(value) {
        const {data} = {
            data: {
                'asd': 'asd'
            }
        }
        return !!data;
        // const {data} = useFetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        // console.log('data', data)
        // return !!data;
        //false ->중복
        // return false
    }
}

function commonMessages (ctx) {
    const _i18n = useNuxtApp()._i18n.global
    const {field, rule} = ctx;
    const params = rule.params;

    if (rule.name === 'required') {
        return `${field}: ${_i18n.t('validate.required')}`;
    } else if (rule.name === 'min') {
        return `${field}: ${_i18n.t('validate.min',{params: params[0]})}`;
    } else if (rule.name === 'email') {
        return `${field}: ${_i18n.t('validate.email')}`;
    } else if (rule.name === 'pwdConfirmed') {
        return `${_i18n.t('validate.pwdConfirmed')}`;
    } else if (rule.name === 'name') {
        return `${field}: ${_i18n.t('validate.name')}`;
    } else if (rule.name === 'key') {
        return `${field}: ${_i18n.t('validate.key')}`;
    } else if (rule.name === 'regex') {
        return `${field}: 정규표현식에 맞지않습니다.`;
    }else if(rule.name === 'byteCheck'){
        return `${field}: 입력값은 최대 ${params[0]}바이트여야 합니다.`;
    }else if(rule.name === 'idDuplicateCheck'){
        return `${field}: 중복된 KEY 입니다`;
    }

    else{
        return `${field}: 땡입니다`
    }
}

export {commonRules, commonMessages}
