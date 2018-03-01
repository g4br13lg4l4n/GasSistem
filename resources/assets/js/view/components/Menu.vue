<template>
  <div class="container-menu">
    <div class="head-menu">
      <router-link :to="{ name: 'Home' }" class="nav-link"> Dash Admin <i class="fal fa-bars"></i> </router-link>
    </div>
    <div class="container-menu-nav">
      <nav>
        <ul>

          <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/dashboard'}" disabled>
            <div class="nav-link nav-dropdown-toggle" @click="handleClick" id="botonaso" ><i class="fas fa-user"></i> Usuarios </div>
            <ul class="nav-dropdown-items">
              <li class="nav-item">
                <router-link :to="{ name: 'List Users' }" class="nav-link" exact><i class="icon-puzzle"></i> Todos </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: '' }" class="nav-link" exact><i class="icon-puzzle"></i> Agregar </router-link>
              </li>
            </ul>
          </router-link>

        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Menu',
    methods: {
      handleClick (e) {
        e.preventDefault()
        e.target.parentElement.classList.toggle('open')
      }
    }
  }
</script>
<style lang="stylus">
  .nav-link
    cursor pointer
  
</style>