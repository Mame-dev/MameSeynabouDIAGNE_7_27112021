import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/', //path (chemin) - l'URL correspondant au composant ;
        name: 'Login', // for named routes
        component: Login // component (composant) - le composant qui doit s'afficher lorsque le path est trouvé.
    },
    {
        path: '/Signup', //path (chemin) - l'URL correspondant au composant ;
        name: 'Signup', // for named routes

        component: () =>
            import('../views/Signup.vue') //component (composant) - le composant qui doit s'afficher lorsque le path est trouvé.
    }, {
        path: '/user/:id', //path (chemin) - l'URL correspondant au composant ;
        name: 'user', // for named routes
        component: () =>
            import('../views/user.vue') //component (composant) - le composant qui doit s'afficher lorsque le path est trouvé.
    },
    {
        path: '/Home', //path (chemin) - l'URL correspondant au composant ;
        name: 'Home', // for named routes
        component: () =>
            import('../views/Home.vue') //component (composant) - le composant qui doit s'afficher lorsque le path est trouvé.
    },
    {
        path: '/post/:id', //path (chemin) - l'URL correspondant au composant ;
        name: 'OnePost', // for named routes
        component: () =>
            import('../views/OnePost.vue') //component (composant) - le composant qui doit s'afficher lorsque le path est trouvé.
    },
    {
        path: '/update/:id', //path (chemin) - l'URL correspondant au composant ;
        name: 'Update', // for named routes
        component: () =>
            import('../views/Update.vue') //component (composant) - le composant qui doit s'afficher lorsque le path est trouvé.
    }
];

const router = new VueRouter({
    routes
});

export default router;