
<template>
    <div>
        <h1>Watch counter</h1>
        <h3>counter 1: {{counter}}</h3>
        <h3>counter 2: {{counter2}}</h3>
        <h3>{{message}}</h3>
        <button @click="decrement">Decrementar</button>
        <button @click="increment">Incrementar</button>

    </div>
</template>

<script>
import { ref, watch} from 'vue'
export default {
    name: 'WatchCounter',
    setup(){
        const counter = ref(0)
        const counter2 = ref(0)
        const message = ref("")
        //como son varios counter para watch se pone en array
        watch([counter, counter2], (currentValue, oldValue) => {
            if(counter.value == 5 ){
                message.value = "Counter es 5"
                counter2.value = 10
            } else {
                message.value = ""
            }

            if(counter2.value == 10){
                console.log('counter 2 a cambiado a 10')
            }
        })

        const increment = () => {
            counter.value++
        }

        const decrement = () => {
            counter.value--
        }

        return { counter, counter2, message, increment, decrement}
    }
}
</script>
