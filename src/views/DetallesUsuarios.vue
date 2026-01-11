<template>
  <div v-if="usuario">
    <h2>Detalle del Usuario</h2>
    <p><strong>Nombre:</strong> {{ usuario.name }}</p>
    <p><strong>Email:</strong> {{ usuario.email }}</p>

    <p><strong>Ciudad:</strong> {{ usuario.address.city }}</p>
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
