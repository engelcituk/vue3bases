<template>
    <div>
        <h1>TodoList</h1>
        <label for="todo"></label><br>
        <input id="todo" type="text" v-model="todo" @keypress.enter="addToDo">
        <ul>
            <li v-for="(t, index) in todos" :key="index">
                {{t}} <span @click="deleteToDo(index)">X</span>
            </li>
        </ul>
    </div>
</template>

<script>
import useTodos from "@/composables/useTodos"
export default {
    name: 'TodoList',
    setup(){
        const { todo,todos, addToDo, deleteToDo }= useTodos()
        return { todo,todos, addToDo, deleteToDo }
    }
}
</script>
