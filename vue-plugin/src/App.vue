<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import mainSkeleton from './components/skeleton/main.skeleton.vue'
export default {
  name: 'App',
  components: {
    mainSkeleton
  },
  data () {
    return {
      init: false
    }
  },
  created () {
    console.log('456798')
    console.log(axios)
    axios.post('http://adfasdfasdgsdg/dsafasdg', {}).then(res => {
      console.log(res)
    })
  },
  methods: {
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
