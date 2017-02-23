<template>
  <div id="app">
    <ul class="linkBox">
      <router-link to="/hot" tag="li">正在热映</router-link>
      <router-link to="/show" tag="li">即将上映</router-link>
      <router-link to="/top" tag="li">Top250</router-link>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app'
}
</script>

<style>
*{margin:0;padding:0;box-sizing:border-box;}
ul,li{list-style:none;}
body{background:url("assets/bg.png") no-repeat center center;background-size:cover;font-family:"微软雅黑";color:#abcdef;}
.linkBox{width:100%;height:60px;padding-left:20px;background:rgba(0,0,0,.2);line-height:60px;color:#fff;}
.linkBox li{float:left;padding:0px 10px;cursor:pointer;}
.linkBox li.router-link-active{color:red;}
</style>
