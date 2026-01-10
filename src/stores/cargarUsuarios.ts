import { defineStore } from "pinia";
import { ref } from "vue";
import { getUsuarios } from "@/services/userService";

type typeUsuarios = {
    name: string,
    email:string,
    city: string
}

export const funcionCargarUsuario = defineStore('users', () => {


    const usuarios = ref<typeUsuarios[]>([])

    const cargarUsuarios = () => {
        usuarios.value = getUsuarios()
    }

    return {
        usuarios,
        cargarUsuarios
    }
})