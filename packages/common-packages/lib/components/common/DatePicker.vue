<template>
  <div class="datepicker" v-click-outside="toggleDatePicker">
    <input type="text" readonly :value="vcData" @click="isOpen=true">
    <VDatePicker v-if="isOpen" v-model="vcData" mode="date"
                 :is-dark="appOption.isDark"
                 color="indigo"
                 @update:modelValue="emit('update:modelValue', vcData)"
    />
  </div>
</template>

<script setup lang="ts">
const appOption = useAppOptionStore()
const emit = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])

const isOpen = ref(false)
const vcData = ref()

function toggleDatePicker () {
    isOpen.value = false
}

</script>

<style lang="scss">
.datepicker { position:relative;
  .vc-container { position:absolute; top:100%; left:0;}
}
</style>
