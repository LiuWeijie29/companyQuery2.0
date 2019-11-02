<template>
  <div class="newsContainer">
    <div class="listContainer">
      <div class="listHeader">
        <span>热点头条</span>
      </div>
      <div>
        <ul>
          <li class="newsItem">
            <div class="item-img">我是图片</div>
            <div class="textInfor">
              <div class="title">淘集集每月亏2亿，下沉市场的机会还有多大？</div>
              <div class="info">淘集集这颗雷，终究还是引爆在上海萧瑟的秋日里。而此刻距离它坐上下沉市场这艘火箭的日子，才刚过一年。</div>
              <div class="source">企查查</div>
              <div class="time">3天前</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img">我是图片</div>
            <div class="textInfor">
              <div class="title">淘集集每月亏2亿，下沉市场的机会还有多大？</div>
              <div class="info">淘集集这颗雷，终究还是引爆在上海萧瑟的秋日里。而此刻距离它坐上下沉市场这艘火箭的日子，才刚过一年。</div>
              <div class="source">企查查</div>
              <div class="time">3天前</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img">我是图片</div>
            <div class="textInfor">
              <div class="title">淘集集每月亏2亿，下沉市场的机会还有多大？</div>
              <div class="info">淘集集这颗雷，终究还是引爆在上海萧瑟的秋日里。而此刻距离它坐上下沉市场这艘火箭的日子，才刚过一年。</div>
              <div class="source">企查查</div>
              <div class="time">3天前</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img">我是图片</div>
            <div class="textInfor">
              <div class="title">淘集集每月亏2亿，下沉市场的机会还有多大？</div>
              <div class="info">淘集集这颗雷，终究还是引爆在上海萧瑟的秋日里。而此刻距离它坐上下沉市场这艘火箭的日子，才刚过一年。</div>
              <div class="source">企查查</div>
              <div class="time">3天前</div>
            </div>
          </li>
          <li class="newsItem">
            <div class="item-img">我是图片</div>
            <div class="textInfor">
              <div class="title">淘集集每月亏2亿，下沉市场的机会还有多大？</div>
              <div class="info">淘集集这颗雷，终究还是引爆在上海萧瑟的秋日里。而此刻距离它坐上下沉市场这艘火箭的日子，才刚过一年。</div>
              <div class="source">企查查</div>
              <div class="time">3天前</div>
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
    background-color: aliceblue;
  }
  .lastedNews{
    width: 18%;
    height: 600px;
    background-color: peachpuff;
    margin: 8px;
  }
  .item-img{
    margin-right: 15px;
    text-align: center;
    line-height: 120px;
    height: 120px;
    width: 160px;
    background-color: grey;
  }
  .newsItem{
    position: relative;
    display: flex;
    justify-content: left;
    align-items: start;
  }
  .title{
    font-size: 20px;
    width: 600px;
    margin-bottom: 10px;
  }
  .info{
    color: darkgray;
    font-size: 14px;
    width: 600px;
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
