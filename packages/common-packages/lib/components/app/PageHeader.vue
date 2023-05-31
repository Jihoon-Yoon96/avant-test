<template>
  <div class="page-info">
    <div class="page-title">
      <CommonBtn v-if="props.useBack"
                 class="btn-back line" :icon="['fas', 'arrow-left']"
                 @click="goBack">Back</CommonBtn>
      <p v-if="props.title">{{ props.title || 'AVant' }}</p>
      <p v-if="hasSlotTitle"><slot name="title" /></p>
      <span v-if="props.desc">{{ props.desc }}</span>
    </div>
  </div>
  <!-- 버튼 영역 -->
  <div class="page-btn" v-if="hasSlotButton">
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const slots = useSlots()
const props = defineProps({
    title: String,
    desc: String,
    useBack: [Boolean, Function]
})
const hasSlotTitle = computed(()=>Object.keys(slots).includes('title'))
const hasSlotButton = computed(()=>Object.keys(slots).includes('button'))

async function goBack () {
    router.back()
}
</script>

<style lang="scss">
.page-header { padding:1rem 2rem 2rem; background:linear-gradient(var(--background-subdued) calc(100% - 2rem), transparent);
    .page-info { flex:auto; display:flex; align-items:center;
        .page-title { font-weight:bold;
          .btn-back { margin-bottom:.8rem;}
          p { font-size:1.6rem;
            > button { vertical-align:middle;}
          }
          span { display:block; margin-top:.6rem; font-size:.9rem; font-weight:normal;}
        }
    }
  .page-btn { display:flex; gap:.4rem; align-items:center;}
}
</style>
