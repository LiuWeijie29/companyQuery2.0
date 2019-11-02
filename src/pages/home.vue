<template>
    <div>
        <div class="Header">
            <headerNav></headerNav>
        </div>
        <div class="content">
            <Col span="4">
                <ul class="nav-tab">
                    <h2>菜单</h2>
<!--                    <keep-alive>-->
<!--                      <router-link tag="li" class="nav-item" to="/home/map">企业地图</router-link>-->
<!--                    </keep-alive>-->
<!--                    <keep-alive>-->
<!--                      <router-link tag="li" class="nav-item" to="/home/altas">企业图谱</router-link>-->
<!--                    </keep-alive>-->

                    <li class="nav-item" @click="cur=0" :class="{selected:cur == 0}">企业地图</li>
                    <li class="nav-item" @click="cur=1" :class="{selected:cur == 1}">企业图谱</li>
                    <li class="nav-item" @click="cur=2" :class="{selected:cur == 2}">基本信息</li>
                    <li class="nav-item" @click="cur=3" :class="{selected:cur == 3}">发展时间轴</li>
                    <li class="nav-item" @click="cur=4" :class="{selected:cur == 4}">招聘信息</li>
                    <li class="nav-item" @click="cur=5" :class="{selected:cur == 5}">新闻资讯</li>
                    <li class="nav-item" @click="cur=6" :class="{selected:cur == 6}">企业云图</li>
                    <li class="nav-item" @click="cur=7" :class="{selected:cur == 7}">数据来源</li>
                    <li class="nav-item" @click="cur=8" :class="{selected:cur == 8}">更多功能</li>
                </ul>
            </Col>
            <Col span="20">
                <div class="RWarp">
                    <!-- 通过左边的tabs栏切换右边 RWarp的组件 -->
                    <gaodeMap v-show="cur==0"></gaodeMap>
                    <altas v-if="cur==1"></altas>
                    <baseInfor v-show="cur==2"></baseInfor>
                    <timeLine v-if="cur==3"></timeLine>
                    <recruit v-if="cur==4"></recruit>
                    <news v-show="cur==5"></news>
                    <keep-alive>
                      <cloudMap v-if="cur==6"></cloudMap>
                    </keep-alive>
                    <dataSource v-show="cur==7"></dataSource>
                    <more v-show="cur==8"></more>
                </div>
            </Col>
        </div>
        <!-- <foot></foot> -->
    </div>
</template>

<script>
    import global from '@/global.vue';
    import headerNav from '@/components/headerNav'
    import gaodeMap from '@/components/map.vue'
    import altas from '@/components/altas.vue'
    import baseInfor from '@/components/baseInfor.vue'
    import timeLine from '@/components/timeLine.vue'
    import recruit from '@/components/recruit.vue'
    import news from '@/components/news.vue'
    import cloudMap from '@/components/cloudMap.vue'
    import dataSource from '@/components/dataSource.vue'
    import more from '@/components/moreFunction.vue'

    export default {
        data() {
            return {
                switchValue: true,
                cur: 0,
            }
        },
        created() {

        },
        methods: {},
        components: {
            global,
            headerNav,
            gaodeMap,
            // foot,
            altas,
            baseInfor,
            timeLine,
            recruit,
            news,
            cloudMap,
            dataSource,
            more

        },
        mounted() {
            this.$Notice.open({
                title: '欢迎使用企业信息查询系统！',
                desc: '请在搜索框中输入搜索信息后才能使用大部分功能哦'
            });
        }
    }
</script>

<style>
    .Header {
        width: 100%;
    }

    headerNav {
        z-index: 100;
    }

    .content {

        height: 800px;
        background-color: #fff;
    }

    .LSlider {
        height: 100%;
        width: 100%;
        background-color: #fff;
    }

    .RWarp {
        position: relative;
        height: 100%;
        width: 100%;
        background-color: #fff;
    }
    .nav-tab{

    }
    .nav-tab > h2{
        font-weight: bolder;
        line-height: 40px;
        padding: 10px 20px;
        font-size: 16px;
        width: 100%;
        height: 50px;
        text-align: left;
    }
    .nav-item{
        cursor: pointer;
        padding: 10px 20px;
        font-size: 16px;
        width: 100%;
        height: 40px;
        text-align: left;
        list-style: none;
    }
    .nav-item:hover{
        background-color: aliceblue;
    }
    .selected{
        background-color: aliceblue;
    }
</style>
