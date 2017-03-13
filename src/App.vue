<template>
  <div id="app">
    <main-header></main-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/header/header.vue'
import MainFooter from './components/footer/footer.vue'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>
  body {
    font-family: '-apple-system', 'PingFang SC', 'Hiragino Sans GB', Arial, Microsoft YaHei, Helvetica Neue, sans-serif;
    font-size: 14px;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-weight: 400;
    overflow-x: hidden;
    overflow-y: auto;
  }
  html {
    min-height: 100%;
    position: relative;
  }
  ul, li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    color: #34495e;
    text-decoration: none;
  }
  #app {
    min-height: 100%;
    background-color: #fafafa;
    min-width: 1120px;
  }
  .main-container {
    -webkit-transition: -webkit-transform .3s ease-in-out,margin .3s ease-in-out;
    -moz-transition: -moz-transform .3s ease-in-out,margin .3s ease-in-out;
    -o-transition: -o-transform .3s ease-in-out,margin .3s ease-in-out;
    transition: transform .3s ease-in-out,margin .3s ease-in-out;
    z-index: 820;
    padding: 20px;
    background: #fafafa;
    width: 1080px;
    min-width: 1080px;
    margin: 0 auto;
    min-height: 600px;
  }

</style>
