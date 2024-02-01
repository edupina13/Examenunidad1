<template>
 <div>
  <h1>Estas en el inicio</h1>
  <b-breadcrumb :items="items"></b-breadcrumb>
 

 </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
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
        ]
      }
    }
  }
</script>