import { defineStore } from "pinia";
import { ref } from "vue";
import { getUsuarios } from "@/services/usuariosService";

type typeUsuario = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}



export const funcionCargarUsuario = defineStore('users', () => {


    const usuarios = ref<typeUsuario[]>([])

    const cargarUsuarios = async () => {
        usuarios.value = await getUsuarios()
    }

    return {
        usuarios,
        cargarUsuarios
    }
})