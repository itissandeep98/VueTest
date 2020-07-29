<template>
  <div id="app">
    <navhead/>
    <home/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/views/Home";
export default {
  components:{
      navhead:Header,
      home:Home
  }
  
}
</script>

<style>

</style>
