<template>
  <div class="hello">
    <button @click="forceUpdate">forceUpdate</button>
    {{msg}}
    <childComponent></childComponent>
  </div>
</template>

<script>
import childComponent from '@/components/children/children'
export default {
  name: 'HelloWorld',
  components: {
    childComponent
  },
  data () {
    return {
      msg1: 'haohaohao',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    forceUpdate () {
      this.$router.push({
        path: '/child'
      })
      this.msg = '111111'
      this.$forceUpdate()
    }
  },
  mounted () {
    console.log('123456789')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
