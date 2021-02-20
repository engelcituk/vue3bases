<template>
    <div>
        <h1>Simple Fetch de users</h1>
        <ul>
            <li v-for="(u, index) in users" :key="index">
                {{u.name}} - {{u.email}} 
            </li>
        </ul>
    </div>
</template>

<script>
import {ref, onMounted } from "vue"
export default {
    name: 'SimpleFetch',
    setup(){
        const users = ref(null)
        onMounted( async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            users.value = await response.json()
        })

        return { users }
    }
}
</script>
