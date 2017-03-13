<template>
	<div class="main-header">
      <div class="logo container">
        <router-link to="/">Sweet House</router-link>
      </div>
    </div>
</template>
<style>
.main-header {
  height: 50px;
  background: #222;
  line-height: 50px;
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 333;
}
.main-header .logo {
  color: #fff;
  border-bottom: 0 solid transparent;
  -webkit-transition: width .3s ease-in-out;
  -o-transition: width .3s ease-in-out;
  transition: width .3s ease-in-out;
  display: block;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;
}
.main-header .logo>a {
  color: #fff;
  font-weight: 500;
}
</style>
