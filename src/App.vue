<template>
  <div id="app">
  	<!--<div class="ub ub-f1 ub-ac header">
  			<router-link tag="div" to="/"  class="ub ub-f1 ub-pc nav">首页</router-link>
  			<router-link tag="div" to="/main" class="ub ub-f1 ub-pc nav">主页</router-link>
  	</div>-->
    <router-view class="router"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
   
</style>
