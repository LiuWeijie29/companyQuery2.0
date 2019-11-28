<template>
  <div>
    <search @getInfor="pos" ref="showResult"></search>
    <Col span="23">
      <div id="container">
        <Spin size="large" fix v-if="spinShow"></Spin>
        <div id="panel"></div>
      </div>
    </Col>
    <Col span="1">
      <div id="optionBar">
        <ul>
          <li>
            <div class="optionBar-item">
              <Tooltip content="搜索结果" placement="left">
                <Icon type="ios-paper" size="32" @click="openResult"/>
              </Tooltip>
            </div>
          </li>
          <li>
            <div class="optionBar-item">
              <Tooltip content="当前法人其他企业" placement="left">
                <Icon type="ios-contact" size="32" @click="findPersonOther"/>
              </Tooltip>
            </div>
          </li>
          <li>
            <div class="optionBar-item">
              <Tooltip content="附近其他企业" placement="left">
                <Icon type="md-paper-plane" size="32" @click="findAddressOtherDialog"/>
              </Tooltip>
            </div>
          </li>
          <li>
            <div class="optionBar-item">
              <Tooltip content="清除所有点标记" placement="left">
                <Icon type="ios-close-circle" size="32" @click="removeMarkers"/>
              </Tooltip>
            </div>
          </li>
          <li>
            <div class="optionBar-item">
              <Tooltip content="周边POI搜索" placement="left">
                <Icon type="md-search" size="32" @click="findNearby"/>
              </Tooltip>
            </div>
          </li>
          <li>
            <div class="optionBar-item">
              <Tooltip content="更换皮肤" placement="left">
                <Icon type="md-shirt" size="32" @click="changeColor"/>
              </Tooltip>
            </div>
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
        title="企业法人信息"
    >
      <Tabs value="profile">
        <TabPane label="个人简介" name="profile">
          <Avatar style="display: block;margin: 10px auto;height: 80px;width: 60px" shape="square" icon="ios-person" size="large" />
          <p style="text-align: center">{{currentCompany.legalPerson}}</p>
          <Divider dashed />
          <p style="text-indent: 10px">
            {{currentCompany.legalPerson}}，男，汉族，1958年2月生，四川成都人，1974年12月参加工作，1978年9月加入中国共产党，在职研究生学历，法学博士学位。
            现任十九届中央委员，安徽省委书记，省十三届人大常委会主任、党组书记。1978年9月加入中国共产党，在职研究生学历，法学博士学位。
            现任十九届中央委员，安徽省委书记，省十三届人大常委会主任、党组书记。1978年9月加入中国共产党，在职研究生学历，法学博士学位。
            现任十九届中央委员，安徽省委书记，省十三届人大常委会主任、党组书记。1978年9月加入中国共产党，在职研究生学历，法学博士学位。

            省十三届人大常委会主任、党组书记。1978年9月加入中国共产党，在职研究生学历，法学博士学位。
            现任十九届中央委员，安徽省委书记，省十三届人大常委会主任、党组书记。1978年9月加入中国共产党，在职研究生学历，法学博士学位。
            现任十九届中央委员，安徽省委书记，省十三届人大常委会主任、党组书记。
          </p>
        </TabPane>
        <TabPane label="曾经任职" name="lastPositon">
          <Timeline style="margin: 15px">
            <TimelineItem>
              <p class="personTime">1976年</p>
              <p class="personTimeContent">Apple I 问世</p>
            </TimelineItem>
            <TimelineItem>
              <p class="personTime">1984年</p>
              <p class="personTimeContent">发布 Macintosh</p>
            </TimelineItem>
            <TimelineItem>
              <p class="personTime">2007年</p>
              <p class="personTimeContent">发布 iPhone</p>
            </TimelineItem>
            <TimelineItem>
              <p class="personTime">2010年</p>
              <p class="personTimeContent">发布 iPad</p>
            </TimelineItem>
            <TimelineItem>
              <p class="personTime">2011年10月5日</p>
              <p class="personTimeContent">史蒂夫·乔布斯去世</p>
            </TimelineItem>
            <TimelineItem>
              <p class="personTime">2007年</p>
              <p class="personTimeContent">发布 iPhone</p>
            </TimelineItem>
          </Timeline>
        </TabPane>
        <TabPane label="拥有公司" name="ownedCompony">

        </TabPane>
        <TabPane label="合作伙伴" name="partner">暂无</TabPane>
      </Tabs>
    </Modal>

    <!--  当前法人下的其他公司  -->
    <Modal
        v-model="otherCompaniesDialog"
        title="当前法人下的其他公司">
        <relation-graph :currentCompany="currentCompany"></relation-graph>
    </Modal>

    <!--  附近地址公司  -->
    <Modal v-model="addressDegreeDialog" width="360">
      <p slot="header" style="color:cornflowerblue;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>请选择地址精细程度</span>
      </p>
      <div style="text-align:left">
        <Select v-model="degree" style="width:200px">
          <Option v-for="item in degreeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <p style="color: red;margin-top: 40px">注意：当选择精细程度较低时，需加载大量数据，可能会造成加载较慢的情况</p>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long  @click="findAddressOther(degree)">搜索</Button>
      </div>
    </Modal>

    <!--  POI搜索弹窗  -->
    <Modal v-model="POIDialog" width="600">
      <p slot="header" style="color:cornflowerblue;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>搜索公司附近POI点</span>
      </p>
      <div style="text-align:left">
        <p style="color: dodgerblue;margin: 10px 0px">请选择POI类型</p>
        <Select v-model="POItype" style="width:90%;margin-bottom: 20px" multiple :max-tag-count="4">
          <Option v-for="item in POItypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <p style="color: dodgerblue;margin: 10px 0px">请选择距离该公司范围</p>
        <Slider v-model="POIrangeList" :step="10" show-stops show-input style="width:90%;margin-bottom: 20px"></Slider>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long  @click="">搜索</Button>
      </div>
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
        title="公司人员流动情况"
        width="900"
        >
        <Staff-flow></Staff-flow>
    </Modal>

    <Modal
        v-model="marketValueDialog"
        title="公司市值评估"
        width="900"
    >
        <div class="market-value-dialog-container">
          <div class="market-value-item">
            <broken-line :currentCompany="currentCompany"></broken-line>
          </div>
