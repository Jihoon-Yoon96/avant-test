<template>
    <div>
        <Field :name="props.formData.id"
               :rules="propsRules(props.formData)"
               v-slot="{value,field,meta,initialValue=props.formData.defaultValue}"
               v-model="fieldValue"
        >
            <!--        <Field :name="props.formData.id" :rules="{ numeric:true}" v-slot="{field,meta}">-->

            <CommonField :required="props.formData.required"
                         :success="meta.touched && meta.valid"
                         :error="meta.touched && meta.errors.length > 0 && !meta.valid">
                <template #label>{{props.formData.id}}</template>
                <textarea :rows="props.formData.validateRule.rows < 2 ? 10 : props.formData.validateRule.rows"
                       v-bind="field"
                       :placeholder="props.formData.placeholder"
                       :class="{error: meta.errors.length > 0  && !meta.valid, success: meta.touched && meta.valid}"
                />
                <template #validate>
                    <ErrorMessage :name="props.formData.id"/>
                </template>
            </CommonField>
        </Field>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    formData:{
        type:Object
    }
})

let fieldValue = ref(props.formData.defaultValue)

function propsRules(val){
    let _rule = {}
    let _numRule = {}

    const _required = {
        required: val.validateRule.required,
    }

    if(val.validateRule.rules.rule){
        if(val.validateRule.rules.rule === 'regex'){
            _rule.regex = val.validateRule.rules.regex
        }else{
            _rule[val.validateRule.rules.rule] = true
        }
    }
    if(val.validateRule.max){
        _numRule.max = val.validateRule.max
    }
    if(val.validateRule.min){
        _numRule.min = val.validateRule.min
    }

    return {..._required,..._numRule, ..._rule}
}

</script>

<style scoped>

</style>