<template>
  <div>
    <div v-if="this.$store.state.$company.name">
        <div id="chartContainer">
          <Card class="chartItem ">
          <div style="text-align:center">
            <h3>公司法人关联图</h3>
          </div>
		  </Card>
          <Card class="chartItem ">
            <div style="text-align:center">
              <h3>公司经营组织架构图</h3>
            </div>
          </Card>
          <Card class="chartItem ">
            <div style="text-align:center">
              <h3>公司人员组织结构图</h3>
            </div>
          </Card>
          <Card class="chartItem ">
            <div style="text-align:center">
              <h3>公司人员流动情况图</h3>
            </div>
          </Card>
          <Card class="chartItem ">
            <div style="text-align:center">
              <h3>公司市值评估</h3>
            </div>
          </Card>
          <Card class="chartItem ">
            <div style="text-align:center">
              <h3>公司评价</h3>
            </div>
          </Card>
        
<!--            <div class="chartItem chart-01"></div>-->
<!--            <div class="chartItem chart-02"></div>-->
<!--            <div class="chartItem chart-03"></div>-->
<!--            <div class="chartItem chart-04"></div>-->
<!--            <div class="chartItem chart-05"></div>-->
<!--            <div class="chartItem chart-06"></div>-->
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
      margin: 15px;
      padding: 15px;
      width: 26%;
      height: 300px;
  }

</style>
