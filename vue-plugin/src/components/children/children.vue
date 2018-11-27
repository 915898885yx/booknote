<template>
  <div class="children">
    <div>{{$parent.msg}}</div>
    <div>{{bbb}}</div>
    <div>{{ccc}}</div>
    <div>{{ddd}}</div>
    <div>child</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bbb: '',
      ccc: '',
      ddd: ''
    }
  },
  mounted () {
    console.log(this.$parent)
  }
}
</script>
