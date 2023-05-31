<template>
    <h3>input Type</h3>
    <Form @submit="saveFun" v-slot="{form,meta}">
        <div>
            <Field :name="$t('form.key')" rules="required|key|idDuplicateCheck" v-slot="{field, meta}">
                <CommonField required
                             :success="meta.valid"
                             :error="meta.errors.length > 0 && !meta.valid">
                    <template #label>{{ $t('form.key') }}</template>
                    <input type="text"
                           v-model="field_key"
                           v-bind="field"
                           :class="{error: meta.errors.length > 0  && !meta.valid, success: meta.valid}"
                           :placeholder="$t('form.key')"
                           />
                    <template #validate>
                        <ErrorMessage :name="$t('form.key')"/>
                    </template>
                </CommonField>
            </Field>
<!--            <CommonField>-->
<!--                <template #label>{{ $t('form.type') }}</template>-->
<!--                <CommonSelect v-model="field_type" :options="field_type_option" />-->
<!--            </CommonField>-->

            <CommonField >
                <template #label>{{ $t('form.defaultValue') }}</template>
                <input type="text"
                       v-model="field_defaultValue"
                       :placeholder="$t('form.defaultValue')"/>
            </CommonField>

<!--            <Field :name="$t('form.defaultValue')"-->
<!--                   rules=""-->
<!--                   v-slot="{field, meta}">-->
<!--                <CommonField-->
<!--                    :success="meta.touched && meta.valid"-->
<!--                    :error="meta.errors.length > 0 && !meta.valid">-->
<!--                    <template #label>{{ $t('form.defaultValue') }}</template>-->
<!--                    <input type="text"-->
<!--                           v-model="field_defaultValue"-->
<!--                           v-bind="field"-->
<!--                           :class="{error: meta.errors.length > 0  && !meta.valid, success: meta.touched && meta.valid}"-->
<!--                           :placeholder="$t('form.defaultValue')"-->
<!--                           />-->
<!--                    <template #validate>-->
<!--                        <ErrorMessage :name="$t('form.defaultValue')"/>-->
<!--                    </template>-->
<!--                </CommonField>-->
<!--            </Field>-->

            <CommonField >
                <template #label>{{ $t('form.placeholder') }}</template>
                <input type="text"
                       v-model="field_placeholder"
                       :placeholder="$t('form.placeholder')"/>
            </CommonField>

            <div>
                <span>Validate Option</span>
                <div>
                    <CommonField>
                        <template #label>{{ $t('form.required') }}</template>
                        <input type="checkbox" v-model="field_required"/>
                    </CommonField>

                    <CommonField >
                        <template #label>{{ $t('form.minimumValue') }}</template>
                        <input type="number"
                               v-model="field_minimumValue"
                               :placeholder="$t('form.minimumValue')"/>
                    </CommonField>
                    <CommonField >
                        <template #label>{{ $t('form.maximumValue') }}</template>
                        <input type="number"
                               v-model="field_maximumValue"
                               :placeholder="$t('form.maximumValue')"/>
                    </CommonField>
                </div>
            </div>
        </div>
        <button type="submit" :disabled="!meta.valid">Save</button>
    </Form>

</template>

<script setup lang="ts">

const emit = defineEmits(['fieldSave'])

let field_key = ref(null)
let field_defaultValue = ref('')
let field_placeholder = ref('')
let field_required = ref(false)
let field_validRadio = ref('')
let field_regex = ref('')
let field_minimumLength = ref(null)
let field_maximumLength = ref(null)
let field_minimumValue = ref(null)
let field_maximumValue = ref(null)


function saveFun(){
    let dataForm = {}
    dataForm = {
        id: field_key.value,
        field: 'input',
        type: 'number',
        defaultValue: field_defaultValue.value,
        placeholder: field_placeholder.value,
        validateRule:{
            required:field_required.value,
            rules: {
                rule: field_validRadio.value,
                regex: field_validRadio.value === 'regex' ? field_regex.value : ''
            },
            minValue: field_minimumValue.value,
            maxValue: field_maximumValue.value,

        },
    }
    console.log('dataForm', dataForm)

    // localStorage로 임시데이터
    if(localStorage.getItem('formList')!=null){
        let dataArr = JSON.parse(<String>localStorage.getItem('formList'))
        dataArr.push(dataForm)
        localStorage.setItem('formList', JSON.stringify(dataArr))
    }else{
        let dataArr = []
        dataArr.push(dataForm)
        localStorage.setItem('formList', JSON.stringify(dataArr))
    }

    emit('fieldSave')

}

</script>

<style scoped>

</style>