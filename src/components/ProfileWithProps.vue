<template>
    <div>
        <h1>Profile with props</h1>
        <h3>Nombre: {{name}} Edad: {{age}}</h3>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'ProfilewithProps',
    props: {
        name: String,
        age: Number
    },
    //las props se pueden acceder igual en el setup
    setup(props){
        // console.log(props.name)
    }

}
</script>
