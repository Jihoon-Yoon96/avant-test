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

                    <CommonField>
                        <template #label>등록규칙</template>
                        <div>
                            <label><input type="radio" value="" v-model="field_validRadio">없음</label>
                            <label><input type="radio" value="key" v-model="field_validRadio">KEY 형식</label>
                            <label><input type="radio" value="name" v-model="field_validRadio">이름 형식</label>
                            <label><input type="radio" value="email" v-model="field_validRadio">이메일 형식</label>
                            <label><input type="radio" value="regex" v-model="field_validRadio">정규식</label>

                            <template v-if="field_validRadio==='regex'">
                                <CommonField >
                                    <template #label>정규식</template>
                                    <input type="text"
                                           v-model="field_regex"/>
                                </CommonField>
                            </template>
                        </div>
                    </CommonField>

                    <CommonField >
                        <template #label>{{ $t('form.minimumLength') }}</template>
                        <input type="number"
                               v-model="field_minimumLength"
                               :placeholder="$t('form.minimumLength')"/>
                    </CommonField>

                    <CommonField >
                        <template #label>{{ $t('form.maximumLength') }}</template>
                        <input type="number"
                               v-model="field_maximumLength"
                               :placeholder="$t('form.maximumLength')"/>
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


function saveFun(){
    let dataForm = {}
    dataForm = {
        id: field_key.value,
        field: 'input',
        type:'text',
        defaultValue: field_defaultValue.value,
        placeholder: field_placeholder.value,
        validateRule:{
            required:field_required.value,
            rules: {
                rule: field_validRadio.value,
                regex: field_validRadio.value === 'regex' ? field_regex.value : ''
            },
            min: field_minimumLength.value,
            max: field_maximumLength.value,
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