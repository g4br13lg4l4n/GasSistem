<template>
  <div class="app">
    <div class="app-body">
      <Head/>
      <Menu/> 
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <Footer/>  
  </div>
</template>
<script>
  import Menu from './Menu'
  import Head from './Head'
  import Footer from './Footer'

  export default {
    name: 'Dashboard',
    components: { Menu, Head, Footer },
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