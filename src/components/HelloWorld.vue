<template>
    <div>
        <h1>hola mundo</h1>
        <p>{{message}}</p>
        <label id="message">Mensaje</label><br>
        <input type="text" id="message" v-model="message">
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'HelloWorld',
    setup(){
        const message = ref('hello word')
        return {message}
    }
}
</script>
