<template>
  <div class="pagination">
    <button type="button" class="btn-quick" @click="clickPage(1)"><font-awesome-icon :icon="['fas', 'angles-left']" /></button>
    <button type="button" class="btn-quick" @click="clickPage(prevPage)"><font-awesome-icon :icon="['fas', 'chevron-left']" /></button>

    <template v-for="i in maxPage">
      <button type="button" v-if="Math.ceil(props.modelValue/5) === Math.ceil(i/5)"
              :class="{'active': props.modelValue === i}" @click="clickPage(i)">{{ i }}</button>
    </template>

    <button type="button" class="btn-quick" @click="clickPage(nextPage)"><font-awesome-icon :icon="['fas', 'chevron-right']" /></button>
    <button type="button" class="btn-quick" @click="clickPage(maxPage)"><font-awesome-icon :icon="['fas', 'angles-right']" /></button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['modelValue', 'total'])
const emit = defineEmits(['update:modelValue'])

function clickPage (i) {
    emit('update:modelValue', i)
}

const prevPage = computed(() => props.modelValue > 1 ? props.modelValue-1 : 1)
const maxPage = computed(() => Math.ceil(props.total / 5))
const nextPage = computed(() => {
    let _max = Math.ceil(props.total / 5)
    return props.modelValue < _max ? props.modelValue + 1 : _max
})

function test(curr, i) {
    return Math.ceil(curr/5) === Math.ceil(i/5)
}
</script>

<style scoped lang="scss">
.pagination { display:flex; gap:.4rem;
  button { min-width:2rem; height:100%; border:none; background:none; color:var(--foreground-normal); cursor:pointer;
    &.active { outline:1px solid var(--primary-50); border-radius:4px; font-weight:bolder;}
  }
}
</style>
