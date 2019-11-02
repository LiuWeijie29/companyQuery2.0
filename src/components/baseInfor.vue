<template>
    <div class="basicContainer">
        <div class="basicInfor" v-if="this.$store.state.$company.name">
            <table id="inforTable" class="">
                <!--        address: "江西省南昌市安义县鼎湖镇人民政府601室"-->
                <!--        capital: "21000万元人民币"-->
                <!--        city: "南昌市"-->
                <!--        creditCode: "91360123MA36WUNG1H"-->
                <!--        legalPerson: "李景斌"-->
                <!--        mail: "357093246@qq.com"-->
                <!--        morePhone: ""-->
                <!--        name: "南昌绿地潦河置业有限公司"-->
                <!--        phone: (...)-->
                <!--        point: c {P: 28.831889, Q: 115.549261, lng: 115.549261, lat: 28.831889}-->
                <!--        province: "江西"-->
                <!--        scope: "房地产开发、销售;自有房屋租赁。(依法须经批准的项目,经相关部门批准后方可开展经营活动)*"-->
                <!--        setupTime: "2017/11/3"-->
                <!--        type: "有限责任公司（非自然人投资或控股的法人独资）"-->
                <!--        website: ""-->
                <tr>
                    <td class="info attr">企业法人</td>
                    <td id="name" class="contentTD">{{this.$store.state.$company.name}}</td>
                    <td class="info attr">企业法人</td>
                    <td id="legalPerson" class="contentTD" colspan="3">{{this.$store.state.$company.legalPerson}}</td>
                </tr>
                <tr>
                    <td class="info attr">联系方式</td>
                    <td id="phone" class="contentTD">{{this.$store.state.$company.phone}}</td>
                    <td class="info attr">更多联系方式</td>
                    <td id="morePhone" class="contentTD">{{this.$store.state.$company.morePhone}}</td>
                </tr>
                <tr>
                    <td class="info attr">注册资本</td>
                    <td id="RCapital" class="contentTD">{{this.$store.state.$company.capital}}</td>
                    <td class="info attr">实缴资本</td>
                    <td id="ActualCapital" class="contentTD">暂无</td>
                </tr>
                <tr>
                    <td class="info attr">经营状态</td>
                    <td id="ManagementState" class="contentTD">暂无</td>
                    <td class="info attr">成立日期</td>
                    <td id="setupTime" class="contentTD">{{this.$store.state.$company.setupTime}}</td>
                </tr>
                <tr>
                    <td class="info attr">统一社会信用代码</td>
                    <td id="creditCode" class="contentTD">{{this.$store.state.$company.creditCode}}</td>
                    <td class="info attr">纳税人识别号</td>
                    <td class="contentTD">暂无</td>
                </tr>
                <tr>
                    <td class="info attr">注册号</td>
                    <td class="contentTD">暂无</td>
                    <td class="info attr">组织机构代码</td>
                    <td class="contentTD">暂无</td>
                </tr>
                <tr>
                    <td class="info attr">公司类型</td>
                    <td id="type" class="contentTD">{{this.$store.state.$company.type}}</td>
                    <td class="info attr">所属行业</td>
                    <td class="contentTD">暂无</td>
                </tr>
                <tr>
                    <td class="info attr">所属地区</td>
                    <td id="province" class="contentTD">{{this.$store.state.$company.city}}</td>
                    <td class="info attr">登记机关</td>
                    <td class="contentTD">{{this.$store.state.$company.phone}}</td>
                </tr>
                <tr>
                    <td class="info attr">人员规模</td>
                    <td class="contentTD">{{this.$store.state.$company.phone}}</td>
                    <td class="info attr">英文名</td>
                    <td class="contentTD">{{this.$store.state.$company.phone}}</td>
                </tr>
                <tr>
                    <td class="info attr">邮箱</td>
                    <td id="mail" class="contentTD">{{this.$store.state.$company.mail}}</td>
                    <td class="info attr">数据来源</td>
                    <td id="dataSourse" class="contentTD">暂无</td>
                </tr>
                <tr>
                    <td class="info attr">经营范围</td>
                    <td id="scope" class="contentTD" colspan="3" style="text-indent: 30px;line-height: 30px">
                        {{this.$store.state.$company.scope}}
                    </td>
                </tr>
            </table>
            <div class="print">
                <Button type="default" @click="print()">打印</Button>
            </div>
        </div>
        <div v-else class="pleaseSearchTip">
            <h1>请先查找企业</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
            console.log(("this.$store.state.$company;"))
            if (this.$store.state.$company) {
                console.log(this.$store.state.$company)
            }
        },
        methods: {
            print(){
                window.print()
            }
        },
        components: {}
    }
</script>

<style scoped>
    .basicContainer {
        position: relative;
    }

    .basicInfor {
        margin: 15px;
    }

    #inforTable {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 90%;
        min-width: 80%;
    }

    table {
        font-size: 14px;
        color: #2d2d2d;
        border: #d6d6d6
    }

    tr {
        text-align: left;
        min-width: 160px;
        min-height: 50px;
        border: #d6d6d6

    }

    tr:nth-child(odd) {
        background-color: aliceblue;
    }

    tr {
        transition: background 0.5s;
    }

    td {
        min-width: 140px;
        padding: 15px 25px;
        height: 50px;
        border: 1px solid #d6d6d6
    }

    table .attr {
        text-align: center;
        width: auto;
    }

    .pleaseSearchTip {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 450px;
    }

    .pleaseSearchTip h1 {
        opacity: 0.2;
        font-weight: bolder;
    }

    .print {
        margin-top: 15px;
        margin-left: -2px;
        margin-bottom: 15px;
        width: 90%;
        display: flex;
        flex-direction: row-reverse;

    }
</style>
