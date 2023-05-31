<template>
  <div class="selectbox">
    <button type="button" class="select" ref="$btn"
            @click="clickSelect" v-click-outside="closeSelect">
      {{ getSelectLabel }}
      <i><font-awesome-icon :icon="['fas', showFlag?'chevron-up':'chevron-down']" /></i>
    </button>
    <ul class="select-option" :style="optionStyle" v-if="showFlag">
      <li v-for="opt in options" @click="selectItem(opt)">{{ opt.label }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['modelValue', 'options', 'offset'])
const emit = defineEmits(['update:modelValue'])

const showFlag = ref(false)
const $btn = ref(null)
const width = ref(0)

onMounted(()=>{
    width.value = $btn.value.clientWidth
})

const getSelectLabel = computed(()=> {
    return props.options.find(opt => opt.value === props.modelValue).label
})

const optionStyle = computed(()=>{
    let style = <any>{
        minWidth: `${width.value}px`
    }
    if (props.offset === 'top') {
        style.bottom = '100%'
    }
    return style
})

function clickSelect () {
    showFlag.value = !showFlag.value
}
function closeSelect () {
    if (showFlag.value) showFlag.value = false
}
function selectItem (opt) {
    emit('update:modelValue', opt.value)
    emit('change', opt.value)
}
</script>

<style scoped lang="scss">
.selectbox { position:relative;
  .select { display:flex; justify-content:space-between; align-items:center; width:100%; color:var(--foreground-normal-alt); text-align:left;
    & > i { margin-left:.6rem;}
  }
}
.select-option { position:absolute; box-shadow:var(--card-shadow); z-index:1;
  li { padding:0 1rem; background-color:var(--background-highlight); line-height:2em; cursor:default;
    &:hover { background-color:var(--background-normal-alt);}
  }
}
</style>
