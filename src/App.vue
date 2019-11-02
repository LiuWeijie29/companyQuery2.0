<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
	  return{

	  }
  },

  components:{

  },
}
</script>

<style>
#app {
    min-width: 1280px;
}

    /*滚动条样式*/
    /*::-webkit-scrollbar-track{*/
    /*  background: aliceblue;*/
    /*}*/
    /*::-webkit-scrollbar{*/
    /*  width: 15px;*/
    /*}*/
    /*::-webkit-media-slider-thumb{*/
    /*  background: linear-gradient(lightblue,aliceblue);*/
    /*  border-radius: 10px;*/
    /*}*/
</style>
