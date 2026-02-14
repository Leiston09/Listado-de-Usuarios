<template>
  <div v-if="usuario" class="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
    
    <h2 class="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
      Detalle del Usuario
    </h2>

    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-500">Nombre</label>
        <p class="text-lg text-gray-900 font-semibold">{{ usuario.name }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-500">Email</label>
        <p class="text-lg text-gray-900">{{ usuario.email }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-500">Ciudad</label>
        <p class="text-lg text-gray-900">{{ usuario.address.city }}</p>
      </div>
    </div>

    <div class=" border-gray-300 rounded-lg overflow-hidden p-4 bg-white shadow-md ">
      <router-link 
        :to="{ name: 'listado' }"
        class=" bg"
      >
        Volver atrás
      </router-link>      
    </div>



  </div>
</template>


<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { updateDataUsers } from '@/stores/cargarUsuarios'

const usersdata = updateDataUsers()
const router = useRoute()
//const  cargarUsuarios = funcionCargarUsuario()
//const { usuarios } = storeToRefs(cargarUsuarios)

onMounted(() => {
  usersdata.dataUsers()
})

const usuario = computed(() => {
  const id = router.params.id
  return usersdata.users.find(user => user.id  === Number(id))
})

</script>

