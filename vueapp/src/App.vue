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
  html {
    background-color: #787878;
    font-family: source-sans-pro, sans-serif;
  }
.wrapper {
  background-color: white;
  margin: 0 auto;
  width: 60%;
  margin-top: 5rem;
  padding: 5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.14),
      0 2px 5px rgba(0, 0, 0, 0.20);
  text-align: center;
}
.content {
  display: inline-block;
}
.button {
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-right: 1rem;
}
.button:hover {
  opacity: 0.5;
  cursor: pointer;
}
.list {
  margin-top: 1rem;
  overflow: hidden;
  overflow-y: scroll;
  height: 30rem;
}
.slotItem {
  margin-top: 1rem;
  border-bottom: 2px solid #ccc;
  padding: 0.5rem;
}
.counter {
  margin-top: 1rem;
}
</style>