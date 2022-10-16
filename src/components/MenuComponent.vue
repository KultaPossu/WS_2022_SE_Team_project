<template>
  <div class="menu">
    <div class="btns">

      <button class="button" @click="start(8)">
        Easy
      </button>
      <button class="button" @click="start(12)">
        Medium
      </button>
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

  .btns {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
</style>