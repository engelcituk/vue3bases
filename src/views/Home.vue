<template>
  <div>
    <SimpleCounter></SimpleCounter>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import SimpleCounter from '@/components/SimpleCounter'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter   
  }
}
</script>
