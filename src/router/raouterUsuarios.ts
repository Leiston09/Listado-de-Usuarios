import ListadoUsuarios from "@/views/ListadoUsuarios.vue";
import DetallesUsuarios from "@/views/DetallesUsuarios.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: ListadoUsuarios
  },
  {
    path: "/usuarios/:id",
    name: "detalles",
    component: DetallesUsuarios
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
