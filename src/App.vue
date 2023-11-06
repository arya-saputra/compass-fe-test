<template>
  <HeaderApp></HeaderApp>
  <div class="py-5">
    <router-view/>
  </div>
  <FooterApp></FooterApp>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue"

export default defineComponent({
  components: {
    HeaderApp,
    FooterApp
  }
})
</script>
<style>
body {
  background-color: #fafafa;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
