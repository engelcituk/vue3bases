<template>
  <div>
    <Suspense>
      <template #default>
        <SuspenseFetch></SuspenseFetch>
      </template>
      <template #fallback>
        Cargando información de la api
      </template>
    </Suspense><hr>
    <SimpleFetch></SimpleFetch><hr>
    <TodoList></TodoList><hr>
    <SimpleCounterCompositionApi></SimpleCounterCompositionApi><hr>
    <WatchCounter></WatchCounter><hr>
    <ReactiveCounter></ReactiveCounter><hr>
    <SimpleCounter></SimpleCounter><hr>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import SimpleCounter from '@/components/SimpleCounter'
import ReactiveCounter from '@/components/ReactiveCounter'
import WatchCounter from '@/components/WatchCounter'
import SimpleCounterCompositionApi from '@/components/SimpleCounterCompositionApi'
import TodoList from '@/components/TodoList'
import SimpleFetch from '@/components/SimpleFetch'
import SuspenseFetch from '@/components/SuspenseFetch'

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
    SuspenseFetch
  }
}
</script>
