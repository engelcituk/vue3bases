<template>
    <div>
        <h1>Root Events </h1>
        <label for="messageEmitToRoot">Mensaje</label>
        <input id="messageEmitToRoot" type="text" v-model="message">
        <button @click="notifyToRoot">Notificar al root</button>
    </div>
</template>

<script>
import { ref, inject} from 'vue'
export default {
    name: 'RootEvents',
    emits:["onRootFire"], //los eventos que se va emitir al root
    setup(){

        const message = ref("")
        const emitter = inject("emitter")

        const notifyToRoot = ( ) => {
            emitter.emit("onRootFire", message.value)
        }

        return { message, notifyToRoot }
    }
}
// parar el servidor al installar mitt
</script>
