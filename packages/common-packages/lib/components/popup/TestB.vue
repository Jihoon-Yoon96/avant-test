<template>
  <CommonPopup>
    <p>popupTestB 입니다.</p>
    <button @click="$closePopup">닫기</button>
  </CommonPopup>
</template>

<script setup lang="ts">

const { $closePopup } = useNuxtApp()
</script>

<style scoped>

</style>
