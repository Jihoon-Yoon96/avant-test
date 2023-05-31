<template>
  <div class="dimmed" v-if="dialog.param">
    <div class="dialog">
      <p class="title">{{ dialog.param?.title }}</p>
      <p class="message">{{ dialog.param?.msg }}</p>
      <div class="btns">
        <CommonBtn v-if="dialog.param.type==='confirm'" @click="close(false)">Cancel</CommonBtn>
        <CommonBtn class="primary" @click="close(true)">OK</CommonBtn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDialogStore} from "../../store/dialog";

const dialog = useDialogStore()
function close (result) {
    if (dialog.param.type === 'confirm') {
        dialog.param.close(result)
    } else {
        dialog.param.close(result)
    }
}
</script>

<style scoped lang="scss">
.dialog { max-height:calc(100% - 60px); background-color:var(--background-normal); color:var(--foreground-normal); overflow:auto;
  .title { padding:1rem; border:1px solid var(--border-normal); font-weight:bold;}
  .message { padding:2rem;}
  .btns { display:flex; justify-content:center; gap:.4rem; margin-bottom:.4rem;}
}
</style>
