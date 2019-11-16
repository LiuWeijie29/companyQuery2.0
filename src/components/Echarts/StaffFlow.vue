<template>
  <div class="graphContainer">
    <div id="StaffFlow" style="position: relative;height: 600px;width: 800px"></div>
  </div>
</template>

<script>
    export default {
        name: "StaffFlow",
        data() {
            return {
                company:this.currentCompany
            }
        },
        props:[
            "currentCompany",
        ],
        mounted() {
            let myChart = this.$echarts.init(document.getElementById('StaffFlow'));
            let option = {
                title: {
                    text: '公司近年人员流动情况',
                    subtext: '折线图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['最高人数','最低人数']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2011年','2012年','2013年','2014年','2015年','2016年','2016年']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 人'
                    }
                },
                series: [
                    {
                        name:'男性职工',
                        type:'line',
                        data:[60, 70, 90, 120, 115, 110, 100],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'女性职工',
                        type:'line',
                        data:[56, 54, 76, 106, 108, 110, 106],
                        markPoint: {
                            data: [
                                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'},
                                [{
                                    symbol: 'none',
                                    x: '90%',
                                    yAxis: 'max'
                                }, {
                                    symbol: 'circle',
                                    label: {
                                        normal: {
                                            position: 'start',
                                            formatter: '最大值'
                                        }
                                    },
                                    type: 'max',
                                    name: '最高点'
                                }]
                            ]
                        }
                    }
                ]
            };
            myChart.setOption(option);
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