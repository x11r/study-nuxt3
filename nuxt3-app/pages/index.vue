<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
      <h1>top</h1>
      <div>
          <NuxtLink to="/rakuten">
              楽天API
          </NuxtLink>
      </div>
      <div>
          <NuxtLink to="/test/a">
              test a
          </NuxtLink>
      </div>
      <div>
          <NuxtLink to="/test/b">
              test b
          </NuxtLink>
      </div>

      <div>
          <div>Aタグ</div>
          <ul>
              <li><a href="/test/a">A</a></li>
              <li><a href="/test/b">B</a></li>
          </ul>
      </div>
  </div>
</template>

<style scoped>

</style>
