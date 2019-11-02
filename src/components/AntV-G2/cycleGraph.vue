<template>
  <div class="graphContainer">
    <div id="cycleGraph" style="position: relative;height: 600px;width: 800px"></div>
  </div>
</template>

<script>
    export default {
        name: "cycleGraph",
        data() {
          return {
              company:this.currentCompany
          }
        },
        props:[
            "currentCompany",
        ],
        created(){

        },
        mounted() {
            console.log(this.$echarts)
            let myChart = this.$echarts.init(document.getElementById('cycleGraph'));
            var _this = this
            // 指定图表的配置项和数据
            let option = {
                title : {
                    text: _this.currentCompany.name,
                    subtext: '组织架构图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : 'bottom',
                    data:['董事部','业务部','销售部','培训部','技术部','财务部','后勤部','售后部']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'部门人数占比',
                        type:'pie',
                        radius : [30, 110],
                        center : ['50%', '50%'],
                        roseType : 'area',
                        data:[
                            {value:10, name:'董事部'},
                            {value:5, name:'业务部'},
                            {value:15, name:'销售部'},
                            {value:25, name:'培训部'},
                            {value:20, name:'技术部'},
                            {value:35, name:'财务部'},
                            {value:30, name:'后勤部'},
                            {value:40, name:'售后部'}
                        ]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        components:{

        }
    }
</script>

<style scoped>
  .graphContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>