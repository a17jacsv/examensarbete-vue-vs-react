<template>
  <div id="app">
    <Parkingslots />
  </div>
</template>

<script>
  import Parkingslots from './components/Parkingslots.vue'

  export default {
    name: 'app',
    components: {
      Parkingslots
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>