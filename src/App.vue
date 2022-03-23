<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" @test1="onTest1" @test2="onTest2"/>
  <button @click="toHome">click me !</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'test'
      })
      alert('jump')
    })
    return {
      toHome
    }
  },
  methods: {
      onTest1() {
          console.log('test1 running');
      },
      onTest2() {
          console.log('test2 running');
      }
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
