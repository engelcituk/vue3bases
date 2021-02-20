import { toRefs, reactive } from 'vue'

export default function () {
    const data = reactive({
        todo: null,
        todos:[]
    })

    const addToDo = () => {
        if(data.todo.length > 1){
            data.todos.push( data.todo )
        }
        data.todo = null
    }

    const deleteToDo = (index) => {
        data.todos.splice(index, 1)
    }
    return { ...toRefs(data), addToDo, deleteToDo }
}