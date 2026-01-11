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

    <button 
      @click="$router.back()" 
      class="mt-8 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors"
    >
      Volver atrás
    </button>

  </div>
</template>






<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { funcionCargarUsuario } from '@/stores/cargarUsuarios'
import { storeToRefs } from 'pinia'

const route = useRoute()
const  cargarUsuarios = funcionCargarUsuario()
const { usuarios } = storeToRefs(cargarUsuarios)

onMounted(() => {
  if (usuarios.value.length === 0) {
    cargarUsuarios.cargarUsuarios()
  }
})

const usuario = computed(() => {
  const id = Number(route.params.id)
  return usuarios.value.find(usuarioId => usuarioId.id === id)
})

</script>
