<template>
    <div>
        <h1>Emit events </h1>
        <label for="messageEmit">Mensaje</label>
        <input id="messageEmit" type="text" v-model="message">
        <!-- este permite meter mas logica al emit -->
        <button @click="notify">Notificar al componente padre</button>
        <!-- este no permite meter mas logica al emit, pero igual funciona si este tiene que ser sencilla-->
        <button @click="$emit('onFire', message)">simple emit</button>

    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'EmitEvents',
    emits:["onFire"], //los eventos que se va emitir al componente padre
    setup( props, {emit} ){

        const message = ref("")

        const notify = ( ) => {
            emit("onFire", message.value)
        }

        return { message, notify }
    }
}
</script>
