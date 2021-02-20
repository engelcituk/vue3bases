
<template>
    <div>
        <h1>Simple counter</h1>
        <h3>{{counter}}</h3>
        <h3>{{counterComputed}}</h3>
        <button @click="decrement">Decrementar</button>
        <button @click="increment">Incrementar</button>

    </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
    name: 'SimpleCounter',
    setup(){
        const counter = ref(0)

        const counterComputed = computed( () =>{
            return `El valor de counter es ${counter.value}`
        }) 
        const increment = () => {
            counter.value++
        }

        const decrement = () => {
            counter.value--
        }

        return {counter, counterComputed, increment, decrement}
    }
}
</script>
