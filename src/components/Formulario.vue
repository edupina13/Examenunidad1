<template>

<div>
  <h1>Estas en el inicio</h1>
  <b-breadcrumb :items="items2"></b-breadcrumb>
 


  <div class="card">
    
    <b-card-header class="text-center">
      <h1>Registro de Vehículo</h1>
    </b-card-header>

    <form @submit.prevent="checkForm" id="vehicle-form">
      <div class="form-group">
        <label for="marca">Marca:</label>
        <input id="marca" v-model="marca" type="text" name="marca" class="form-control">
        <span class="error" v-if="errors.includes('La marca es obligatoria.')">La marca es obligatoria.</span>
        <span class="error" v-if="errors.includes('La marca debe ser alfanumérica y no llevar signos.')">La marca debe ser alfanumérica y no llevar signos.</span>
      </div>

      <div class="form-group">
        <label for="modelo">Modelo:</label>
        <input id="modelo" v-model="modelo" type="text" name="modelo" class="form-control">
        <span class="error" v-if="errors.includes('El modelo es obligatorio.')">El modelo es obligatorio.</span>
        <span class="error" v-if="errors.includes('El modelo debe ser alfanumérico y no llevar signos.')">El modelo debe ser alfanumérico y no llevar signos.</span>
      </div>

      <div class="form-group">
        <label for="anioFabricacion">Año de Fabricación:</label>
        <input id="anioFabricacion" v-model="anioFabricacion" type="date" name="anioFabricacion" class="form-control">
        <span class="error" v-if="errors.includes('El año de fabricación es obligatorio.')">El año de fabricación es obligatorio.</span>
        <span class="error" v-if="errors.includes('El año de fabricación no puede ser mayor al actual.')">El año de fabricación no puede ser mayor al actual.</span>
      </div>

      <div class="form-group">
        <label for="numeroSerie">Número de Serie:</label>
        <input id="numeroSerie" v-model="numeroSerie" type="text" name="numeroSerie" class="form-control" pattern="[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}" title="El número de serie debe tener el formato correcto (XXXX999-99XX)">
        <span class="error" v-if="errors.includes('El número de serie es obligatorio.')">El número de serie es obligatorio.</span>
        <span class="error" v-if="errors.includes('El número de serie debe tener el formato correcto.')">El número de serie debe tener el formato correcto (XXXX999-99XX).</span>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Registrar Vehículo</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {

    return {
      items2: [
          {
            text: 'Inicio',
            href: '#',
            to:  'inicio'
            
          },
          {
            text: 'Formulario',
            href: '#',
            to:  'formulario'
          },
          {
            text: 'Pagina',
            href: '#',
            to:  'pagina'
          },
          {
            text: '',
            href: '#',
            
          }
        ],
      errors: [],
      marca: null,
      modelo: null,
      anioFabricacion: null,
      numeroSerie: null,
      currentYear: new Date().getFullYear()
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.marca) {
        this.errors.push('La marca es obligatoria.');
      } else if (!/^[a-zA-Z0-9\s]+$/.test(this.marca)) {
        this.errors.push('La marca debe ser alfanumérica y no llevar signos.');
      }

      if (!this.modelo) {
        this.errors.push('El modelo es obligatorio.');
      } else if (!/^[a-zA-Z0-9\s]+$/.test(this.modelo)) {
        this.errors.push('El modelo debe ser alfanumérico y no llevar signos.');
      }

      if (!this.anioFabricacion) {
        this.errors.push('El año de fabricación es obligatorio.');
      } else {
        const fabricacionDate = new Date(this.anioFabricacion);
        if (fabricacionDate.getFullYear() >= this.currentYear) {
          this.errors.push('El año de fabricación no puede ser mayor al actual.');
        }
      }

      if (!this.numeroSerie) {
        this.errors.push('El número de serie es obligatorio.');
      } else if (!/[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}/.test(this.numeroSerie)) {
        this.errors.push('El número de serie debe tener el formato correcto (XXXX999-99XX).');
      }

      if (this.errors.length === 0) {
        alert('Enviando datos...');
        return true;
      } else {
        e.preventDefault();
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.8rem;
}
.card {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
</style>
