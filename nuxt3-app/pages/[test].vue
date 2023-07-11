<script setup lang="ts">
const route = useRoute();
// console.log(route.params);
</script>

<template>
    <h1>test [test].vue</h1>
    <div>id = {{ route.params.id }}</div>
</template>

<style scoped>

</style>
