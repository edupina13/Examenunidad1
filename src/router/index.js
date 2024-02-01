import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
  
    {
        path: '/',
        component:()=> import('../components/Inicio.vue')
    },

    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/formulario',
                name: 'formulario',
                component: () => import('../components/Formulario.vue')
            },
            {
                path: '/pagina',
                name: 'pagina',
                component: () => import('../components/Pagina.vue')
            },
            
        ]
    }
]

const router = new VueRouter({ routes, })
export default router;
