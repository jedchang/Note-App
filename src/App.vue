<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/style/_reset.scss';
@import '@/style/_custom.scss';

// google fonts
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Baloo+Thambi&display=swap');

// Material design icons
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  box-sizing: border-box;
}

body {
  overflow-y: hidden; // 隱藏網頁高度卷軸
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
