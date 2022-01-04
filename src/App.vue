<template>
 <div> 导航 |<router-link to="/"> page 1 </router-link>|<router-link to="/a"> page 2 </router-link></div>
 <hr>
 
 <router-view>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
