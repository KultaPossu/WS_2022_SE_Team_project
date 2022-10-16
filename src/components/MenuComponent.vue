<template>
  <div class="menu">
    <h1>WSC - Ｍemory</h1>
    <div class="btns">
      <input type="button" value="Easy" @click="start(8)">
      <input type="button" value="Medium" @click="start(12)">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuComponent',
    methods: {
      start(size) {
        this.$emit("start", size)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu {
    text-align: center;
  }
</style>