<!--          <div class="market-value-item">-->
<!--            <dotted-bar :currentCompany="currentCompany"></dotted-bar>-->
<!--          </div>-->
        </div>
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
    import cycleGraph from "@/components/Echarts/cycleGraph" ;
    import DottedBar from "@/components/Echarts/DottedBar" ;
    import BrokenLine from "@/components/Echarts/BrokenLine"
    import relationGraph from "@/components/Echarts/relationGraph"
    import StaffFlow from "@/components/Echarts/StaffFlow"


    export default {
        data() {
            return {
                theme2: 'light',
                inforWindow: '',
                colorFlag: 1,
                recruitFlag: false,
                spinShow: false,
                markerList:[],                        //点标记
                polylineList:[],                      //线标记
                textList:[],                          //文本标记
                currentCompany:Object,                //当前点击了marker的公司
                searchThisCompanyDialog:false,        //查找该公司对话框
                addressDegreeDialog:false,            //查找附近地址公司对话框
                POIDialog: false,                     //POI搜索弹窗
                legalPersonDialog: false,                   //企业法人信息
                otherCompaniesDialog: false,                //当前法人下的其他公司
                ERPStructureDialog: false,                  //公司经营组织架构
                staffStructureDialog: false,                //公司人员组织架构
                staffFlowDialog: false,                     //公司人员流动情况
                marketValueDialog: false,                   //公司市值评估
                companyReviewDialog: false,                 //公司评价
                recruitmentInforDialog: false,              //公司招聘信息
                cultureDialog: false,                       //公司文化建设

                POItype:'',     //POI搜索类型
                POItypeList:[
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                ],
                POIrange:'',    //POI搜索范围
                POIrangeList:[

                ],

                degreeList:[
                    {
                        value: 'city',
                        label: '精确到市'
                    },{
                        value: 'county',
                        label: '精确到县'
                    },{
                        value: 'town',
                        label: '精确到镇'
                    },{
                        value: 'area',
                        label: '精确到区'
                    },{
                        value: 'road',
                        label: '精确到路'
                    },{
                        value: 'building',
                        label: '精确到楼'
                    },
                ],
                degree:'',

            }
        },

        mounted() {
            this.init();
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
            pos: function (companySelected) {
                this.$company = companySelected;
                this.getAddressLocation(companySelected);
            },
            getAddressLocation: function (infor) {
                var _this = this
                var geocoder = new AMap.Geocoder();
                geocoder.getLocation(infor.address, function(status, result){
                    if (status === 'complete' && result.geocodes.length) {

                        var point = result.geocodes[0].location;
                        _this.$company.point = point;
                        var marker = new AMap.Marker({
                            // icon: '/src/assets/images/pos.png',
                            title: '点击查看基本信息',
                            offset: new AMap.Pixel(-16, -32),
                        });
                        _this.markerList.push(marker)
                        global.map.add(marker);
                        marker.setPosition(point);
                        global.map.setFitView(marker);
                        //给标记添加事件，让其显示信息窗格，显示公司信息
                        AMap.event.addListener(marker, 'click', function () {
                            _this.inforShow(marker, infor);
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
                this.currentCompany = company
                this.searchThisCompany(this.currentCompany)
            },

            //该函数用于将其他公司地址转化为高德地图经纬度坐标,并且连线
            //异步
            getOtherCompanyAddress: function (address,targetCompany,type) {
                var that = this;
                var geocoder = new AMap.Geocoder();
                geocoder.getLocation(address, function (status, result) {
                    if (status === 'complete' && result.geocodes.length) {
                        console.log("result.geocodes：" + result.geocodes);
                        var point = result.geocodes[0].location;
                        //新建标记
                        var marker = new AMap.Marker({
                            // icon: '../img/pos.png',
                            title: '点击查看基本信息',
                            offset: new AMap.Pixel(-18, -28),
                        });
                        global.map.add(marker);
                        marker.setPosition(point);
                        that.markerList.push(marker)
                        //给标记添加事件，让其显示信息窗格，显示公司信息
                        AMap.event.addListener(marker, 'click', function () {
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
                        that.polylineList.push(polyline)
                        //添加连线
                        global.map.add(polyline);
                        //设置文本
                        if(type === 'samePerson'){
                            that.createLineText(that.$company.point, point, '相同法人')
                        }else if(type === 'city'){
                            that.createLineText(that.$company.point, point, '相同市')
                        }else if(type === 'county'){
                            that.createLineText(that.$company.point, point, '相同县')
                        }else if(type === 'town'){
                            that.createLineText(that.$company.point, point, '相同镇')
                        }else if(type === 'area'){
                            that.createLineText(that.$company.point, point, '相同区域')
                        }else if(type === 'road'){
                            that.createLineText(that.$company.point, point, '相同道路')
                        }else if(type === 'building'){
                            that.createLineText(that.$company.point, point, '相同建筑')
                        }

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
                this.textList.push(text)
            },


            //侧边按钮组：
            //打开、关闭搜索结果栏
            openResult: function () {
                if (this.$company.hasOwnProperty('name')) {
                    this.$refs.showResult.resultWarpper = !this.$refs.showResult.resultWarpper;
                } else {
                    this.$Message['info']({
                        background: true,
                        content: '请先搜索企业！'
                    });
                }
            },

            //功能：查找相同法人下的其他公司，以getOtherCompanyAddress(),createLineText()函数为基础
            findPersonOther: function () {
                this.spinShow = true
                if (this.$company.hasOwnProperty('legalPerson') == true) {
                    var url = "http://106.14.151.119:3000/api/search?legalPerson=" + this.$company.legalPerson;
                    //获取法人名字，发送查找该法人旗下的公司的请求
                    this.$http.get(url, {}).then(res => {
                        if (res.data.length != 2) {
                            //如果有其他企业，新建点 连线
                            for (var i = 1; i < res.data.length; i++) {
                                //转化地址并添加标记
                                this.getOtherCompanyAddress(res.data[i].address, res.data[i],'samePerson');
                            }
                            //地图缩放到全局
                            global.map.setZoom(12);
                            this.spinShow = false
                        } else {
                            this.spinShow = false
                            //如果无其他企业
                            this.$Modal.error({
                                title: '提示',
                                content: '暂无该法人下其它企业信息'
                            });
                        };
                    }, res => {
                        this.spinShow = false
                    })
                } else {
                    this.spinShow = false
                    this.$Message['info']({
                        background: true,
                        content: '请先搜索企业！'
                    });
                }

            },

            //查找附近其他公司对话框
            findAddressOtherDialog(){
                if (this.$company.hasOwnProperty('address') == true){
                    this.addressDegreeDialog = true
                }else{
                    this.$Message['info']({
                        background: true,
                        content: '请先搜索企业！'
                    });
                }

            },

            //功能：查找附近其他公司，以getOtherCompanyAddress(),createLineText()函数为基础
            findAddressOther: function (degree) {
                if (this.$company.hasOwnProperty('name') == true) {
                    //检索相近地址
                    if(degree === ''){
                        this.$Message['info']({
                            background: true,
                            content: '请选择精细程度！'
                        });
                        return
                    }
                    let degreeChosed
                    let address
                    let matchingAddress = this.$company.address
                    switch (degree) {
                        case 'city':degreeChosed = '市'
                            break
                        case 'county':degreeChosed = '县'
                            break
                        case 'town':degreeChosed = '镇'
                            break
                        case 'area':degreeChosed = '区'
                            break
                        case 'road':degreeChosed = '路'
                            break
                        case 'building':degreeChosed = '楼'
                            break
                    }
                    if(matchingAddress.indexOf(degreeChosed) !== -1){
                        address = String(matchingAddress.split(degreeChosed)[0])
                    }else{
                        this.$Message.error(`该公司地址中不包含“${degreeChosed}”的地址划分，请重新选择！`);
                    }
                    this.spinShow = true
                    this.addressDegreeDialog = false
                    var url = "http://106.14.151.119:3000/api/search?address=" + address;
                    this.$http.get(url).then(res => {
                        if (res.data.length != 2) {
                            //如果有其他企业，新建点 连线
                            for (var i = 1; i < res.data.length; i++) {
                                //转化地址并添加标记
                                this.getOtherCompanyAddress(res.data[i].address, res.data[i],degree);
                            }
                            //地图缩放到全局
                            global.map.setZoom(12);
                            this.spinShow = false
                        } else {
                            this.spinShow = false
                            //如果无其他企业
                            this.$Modal.error({
                                title: '提示',
                                content: '附近暂无其他企业'
                            });
                        };
                        this.spinShow = false
                    }, err => {
                        this.spinShow = false;
                        console.log("出现错误" + res);
                    })
                } else {
                    this.spinShow = false
                    this.$Message['info']({
                        background: true,
                        content: '请先搜索企业！'
                    });
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
                this.searchThisCompanyDialog = true;
            },

            //清除所有点标记和对应的连线
            removeMarkers(){
              if(this.markerList.length !== 0){
                  var i,j,k
                  for(i = 0;i < this.markerList.length;i++){
                      global.map.remove(this.markerList[i])
                  }
                  for(j = 0;j < this.polylineList.length;j++){
                      global.map.remove(this.polylineList[j])
                  }
                  for(k = 0;k < this.textList.length;k++){
                      global.map.remove(this.textList[k])
                  }
                  this.$company = {}
                  this.markerList = []
                  this.polylineList = []
                  global.map.setZoom(12);
              }else if(this.markerList.length === 0){
                  this.$Message['info']({
                      background: true,
                      content: '当前地图未有点标记！'
                  });
              }
            },

            findNearby(){
                this.POIDialog = true

                // var _this = this
                // this.spinShow = true
                // if(this.$company.hasOwnProperty('name')){
                //     AMap.service(["AMap.PlaceSearch"], function() {
                //         //构造地点查询类
                //         var placeSearch = new AMap.PlaceSearch({
                //             pageSize: 6, // 单页显示结果条数
                //             pageIndex: 1, // 页码
                //             city: _this.$company.city ? _this.$company.city : "", // 兴趣点城市
                //             citylimit: false,  //是否强制限制在设置的城市内搜索
                //             map: global.map, // 展现结果的地图实例
                //             panel: "panel", // 结果列表将在此容器中进行展示。
                //             autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                //             extensions: 'all', //此项默认值：base，返回基本地址信息 取值：all，返回基本+详细信息
                //             showCover: true
                //         });
                //         //关键字查询
                //         placeSearch.search(_this.$company.name);
                //         _this.spinShow = false
                //     });
                // }else {
                //     _this.spinShow = false
                //     this.$Message['info']({
                //         background: true,
                //         content: '请先搜索企业！'
                //     });
                // }

            }
        },
        components: {
            search,
            cycleGraph,
            DottedBar,
            BrokenLine,
            relationGraph,
            StaffFlow
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
  #optionBar ul{
    margin-top: 20px;
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
  .optionBar-item {
    text-align: center;
  }
  .optionBar-item:hover {
    color: cornflowerblue;
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
  .market-value-dialog-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex:1 1 auto;
    flex-direction: column;
  }
  .market-value-dialog-container > market-value-item {
    width: 48%;
  }
  .personTime{
    font-size: 14px;
    font-weight: bold;
  }
  .personTimeContent{
    padding-left: 5px;
  }
  #panel {
    position: absolute;
    background-color: white;
    z-index: 99;
    max-height: 90%;
    overflow-y: auto;
    top: 25px;
    right: 135px;
    width: 280px;
  }
</style>
