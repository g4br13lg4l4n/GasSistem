<template>
  <div>
      <SlotHeadMain>
        <h2 slot="MainTitle"> 
          Agregar Usuario
        </h2>
      </SlotHeadMain> 
      <SlotFormMain>
        <div slot="SlotFormGroup" class="form-group">
          <div class="group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre">
          </div>
          <div class="group">
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario">
          </div>
          <div class="group">
            <label for="email">Email</label>
            <input type="text" id="email">
          </div>
          <div class="group">
            <label for="password">Contraseña</label>
            <input type="text" id="password">
          </div>
          <div class="group">
            <label for="phone">Phone</label>
            <input type="text" id="phone">
          </div>
          <div class="group">
            <label for="curp">CURP</label>
            <input type="text" id="curp">
          </div>
          <div class="group">
            <label for="address">Dirección</label>
            <input type="text" id="address">
          </div>
          <input type="submit" value="Guardar" class="blue">
        </div>
      </SlotFormMain>
  </div>
</template>
<script>
  import SlotFormMain from '../../slots/Slot-Form-Main'
  import SlotHeadMain from '../../slots/Slot-Head-Main'

  export default {
    name:'AddUser',
    components: { SlotFormMain, SlotHeadMain }
  }
</script>
