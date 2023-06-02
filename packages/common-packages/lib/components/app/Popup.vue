<template>
  <component v-for="(popup, i) in popupStore.popupArr" :is="popup.comp" :key="i" :param="popup.param" />
</template>

<script setup lang="ts">
import {usePopupStore} from "../../store/popup";

const popupStore = usePopupStore()

</script>

<style scoped>

</style>
