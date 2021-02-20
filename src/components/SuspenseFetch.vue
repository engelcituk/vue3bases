<template>
    <div>
        <h1>Suspense Fetch</h1>
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
    name: 'SuspenseFetch',
    async setup(){
        const users = ref(null)
        
        const fetchData = async () => {
            return new Promise( async ( resolve ) => {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                setTimeout( () => {
                    resolve( response.json() )
                }, 5000)
            })
        }
        
        users.value = await fetchData() 

        return { users }
    }
}
</script>
