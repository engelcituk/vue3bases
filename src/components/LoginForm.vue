<template>
    <div>
        <h1>Login Form</h1>
        <label for="email">Email</label>
        <input
            autocomplete="off"
            id="email"
            type="email"
            :value="email"
            name="email"
            @input="$emit('update:email',$event.target.value)"
        >

        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            :value="password"
            name="password"
            @input="$emit('update:password',$event.target.value)"
        >
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'LoginForm',
    props:{
        email:{
            type: String,
            default: ''
        },
        password:{
            type: String,
            default: ''
        }
    }
}
</script>
