
<template>
    <div>
        <h1>Reactive counter</h1>
        <h3>{{counter}}</h3>
        <h3>{{counterComputed}}</h3>
        <button @click="decrement">Decrementar</button>
        <button @click="increment">Incrementar</button>
    </div>
</template>

<script>
import { reactive, computed, toRef, toRefs} from 'vue'
export default {
    name: 'ReactiveCounter',
    setup(){
        const data = reactive({
            counter:0,
            counterComputed: computed( ()=> {
                return `El valor de counter es ${data.counter}`
            })
        })

        const increment = () => {
            data.counter++
        }

        const decrement = () => {
            data.counter--
        }

        return { ...toRefs(data), increment, decrement}
    }
}
</script>
