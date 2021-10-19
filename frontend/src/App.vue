<template>
  <div id="app">
    <TestComponent />
    <img alt="Vue logo" src="./assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Testing</h1>
    <h1>hei</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestComponent from './components/TestComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
