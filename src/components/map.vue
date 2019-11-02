<template>
  <div>
    <search @getInfor="pos" ref="showResult"></search>
    <Col span="23">
      <div id="container">
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>
    </Col>
    <Col span="1">
      <div id="optionBar">
        <ul>
          <li>
<!--            <div class="icon-legalPerson"></div>-->
          </li>
          <li>
            <div class=""></div>
          </li>
          <li>
            <div class=""></div>
          </li>
          <li>
            <div class=""></div>
          </li>
          <li>
              <div class=""></div>
          </li>
          <li>
              <div class=""></div>
          </li>
          <li>
              <div class=""></div>
          </li>
        </ul>
      </div>
    </Col>

    <!--  点击Marker后出现的对话框  -->
    <Modal
        class = "markerDialog"
        v-model="searchThisCompanyDialog"
        :title="currentCompany ? currentCompany.name : '公司信息'"
        :width="800"
        @on-ok=""
        @on-cancel="">
        <div class="spiltBox">
          <div class="spilt-left">
            <p><Tag color="blue" class="split-left-tag">企业法人</Tag>{{currentCompany.legalPerson}}</p>
            <p><Tag color="blue" class="split-left-tag">联系电话</Tag>{{currentCompany.phone ? currentCompany.phone : currentCompany.morePhone}}</p>
            <p><Tag color="blue" class="split-left-tag">成立日期</Tag>{{currentCompany.date ? currentCompany.date : '暂无信息'}}</p>
            <p><Tag color="blue" class="split-left-tag">社会统一信用代码</Tag>{{currentCompany.creditCode ? currentCompany.creditCode: '暂无信息'}}</p>
            <p><Tag color="blue" class="split-left-tag">注册资本</Tag>{{currentCompany.capital ? currentCompany.capital: '暂无信息'}}</p>
            <p><Tag color="blue" class="split-left-tag">地址</Tag>{{currentCompany.address ? currentCompany.address : '暂无信息'}}</p>
            <p><Tag color="blue" class="split-left-tag">经营范围</Tag>{{currentCompany.scope ? currentCompany.scope: '暂无信息'}}</p>
          </div>
          <div class="spilt-right" >
            <Card  class="altas-item" @click.native="showSubDialog('legalPerson')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="ios-contact" title="企业法人信息" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('otherCompany')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="md-analytics" title="法人名下其他公司" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('ERP')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="md-git-branch" title="企业经营组织架构" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('staff')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="ios-people" title="企业人员组织架构" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('staffFlow')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="ios-walk" title="企业人员流动情况" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('market')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="md-pulse" title="企业市值评估" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('review')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="ios-happy" title="企业评价" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('recruit')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="md-person-add" title="企业招聘信息" size="36"/>
            </Card>
            <Card  class="altas-item" @click.native="showSubDialog('culture')">
              <Icon class="altas-item-icon" color="rgb(24,144,255)" type="ios-images" title="企业文化建设" size="36"/>
            </Card>
          </div>
        </div>
    </Modal>

    <!--  企业法人信息对话框  -->
    <Modal
        v-model="legalPersonDialog"
        title="企业法人信息">
      <p>{{currentCompany.legalPerson}}</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>

    <!--  当前法人下的其他公司  -->
    <Modal
        v-model="otherCompaniesDialog"
        title="当前法人下的其他公司">
      <p>{{currentCompany.legalPerson}}</p>
    </Modal>

    <Modal
        v-model="ERPStructureDialog"
        width="900"
        height="610"
        title="公司经营组织架构">
        <cycle-graph :currentCompany="currentCompany"></cycle-graph>
    </Modal>

    <Modal
        v-model="staffStructureDialog"
        title="公司人员组织架构">
      <p>{{currentCompany.legalPerson}}</p>
    </Modal>

    <Modal
        v-model="staffFlowDialog"
        title="公司人员流动情况">
      <p>{{currentCompany.legalPerson}}</p>
    </Modal>

    <Modal
        v-model="marketValueDialog"
        title="公司市值评估">
      <p>{{currentCompany.legalPerson}}</p>
    </Modal>

    <Modal
        v-model="companyReviewDialog"
        title="公司评价">
      <p>{{currentCompany.legalPerson}}</p>
    </Modal>

    <Modal
        v-model="recruitmentInforDialog"
        title="公司招聘信息">
      <p>{{currentCompany.legalPerson}}</p>
    </Modal>

    <Modal
        v-model="cultureDialog"
        title="公司文化建设">
      <p>{{currentCompany.legalPerson}}</p>
    </Modal>
  </div>

