<template>
  <CommonPopup>
    <p>popupTestA 입니다.</p>
    <button @click="$openPopup({name:'TestB', param:{ test:'bbb'}})">open b</button>
    <button @click="$alert('Alert')">alert</button>
    <button @click="$closePopup">닫기</button>
  </CommonPopup>
</template>

<script setup lang="ts">

const { $alert, $openPopup, $closePopup } = useNuxtApp()
</script>

<style scoped>

</style>
