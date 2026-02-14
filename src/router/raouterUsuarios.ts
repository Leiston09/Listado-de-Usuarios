import ListadoUsuarios from "@/views/ListadoUsuarios.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "listado",
      component: ListadoUsuarios
    },
    {
      path: "/usuarios/:id",
      name: "detalles",
      component: () => import("@/views/DetallesUsuarios.vue")
    }
  ]

})

export default router;