</template>

<script>
    import global from '@/global.vue';
    import search from '@/components/search.vue';
    import cycleGraph from "@/components/AntV-G2/cycleGraph" ;
    export default {
        data() {
            return {
                theme2: 'light',
                inforWindow: '',
                colorFlag: 1,
                recruitFlag: false,
                spinShow: false,
                currentCompany:Object,                 //当前点击了marker的公司
                searchThisCompanyDialog:false,        //查找该公司对话框

                legalPersonDialog: false,                   //企业法人信息
                otherCompaniesDialog: false,                //当前法人下的其他公司
                ERPStructureDialog: false,                  //公司经营组织架构
                staffStructureDialog: false,                //公司人员组织架构
                staffFlowDialog: false,                     //公司人员流动情况
                marketValueDialog: false,                   //公司市值评估
                companyReviewDialog: false,                 //公司评价
                recruitmentInforDialog: false,              //公司招聘信息
                cultureDialog: false,                       //公司文化建设

            }
        },

        mounted() {
            this.init();
            console.log("全局变量" + global.map);

        },
        methods: {
            showSubDialog(type){
                switch (type) {
                    case 'legalPerson':
                        this.legalPersonDialog = true
                        break;
                    case 'otherCompany':
                        this.otherCompaniesDialog = true
                        break;
                    case 'ERP':
                        this.ERPStructureDialog = true
                        break;
                    case 'staff':
                        this.staffStructureDialog = true
                        break;
                    case 'staffFlow':
                        this.staffFlowDialog = true
                        break;
                    case 'market':
                        this.marketValueDialog = true
                        break;
                    case 'review':
                        this.companyReviewDialog = true
                        break;
                    case 'recruit':
                        this.recruitmentInforDialog = true
                        break;
                    case 'culture':
                        this.cultureDialog = true
                        break;
                }
            },

            //地图初始化
            init: function () {
                global.map = new AMap.Map('container', {
                    resizeEnable: true, //是否监控地图容器尺寸变化
                    zoom: 11, //初始化地图层级
                    center: [116.397428, 39.90923], //初始化地图中心点
                    pitch: 65,
                    viewMode: '3D',
                    mapStyle: "amap://styles/normal", //设置地图的显示样式

                });
                // global.map.setMapStyle('amap://styles/whitesmoke');//设置地图样式
                AMap.plugin([
                    'AMap.ControlBar',
                ], function () {
                    global.map.addControl(new AMap.ControlBar());
                });
                global.map.setFeatures(["road", "bg", "building", "point"]); //设置地表建筑
                //添加比例尺
                global.map.plugin('AMap.Scale', function () {
                    var scale = new AMap.Scale();
                    global.map.addControl(scale);
                });
                //添加工具栏
                global.map.plugin('AMap.ToolBar', function () {
                    var tool = new AMap.ToolBar();
                    global.map.addControl(tool);
                });
                //浏览器定位
                global.map.plugin('AMap.Geolocation', function () {
                    var geolocation = new AMap.Geolocation({
                        // 是否使用高精度定位，默认：true
                        enableHighAccuracy: true,
                        // 设置定位超时时间，默认：无穷大
                        timeout: 10000,
                        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                        buttonOffset: new AMap.Pixel(20, 60),
                        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        zoomToAccuracy: true,
                        //  定位按钮的排放位置,  RB表示右下
                        buttonPosition: 'RB'
                    })
                    global.map.addControl(geolocation);

                    AMap.event.addListener(geolocation, 'complete', onComplete)
                    AMap.event.addListener(geolocation, 'error', onError)

                    function onComplete(data) {
                        console.log(data);
                    }

                    function onError(data) {
                        // 定位出错
                        console.log("定位出错");
                    }

                    //是否一加载地图就定位到自己的位置
                    geolocation.getCurrentPosition();
                });
            },

            //接受search组件传来的值，对地图进行对该企业的定位
            pos: function (infor) {
                this.$company = infor;
                console.log(infor);
                this.getAddressLocation(infor);
                console.log(this.$company);
            },
            getAddressLocation: function (infor) {
                var that = this;
                var geocoder = new AMap.Geocoder();
                geocoder.getLocation(infor.address, function (status, result) {
                    if (status === 'complete' && result.geocodes.length) {

                        var point = result.geocodes[0].location;
                        console.log(point);
                        that.$company.point = point;
                        console.log(that.$company.point);
                        var marker = new AMap.Marker({
                            // icon: '/src/assets/images/pos.png',
                            title: '点击查看基本信息',
                            offset: new AMap.Pixel(-16, -32),
                        });
                        global.map.add(marker);
                        marker.setPosition(point);
                        global.map.setFitView(marker);
                        //给标记添加事件，让其显示信息窗格，显示公司信息
                        AMap.event.addListener(marker, 'click', function () {
                            console.log(marker.getPosition());
                            that.inforShow(marker, infor);
                        })
                        return point;
                    }
                    if (status === 'err') {
                        console.log("发生错误:" + JSON.stringify(result));
                    }
                });
            },
            //定义marker的信息窗体
            inforShow: function (marker, company) {
                // var info = [];
                // info.push(
                //     "<div class='input-card content-window-card'><div><img style=\"float:left;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div> "
                // );
                // info.push("<div style=\"padding:7px 0px 0px 0px;\"><br><h4>" + company.name + "</h4><br>");
                // info.push("<p class='input-item'>企业法人 :" + company.legalPerson);
                // info.push("<p class='input-item'>联系电话 :" + company.phone + "/" + company.morePhone);
                // info.push("<p class='input-item'>社会统一信用代码 :" + company.creditCode);
                // // info.push("<p class='input-item'>成立日期 :"+ company.data);
                // // info.push("<p class='input-item'>注册资本 :"+ company.capital);
                // info.push("<p class='input-item'>地址 :" + company.address + "</p>");
                // info.push("<p class='input-item'>经营范围 :" + company.scope + "</p><br>");
                //
                // var url = "../html/searchResult.html?name=" + company.name;
                //
                // info.push("<p class='input-item'><a id='inforBoxToFind'  @click.prevent='searchThisCompany'>查询该公司</a></p>");
                //
                // this.inforWindow = new AMap.InfoWindow({
                //     //设置位置锚点
                //     anchor: 'bottom-left',
                //     content: info.join(""), //使用默认信息窗体框样式，显示信息内容
                // })
                //
                // this.inforWindow.open(global.map, marker.getPosition());
                this.currentCompany = company
                this.searchThisCompany(this.currentCompany)
            },

            //该函数用于将其他公司地址转化为高德地图经纬度坐标,并且连线
            //异步
            getOtherCompanyAddress: function (address, targetCompany) {
                var that = this;
                var geocoder = new AMap.Geocoder();
                geocoder.getLocation(address, function (status, result) {
                    if (status === 'complete' && result.geocodes.length) {
                        console.log("地址转化成功：" + result);
                        var point = result.geocodes[0].location;
                        console.log(point);
                        //新建标记
                        var marker = new AMap.Marker({
                            // icon: '../img/pos.png',
                            title: '点击查看基本信息',
                            offset: new AMap.Pixel(-18, -28),
                        });
                        global.map.add(marker);
                        marker.setPosition(point);
                        //给标记添加事件，让其显示信息窗格，显示公司信息
                        AMap.event.addListener(marker, 'click', function () {
                            console.log(marker.getPosition());
                            that.inforShow(marker, targetCompany);
                        })
                        //新建同主公司的连线
                        var path = [
                            new AMap.LngLat(point.lng, point.lat),
                            new AMap.LngLat(that.$company.point.lng, that.$company.point.lat)
                        ];
                        var polyline = new AMap.Polyline({
                            path: path,
                            borderWeight: 1, // 线条宽度，默认为 1
                            strokeColor: 'blue', // 线条颜色
                            strokeWeight: 2,
                        });
                        //添加连线
                        global.map.add(polyline);
                        //设置文本
                        that.createLineText(that.$company.point, point, '相同法人')
                        return point;
                    }
                    if (status === 'err') {
                        console.log("发生错误:" + JSON.stringify(result));
                    }
                });
            },

            //创建连线之间的文本
            createLineText: function (point1, point2, word) {
                var textPos = point1.divideBy(2).add(point2.divideBy(2));
                var distance = Math.round(point1.distance(point2));
                if (distance == 0) {
                    return;
                }
                var text = new AMap.Text({
                    text: word + '(两地相距' + distance + '米)',
                    position: textPos,
                    map: global.map,
                    style: {
                        'background-color': '#29b6f6',
                        'border-color': '#e1f5fe',
                        'color': '#fff',
                        'font-size': '10px',
                    }
                })
            },


            //侧边按钮组：
            //打开、关闭搜索结果栏
            openResult: function () {
                console.log(this.$company);
                console.log(this.$companyList);
                if (this.$company.hasOwnProperty('name')) {
                    this.$refs.showResult.resultWarpper = !this.$refs.showResult.resultWarpper;
                } else {
                    alert("请先搜索企业！")
                }

            },

            //功能：查找相同法人下的其他公司，以getOtherCompanyAddress(),createLineText()函数为基础
            findPersonOther: function () {
                this.spinShow = !this.spinShow
                console.log(this.$company);
                if (this.$company.hasOwnProperty('legalPerson') == true) {
                    console.log(this.$company.legalPerson);
                    var url = "http://106.14.151.119:3000/api/search?legalPerson=" + this.$company.legalPerson;
                    //获取法人名字，发送查找该法人旗下的公司的请求
                    this.$http.get(url, {}).then(res => {
                        console.log(res);
                        if (res.data.length != 2) {
                            //如果有其他企业，新建点 连线
                            for (var i = 1; i < res.data.length; i++) {
                                //转化地址并添加标记
                                this.getOtherCompanyAddress(res.data[i].address, res.data[i]);
                            }
                            //地图缩放到全局
                            global.map.setZoom(12);
                            this.spinShow = !this.spinShow
                        } else {
                            this.spinShow = !this.spinShow
                            //如果无其他企业
                            this.$Modal.error({
                                title: '提示',
                                content: '暂无该法人下其它企业信息'
                            });
                        }
                        ;

                    }, res => {
                        this.spinShow = !this.spinShow
                        console.log("出现错误" + res);
                    })
                } else {
                    this.spinShow = !this.spinShow
                    alert("请先搜索企业！")
                }

            },

            //更改主题样式
            changeColor: function () {
                this.colorFlag++;
                if (this.colorFlag == 6) {
                    this.colorFlag = 1;
                }
                switch (this.colorFlag) {
                    case 1:
                        global.map.setMapStyle('amap://styles/normal');
                        break;
                    case 2:
                        global.map.setMapStyle('amap://styles/grey');
                        break;
                    case 3:
                        global.map.setMapStyle('amap://styles/dark');
                        break;
                    case 4:
                        global.map.setMapStyle('amap://styles/light');
                        break;
                    case 5:
                        global.map.setMapStyle('amap://styles/darkblue');
                        break;
                }
            },
            searchThisCompany(item){
                console.log(item)
                this.searchThisCompanyDialog = true;
            }
        },
        components: {
            search,cycleGraph
        }
    }
</script>

<style scoped>
  li {
    list-style: none;
  }
  #container {
    margin: 0;
    margin-top: 0px;
    padding: 0;
    padding-top: 0px;
    height: 850px;
    width: 100%;
    z-index: 0;
  }
  #optionBar {

  }
  #optionBar ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 0;
  }
  #optionBar>ul>li{
    margin: 6px 0px;
    width: 100%;
    height: 55px;
  }
  .icon-legalPerson {
    background-image: url("/src/assets/images/legalPerson-s.svg");
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
  }
  .spiltBox {
    display: flex;
    flex-direction: row;
    min-height: 300px;
  }
  .spilt-left {
    border-right: 1px solid rgba(119,119,119,0.2);
    padding:0px 20px;
    width: 1500px;
  }
  .spilt-left p{
    margin: 6px 0px;
    cursor: default;
  }
  .spilt-right {
    width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:0px 20px;
  }
  .altas-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin: 5px;
  }
  .split-left-tag {
    margin-right: 10px;
  }
  .altas-item-icon {
    line-height: 55px;
  }
</style>
