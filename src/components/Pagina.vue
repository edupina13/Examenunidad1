<template>
  <b-container>
    <b-breadcrumb :items="items2"></b-breadcrumb> 
    <div class="overflow-auto">
     <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
  
      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
        :fields="fields"
      ></b-table>
    </div>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      items2: [
        {
          text: 'Inicio',
          href: '#',
          to: 'inicio'
        },
        {
          text: 'Formulario',
          href: '#',
          to: 'formulario'
        },
        {
          text: 'Pagina',
          href: '#',
          to: 'pagina'
        },
        {
          text: '',
          href: '#'
        }
      ],
      sortBy: "name",
      sortDesc: false,
      perPage: 3,
      currentPage: 1,
      personas: [],
      fields: [
        { key: "marca", label: "Marca", sortable: true },
        { key: "modelo", label: "Modelo", sortable: true },
        { key: "numSerie", label: "Numero de serie", sortable: true },
        { key: "anio", label: "Año", sortable: true },
      ],
    };
  },
  mounted() {
    this.obtenerVehiculos();
  },
  methods: {
    async obtenerPersonas() {
      try {
        const data = await personaService.obtenerPersonasPaginadas(
          parseInt(this.currentPage),
          parseInt(this.perPage),
          this.sortBy
        );
        this.personas = data.content;
      } catch (error) {
        console.error(error);
  
      }
    },
  },
};
</script>

<style>
</style>
