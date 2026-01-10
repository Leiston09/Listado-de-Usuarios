import { defineStore } from "pinia";
import { ref } from "vue";
import { getUsuarios } from "@/services/userService";

export const usuariosStore = defineStore('users', () => {

    type typeUsuarios = {
        name: string,
        email:string,
        city: string
    }

    const usuarios = ref<typeUsuarios[]>([])

    const cargarUsuario = () => {
        usuarios.value = getUsuarios()
    }

    return {
        usuarios,
        cargarUsuario
    }
})