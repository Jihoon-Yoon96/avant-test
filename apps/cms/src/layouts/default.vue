<template>
    <nx3-test>
------------------------<br/>
    <h2>여긴 개별 레이아웃</h2>
    <slot></slot>
    <h2>여긴 개별 레이아웃</h2>
------------------------<br/>
    </nx3-test>
    <AppPopup />
    <AppDialog/>
</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped>

</style>