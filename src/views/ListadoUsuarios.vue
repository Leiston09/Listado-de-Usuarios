<template>
    <div>
        <h2>Pantalla de usuarios</h2>
        <div>
            <input type="text" v-model="buscarUsuario" placeholder="Buscar por Nombre">
        </div>
        <ul>
            <li v-for="(usuario , id) in filtarUsuarios"
            :key="id">
                <strong>
                    {{ usuario.name }}
                </strong>
                <p>{{ usuario.email }}</p>
                <p>{{ usuario.city }}</p>
                <hr>
            </li>
        </ul>   
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { usuariosStore } from '@/stores/usuarioStore';
import { storeToRefs } from 'pinia';


const usuarioStore = usuariosStore()
const {usuarios} = storeToRefs(usuarioStore)

const buscarUsuario = ref('')

const filtarUsuarios = computed(() => {
    return usuarios.value.filter(usuario => usuario.name.toLowerCase().includes(buscarUsuario.value.toLowerCase()))
})



onMounted(() => {
    usuarioStore.cargarUsuario()
})



</script>


