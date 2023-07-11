<script setup lang="ts">

const route = useRoute()

const { id } = route.params;

</script>

<template>
    <div>area</div>
    <div>small = {{ $route.params.small }}</div>
</template>

<style scoped>

</style>
