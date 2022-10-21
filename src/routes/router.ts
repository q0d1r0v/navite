import {createRouter, createWebHistory} from "vue-router"

// pages
import homePage from "~/pages/home-page.vue"
import aboutPage from "~/pages/about-page.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "parent",
            children: [
                {
                    path: "/",
                    name: 'home',
                    component: homePage
                },
                {
                    path: "/about",
                    name: 'about',
                    component: aboutPage
                },
            ]
        }
    ]
})

export default router