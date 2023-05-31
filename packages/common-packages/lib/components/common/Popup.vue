<template>
    <div class="dimmed">
      <div class="popup">
        <slot />
      </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.popup { max-height:calc(100% - 60px); background-color:var(--background-normal); color:var(--foreground-normal); overflow:auto;}
</style>
