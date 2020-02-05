<template>
  <div class="newsContainer">
    <div class="listContainer">
      <div class="listHeader">
        <span>热点头条</span>
      </div>
      <div>
        <ul>
          <li class="newsItem">
            <div class="item-img" style="background-image: url('../../static/huawei.jpg')"></div>
            <div class="textInfor">
              <div class="title">外媒再度向华为确认 谷歌服务会考虑启用 但仍将坚持发展HMS</div>
              <div class="info">据The Verge报道,在华为发言人发给其的一封电子邮件中写到,“开放的安卓生态系统依然是我们的首选,这其中包括GMS(谷歌移动服务),这些使的我们成为了全球智能手机出货量排行第二的公司。”</div>
              <div class="source">快科技</div>
              <div class="time">发表于 2020-01-31</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img" style="background-image: url('../../static/san.jpg')"></div>
            <div class="textInfor">
              <div class="title">三星为Galaxy Z Flip智能手机申请UTG商标</div>
              <div class="info">三星Galaxy Fold后续产品Galaxy Z Flip主要特征是其6.7英寸柔性超薄玻璃显示屏(UTG)。三星UTG厚度不到100微米,可能的显示厚度为30 µm,相当于人发的厚度。</div>
              <div class="source">推酷</div>
              <div class="time">发表于 2020-01-31</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img" style="background-image: url('../../static/tesila.jpg')"></div>
            <div class="textInfor">
              <div class="title">特斯拉牵手宁德时代，动力电池供应商达到三家</div>
              <div class="info">淘集集这颗雷，终究还是引爆在上海萧瑟的秋日里。而此刻距离它坐上下沉市场这艘火箭的日子，才刚过一年。</div>
              <div class="source">第一财经</div>
              <div class="time">发表于 2020-01-30</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img" style="background-image: url('../../static/ruixing.jpg')"></div>
            <div class="textInfor">
              <div class="title">瑞幸咖啡遭做空，收盘跌幅10.74％</div>
              <div class="info">美国当地时间1月31日,以做空中概股出名的大空头浑水发布了一份对“瑞幸咖啡”长达89页的做空报告。</div>
              <div class="source">亿欧</div>
              <div class="time">发表于 2020-02-01</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img" style="background-image: url('../../static/yiqing.jpg')"></div>
            <div class="textInfor">
              <div class="title">疫情阻断春节出游：1天10万通电话、退单至少数百万单</div>
              <div class="info">根据此前携程、途牛、同程等平台发布的节前数据估测,原本2020春节或将有4.5亿人次出游,其中日本是出境游热门目的地。 然而,这个春节假期非常特殊,由于疫情,大部分人选择宅在家过年,而不是外出旅游。</div>
              <div class="source">第一财经</div>
              <div class="time">发表于 2020-01-31</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="lastedNews">

    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                slideIndex: 0,
                listData: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  body * {
    /*outline: 1px solid red*/
  }
  .newsContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-left: 60px;
  }

  .slideContainer {
    text-align: center;
    line-height: 300px;
    margin: 8px;
    width: 100%;
    height: 300px;
    background-color: cornflowerblue;
  }

  .listContainer {
    width: 80%;
    margin: 8px;
    height: 200px;
  }

  .listHeader {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }

  .listHeader > span {
    font-size: 16px;
    font-weight: 600;
    margin-left: 20px;
  }

  ul > li {
    margin: 20px;
    color:#181a1c;
    list-style: none;
    height: 120px;
    width: 98%;
    border-bottom: 1px solid #eeeeee;
  }
  ul > li:hover{
    /*background-color: aliceblue;*/
  }
  .lastedNews{
    width: 18%;
    height: 600px;
    /*background-color: peachpuff;*/
    margin: 8px;
  }
  .item-img{
    background-position: center;
    background-size: cover;
    margin-right: 15px;
    text-align: center;
    line-height: 120px;
    height: 120px;
    width: 160px;
    background-color: grey;
  }
  .newsItem{
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: start;
  }
  .title{
    font-size: 18px;
    width: 600px;
    margin-bottom: 10px;
  }
  .title:hover{
    color:darkblue;
  }
  .info{
    color: darkgray;
    font-size: 14px;
    width: 800px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    /*white-space: nowrap;*/
  }
  .source{
    text-align: center;
    color: darkgray;
    font-size: 14px;
    border: 1px solid #d6d6d6;
    width: 60px;
    margin-bottom: 10px;
  }
  .time{
    color: darkgray;
    position: absolute;
    right: 30px;
    bottom: 10px;
  }
</style>
