<template>
  <div>
    <div v-if="this.$store.state.$company.name">
        <div id="chartContainer">
            <div class="chartItem chart-01"></div>
            <div class="chartItem chart-02"></div>
            <div class="chartItem chart-03"></div>
            <div class="chartItem chart-04"></div>
            <div class="chartItem chart-05"></div>
            <div class="chartItem chart-06"></div>
        </div>
    </div>
    <div v-else class="pleaseSearchTip">
      <h1>请先查找企业</h1>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return{

          }
      },
      mounted(){

      },
      methods:{

      },
      components:{

      }
  }
</script>

<style scoped>
  .pleaseSearchTip{
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 450px;
  }
  .pleaseSearchTip h1{
    opacity: 0.2;
    font-weight: bolder;
  }
  #chartContainer{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: start;
  }
  .chartItem{
      padding: 15px;
      width: 33.3%;
      height: 400px;
      background-color: cornflowerblue;
  }
  #myChart{
      width: 500px;
      height: 500px;
  }
</style>
