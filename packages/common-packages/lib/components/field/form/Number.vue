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
              <input type="number"
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

    if(val.validateRule.maxValue){
        _numRule.maxValue = val.validateRule.maxValue
    }
    if(val.validateRule.minValue){
        _numRule.minValue = val.validateRule.minValue
    }
    return {..._required,..._numRule, ..._rule}
}

</script>

<style scoped>

</style>