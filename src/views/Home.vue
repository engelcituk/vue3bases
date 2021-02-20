<template>
  <div>
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


export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter  
  }
}
</script>
