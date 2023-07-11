<script setup lang="ts">
const route = useRoute();
</script>

<template>
    <h1>test [id].vue</h1>
    <div>test = {{ route.params.test }}</div>
</template>

<style scoped>

</style>
