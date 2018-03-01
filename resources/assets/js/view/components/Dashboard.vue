<template>
  <div>
    <Head/>
    <Menu/> 
    
  </div>
</template>
<script>

  import Menu from './Menu'
  import Head from './Head'

  export default {
    name: 'Dashboard',
    components: { Menu, Head },
    data () {
      return {
        
      }
    },
    methods: {

    }
  }
</script>
<style lang="stylus">
  
</style>