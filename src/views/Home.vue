<template>
  <div>
    <LoginForm
      v-model:email="email"
      v-model:password="password"
    /><hr>
    {{email}} - {{password}}
    <RootEvents></RootEvents><hr>
    <EmitEvents @onFire="eventEmittedFromChild"/><hr>
    <ProfileWithProps name="Mi nombre" :age="39"/><hr>
    <Suspense>
      <template #default>
        <SuspenseFetch/>
      </template>
      <template #fallback>
        Cargando información de la api
      </template>
    </Suspense><hr>
    <SimpleFetch/><hr>
    <TodoList/><hr>
    <SimpleCounterCompositionApi/><hr>
    <WatchCounter/><hr>
    <ReactiveCounter/><hr>
    <SimpleCounter/><hr>
    <HelloWorld/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import SimpleCounter from '@/components/SimpleCounter'
import ReactiveCounter from '@/components/ReactiveCounter'
import WatchCounter from '@/components/WatchCounter'
import SimpleCounterCompositionApi from '@/components/SimpleCounterCompositionApi'
import TodoList from '@/components/TodoList'
import SimpleFetch from '@/components/SimpleFetch'
import SuspenseFetch from '@/components/SuspenseFetch'
import ProfileWithProps from '@/components/ProfileWithProps'
import EmitEvents from '@/components/EmitEvents'
import RootEvents from '@/components/RootEvents'
import LoginForm from '@/components/LoginForm'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter,
    SimpleCounterCompositionApi,
    TodoList,
    SimpleFetch,
    SuspenseFetch,
    ProfileWithProps,
    EmitEvents,
    RootEvents,
    LoginForm
  },
  setup(){
    const eventEmittedFromChild = (message) => {
      console.log(message)
    }
    const login = reactive({
      email: "test",
      password: "password"
    })

    return { ...toRefs(login), eventEmittedFromChild }
  }
}
</script>
