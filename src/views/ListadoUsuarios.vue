<template>
  <div class="max-w-2xl mx-auto p-6 bg-slate-50 min-h-screen">
    <header class="mb-8">
      <h2 class="text-3xl font-bold text-slate-800 tracking-tight">
        Pantalla de Usuarios
      </h2>
      <p class="text-slate-500 mt-1">Gestiona y visualiza los perfiles de la plataforma.</p>
    </header>

    <div class="relative mb-6">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input 
        type="text" 
        v-model="buscarUsuario" 
        placeholder="Buscar por nombre..."
        class="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
      >
    </div>

    <ul class="space-y-3">
      <li 
        v-for="usuario in filtrarUsuarios" 
        :key="usuario.id"
        class="group"
      >
        <router-link 
          :to="`/usuarios/${usuario.id}`"
          class="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-200">
          <div class="flex items-center gap-4">
            <span class="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
              {{ usuario.name }}
            </span>
          </div>
        </router-link>
      </li>
    </ul>

    <div v-if="filtrarUsuarios.length === 0" class="text-center py-10">
      <p class="text-slate-400 italic">No se encontraron usuarios con ese nombre.</p>
    </div>
  </div>
</template>




<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { funcionCargarUsuario } from '@/stores/cargarUsuarios';
import { storeToRefs } from 'pinia';



const buscarUsuario = ref('')

const funtionsCargarUsuario = funcionCargarUsuario()

const {usuarios} = storeToRefs(funtionsCargarUsuario)

const filtrarUsuarios = computed(() => {
    return usuarios.value.filter(usuario => usuario.name.toLowerCase().includes(buscarUsuario.value.toLowerCase()))
})

onMounted(() => {
    funtionsCargarUsuario.cargarUsuarios()
})



</script>


