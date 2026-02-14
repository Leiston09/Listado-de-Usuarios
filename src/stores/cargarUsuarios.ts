import { defineStore } from "pinia";
import { ref } from "vue";
import { getUsers } from "@/services/usuariosService";

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

export const updateDataUsers = defineStore('users', () => {

    const users = ref<typeUsuario[]>([])

    const dataUsers = async () => {
        users.value = await getUsers()
    }

    return {
        users,
        dataUsers
    }
})