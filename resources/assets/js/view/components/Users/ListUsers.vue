<template>
  <div class="container-list-users">
      <SlotHeadMain>
        <h2 slot="MainTitle"> 
          Usuarios
        </h2>
      </SlotHeadMain>  

     <SlotTable>
       <tr slot="thead">
          <th>Nombre</th>
          <th>RFC</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
       </tr>
       <tr slot="tbody">
          <td>Gabriel Galan Mendez</td>
          <td>GGAMSEPTEMBRE201721</td>
          <td>gabriel.galan@gmail.com</td>
          <td>726361636363</td>		
          <td class="cont-options">
            <button type="submit">
              <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
            </button>
          </td>
       </tr>
       <tr slot="tbody">
        <td>Gabriel Galan Mendez</td>
        <td>GGAMSEPTEMBRE201721</td>
        <td>gabriel.galan@gmail.com</td>
        <td>726361636363</td>		
        <td class="cont-options">
          <button type="submit">
            <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
          </button> 
        </td>
       </tr>
       <div slot="tfoot">
          <div class="container-paginate">
              <button> 
                <font-awesome-icon :icon="['fas', 'chevron-left']" /> 
              </button>
                <span> 1 - 2 </span>
              <button> 
                <font-awesome-icon :icon="['fas', 'chevron-right']" /> 
              </button>
          </div>
       </div>
     </SlotTable>  

  </div>
</template>

<script>
  
  import SlotTable from '../../slots/Slot-Table'
  import SlotHeadMain from "../../slots/Slot-Head-Main"
  export default {
    name: 'ListUsers',
    components: { SlotTable, SlotHeadMain }
  }

</script>