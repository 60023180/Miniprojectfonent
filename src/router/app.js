import component from "vuetify/lib/util/component";

export default {
    path: '/app',
    component: () => import('../views/app/Template'),
    children: [
        {
            path: '',
            name: "Home",
            component:  () => import('../views/app/Home')
        },
        {
            path: '/add course',
            name: "Add course",
            component:  () => import('../views/app/Add course')
        },
        {
            path: '/add student',
            name: "Add student",
            component:  () => import('../views/app/Add student')
        },
        {
            path: '/id student',
            name: "Id student",
            component:  () => import('../views/app/Id student')
        },

        ]
}
