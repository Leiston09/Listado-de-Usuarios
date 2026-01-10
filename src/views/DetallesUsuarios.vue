<template>
  <div v-if="usuario">
    <h2>Detalle del Usuario</h2>
    <p><strong>Nombre:</strong> {{ usuario.name }}</p>
    <p><strong>Email:</strong> {{ usuario.email }}</p>
    <p><strong>Ciudad:</strong> {{ usuario.city }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { funcionCargarUsuario } from '@/stores/cargarUsuarios'
import { storeToRefs } from 'pinia'

const route = useRoute()
const store = funcionCargarUsuario()
const { usuarios } = storeToRefs(store)

const usuario = computed(() => {
  const id = Number(route.params.id)
  return usuarios.value[id]
})

</script>
