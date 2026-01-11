<template>
    <div>
        <h2>Pantalla de usuarios</h2>
        <div>
            <input type="text" v-model="buscarUsuario" placeholder="Buscar por Nombre">
        </div>
        <ul>
            <li v-for="(usuario) in filtrarUsuarios"
            :key="usuario.id">
                <router-link 
                :to="`/usuarios/${usuario.id}`">
                    <strong>
                            {{ usuario.name}}
                    </strong>
                </router-link>
                <hr>
            </li>
        </ul>   
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


