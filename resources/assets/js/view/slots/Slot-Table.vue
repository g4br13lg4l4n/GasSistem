<template>
  <div class="Table">
      <table>
        <thead>
					<slot name="thead">
						<tr>
							<th>Nombre</th>
							<th>RFC</th>
							<th>Correo</th>
							<th>Teléfono</th>
							<th>Responsable</th>
							<th>Acciones</th>
						</tr>
					</slot>
        </thead>
        <tbody>
					<slot name="tbody">
						<td> asssd</td>
						<td> asasddas</td>
					</slot>
        </tbody>
      </table>
			<slot name="tfoot">
				<div class="container-paginate">
					Pie de contenido
				</div>
			</slot>
  </div>
</template>

