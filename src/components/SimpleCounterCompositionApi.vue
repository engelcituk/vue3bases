
<template>
    <div>
        <h1>Simple counter composition api</h1>
        <h3>{{counter}}</h3>
        <h3>{{counterComputed}}</h3>
        <button @click="decrement">Decrementar</button>
        <button @click="increment">Incrementar</button>

    </div>
</template>

<script>
import { ref, computed } from 'vue'
import useCounter from "@/composables/useCounter";
export default {
    name: 'SimpleCounterCompositionApi',
    setup(){
        const { counter, counterComputed, increment, decrement } = useCounter()
        return { counter, counterComputed, increment, decrement } 

    }
}
</script>
