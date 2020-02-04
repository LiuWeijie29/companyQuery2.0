<template>
  <div>
    <div v-if="this.$store.state.$company.name">
        <div id="chartContainer">

        </div>
    </div>
    <div v-else class="pleaseSearchTip">
      <h1>请先查找企业</h1>
    </div>
  </div>
</template>

<script>
  export default {
      name: "altas",
      data(){
          return{
              currentCompany:this.$store.state.$company,
              //标题样式
              myTitleStyle : {
                text: '企业信息图谱',
                textStyle: {
                  color: "#fff"
                }
              },

              // 指定图表的配置项和数据
              // 配置悬浮提示框样式
              myTooltipStyle : {
                //formatter:标签内容格式器。模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
                formatter: function (e) {
                  if (e.value == '经营范围') {
                    return e.name
                  }
                  return e.value
                },
                showDelay: 2000, //浮层显示的延迟，单位为 ms
                hideDelay: 1000, //浮层隐藏的延迟，单位为 ms
                enterable: true, //鼠标是否可进入提示框浮层中
              },

              //力导向图配置
              myForce : {
                repulsion: 700,
                edgeLength: 250,
              },

              //配置标签样式
              myLabelStyle : {
                normal: {
                  show: true,
                  formatter: function (e) {
                    if (e.name.length > 50) { //如果长度太长 则让悬浮框显示全部内容
                      return e.value;
                    }
                    return e.value + ": " + e.name
                  },
                }
              },

              //配置线条样式
              myLineStyle : {
                normal: {
                  opacity: 0.8,
                  width: 2,
                  curveness: 0
                }
              },
          }
      },
      mounted(){
          this.chartsInit()
      },
      methods:{
        chartsInit(){
          this.$myChart = this.$echarts.init(document.getElementById('chartContainer'));

          //总选项
          let option = {
            title: this.myTitleStyle,
            tooltip: this.myTooltipStyle,
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
              type: 'graph',
              layout: 'force',
              force: this.myForce,
              draggable: true, //节点时候可拖拽，
              symbolSize: 70,
              roam: 'true',
              label: this.myLabelStyle,
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [1, 10],
              itemStyle: {
                normal: {
                  color: 'darkblue'
                }
              }, //圆圈样式
              symbol: "circle", //图形形状 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
              symbolSize: 60, //圈圈大小
              edgeLabel: {
                normal: {
                  show: true,
                  formatter: ''
                },
              },
              lineStyle: this.myLineStyle,

              data: [{
                name: this.currentCompany.name,
                value: '公司名',
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    color: 'darkblue',
                  }
                }

              }, {
                name: this.currentCompany.legalPerson,
                value: '企业法人',
                itemStyle: {
                  normal: {
                    color: 'darkblue'
                  }
                }
              }, {
                name: this.currentCompany.address,
                value: '公司地址',

              }, {
                name: this.currentCompany.capital,
                value: '注册资本',

              }, {
                name: this.currentCompany.creditCode,
                value: '信用代码',

              }, {
                name: this.currentCompany.setupTime,
                value: '成立时间',

              }, {
                name: this.currentCompany.scope,
                value: '经营范围',

              }, {
                name: this.currentCompany.province,
                value: '所属省份',

              }, {
                name: this.currentCompany.mail,
                value: '邮箱',

              }, {
                name: this.currentCompany.phone,
                value: '联系方式',

              }, {
                name: this.currentCompany.morePhone,
                value: '更多联系方式',
              }],

              links: [{
                source: this.currentCompany.name,
                target: this.currentCompany.legalPerson,
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.address,
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.setupTime
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.phone
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.scope
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.province
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.morePhone
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.capital
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.mail
              }, {
                source: this.currentCompany.name,
                target: this.currentCompany.creditCode
              }],

            }]
          };

          //点击跳转
          this.$myChart.on('click', e => {
            //如果点击了企业法人，那么搜索该企业法人的数据并且返回新图谱
            if (e.value == '企业法人') {
              this.clickLegalPerson(e)
            }
            //if点击了其他
            if (e.value == '公司名') {
              this.clickCompanyName(e)
            }
          })
          this.$myChart.setOption(option);
        },

        clickLegalPerson(e){
          this.$myChart.showLoading();
          this.$http.get('http://106.14.151.119:3000/api/search?legalPerson=' + e.name).then(res => {
            this.$myChart.hideLoading();
            var searchData = res.data;
            var dataArr = [{
              name: e.name,
              value: '企业法人',
              itemStyle: {
                normal: {
                  color: 'darkblue'
                }
              },
              symbolSize: 100,
            }];
            var linkArr = []


            //遍历接收返回数据中的公司名
            for (var i = 1; i < searchData.length; i++) {
              var companyObj = {
                name: searchData[i].name,
                value: '公司名',
                symbolSize: 70,
                itemStyle: {
                  normal: {
                    color: 'darkblue'
                  }
                },
              }
              var linkObj = {
                source: e.name,
                target: searchData[i].name,
              }
              dataArr.push(companyObj)
              linkArr.push(linkObj)
            }

            this.$myChart.setOption({
              title: this.myTitleStyle,
              tooltip: this.myTooltipStyle,
              animationDurationUpdate: 2500,
              animationEasingUpdate: 'quinticInOut',
              lineStyle: this.myLineStyle,
              series: [{
                name: '企业法人',
                type: 'graph',
                layout: 'force',
                force: this.myForce,
                draggable: true, //节点时候可拖拽，
                symbolSize: 60,
                roam: true,
                focusNodeAdjacency: true,
                label: this.myLabelStyle,

                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [1, 10],
                edgeLabel: {
                  normal: {
                    show: true,
                    formatter: ''
                  },
                },
                itemStyle: {
                  normal: {
                    color: 'darkblue'
                  }
                }, //圆圈样式
                symbol: "circle",
                symbolSize: 100, //圈圈大小
                data: dataArr, //数据
                links: linkArr, //关系
              }]
            });

          })
        },

        clickCompanyName(e){
          this.$myChart.showLoading();
          this.$http.get('http://106.14.151.119:3000/api/search?name=' + e.name).then(res => {
            this.$myChart.hideLoading();
            var searchData = res.data[1]; //获取以name准确查询到的公司数据
            var newOption = {
              title: this.myTitleStyle,
              tooltip: this.myTooltipStyle,
              animationDurationUpdate: 1500,
              animationEasingUpdate: 'quinticInOut',
              series: [{
                type: 'graph',
                layout: 'force',
                force: this.myForce,
                draggable: true, //节点时候可拖拽，
                symbolSize: 70,
                roam: 'true',
                label: this.myLabelStyle,
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [1, 15],
                itemStyle: {
                  normal: {
                    color: 'darkblue'
                  }
                }, //圆圈样式
                symbol: "circle", //图形形状 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 60, //圈圈大小
                lineStyle: this.myLineStyle,

                data: [{
                  name: searchData.name,
                  value: '公司名',
                  symbolSize: 100,
                  itemStyle: {
                    normal: {
                      color: 'darkblue'
                    }
                  }
                }, {
                  name: searchData.legalPerson,
                  value: '企业法人',
                  itemStyle: {
                    normal: {
                      color: 'darkblue'
                    }
                  }
                }, {
                  name: searchData.address,
                  value: '公司地址',

                }, {
                  name: searchData.capital,
                  value: '注册资本',

                }, {
                  name: searchData.creditCode,
                  value: '信用代码',

                }, {
                  name: searchData.setupTime,
                  value: '成立时间',

                }, {
                  name: searchData.scope,
                  value: '经营范围',
                }, {
                  name: searchData.province,
                  value: '所属省份',

                }, {
                  name: searchData.mail,
                  value: '邮箱',

                }, {
                  name: searchData.phone,
                  value: '联系方式',

                }, {
                  name: searchData.morePhone,
                  value: '更多联系方式',

                }],
                links: [{
                  source: searchData.name,
                  target: searchData.legalPerson,
                }, {
                  source: searchData.name,
                  target: searchData.address,
                }, {
                  source: searchData.name,
                  target: searchData.setupTime
                }, {
                  source: searchData.name,
                  target: searchData.phone
                }, {
                  source: searchData.name,
                  target: searchData.morePhone
                }, {
                  source: searchData.name,
                  target: searchData.scope
                }, {
                  source: searchData.name,
                  target: searchData.province
                }, {
                  source: searchData.name,
                  target: searchData.capital
                }, {
                  source: searchData.name,
                  target: searchData.creditCode
                }, {
                  source: searchData.name,
                  target: searchData.mail
                }],

              }]
            }
            this.$myChart.setOption(newOption);
          })
        },

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
      background-color: black!important;
      width: 100%;
      height: 800px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: start;
  }


</style>
