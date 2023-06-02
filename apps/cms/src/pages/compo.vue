<template>
 <Form @submit="saveFun" v-slot="{meta}">
  <div>
   <Field name="key" rules="required|key" v-slot="{field, meta}">
    <CommonField required
                 :success="meta.valid"
                 :error="meta.errors.length > 0 && !meta.valid">
     <template #label>key!</template>
     <input type="text"
            v-model="field_key"
            v-bind="field"
            :class="{error: meta.errors.length > 0  && !meta.valid, success: meta.valid}"
            placeholder="key"
     />
     <template #validate>
      <ErrorMessage name="key"/>
     </template>
    </CommonField>
   </Field>
  </div>
 </Form>
 </template>

<script>
export default {
    name: "compo"
}
</script>

<style scoped>

</style>