<template>
  <div class="container-menu">
    <div class="head-menu">
      <router-link :to="{ name: 'Home' }" class="nav-link title-menu" > DASH ADMIN </router-link>
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>

    <div class="container-menu-nav">
      <nav>
        <ul>

          <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/users'}" disabled>
            <div class="nav-link nav-dropdown-toggle" @click="handleClick" id="botonaso" > <font-awesome-icon :icon="['fas', 'user']" />  Usuarios </div>
            <ul class="nav-dropdown-items">
              <li class="nav-item">
                <router-link :to="{ name: 'List Users' }" class="nav-link" exact> 
                  <font-awesome-icon :icon="['fas', 'users']" /> Todos </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: '' }" class="nav-link" exact> 
                  <font-awesome-icon :icon="['fas', 'user-plus']" />  Agregar </router-link>
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