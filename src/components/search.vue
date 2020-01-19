<template>
	<div class="container">
		<Row type="flex" justify="space-between" class="code-row-bg">
			<Col span="16">
        <Tooltip  placement="bottom-start" :delay="1000">
          <Input  v-model="userIpt"  placeholder="请输入您要查询的企业关键信息"  size="large" search enter-button="Search" style="width: 450px;" autofocus @on-search="searchCompany"></Input>
          <div slot="content" style="white-space: normal;">
            <p><i>可搜索的关键词</i></p>
            <p>企业名称，地址，法人信息，社会统一信用代码，联系号码、邮箱</p>
          </div>
        </Tooltip>
			</Col>
		</Row>
		<Drawer title="搜索结果" @keyup.esc.native="closable = false" :closable="true" :scrollable="true" :draggable="true" width="300" :mask =false v-model="resultWarpper" class-name="resultWarpper">
      <Button type="info" ghost @click="showAllOnMap" style="margin-bottom: 8px;margin-left: 15px">在地图中显示所有结果</Button>
      <CellGroup v-for="(item,index) in result" :key="item.id">
			    <Cell :title="item.name" :selected="isSelected" @click.native="posMap(item,index)" />
			</CellGroup>
      <div style="margin-top: 15px">
        <Page :total="searchResultTotal" size="small" show-total page-size="10" @on-change="pageChange"/>
      </div>
      <Spin size="large" fix v-if="drawerSpin"></Spin>
		</Drawer>
	</div>
</template>

<script>
  import global from '@/global.vue';
	export default {
		data() {
			return {
				userIpt: '',//用户输入的搜索关键词
				url: 'http://106.14.151.119:3000/api/search?name=',//数据请求地址
				resultWarpper: false,//控制抽屉开关
				result:'',
				isSelected:false,
        page:1,
        showAll: false,
        searchResultTotal: 0,    //搜索的结果总数
        drawerSpin: false,
			}
		},
		methods: {
        //clearInfoWindow() 清除地图上的信息窗体。
        //removeControl(obj:Object) 移除地图上的指定控件

			searchCompany: function() {
				if (this.userIpt == '') {
					this.$Modal.error({
						title: '提示',
						content: '您输入的数据为空，请重新输入'
					});
				} else {
					//如果用户输入没问题 那么就发送数据请求
					this.spinShow = true       //按钮变成正在搜索状态
          this.resultWarpper = true
          this.drawerSpin = true
					this.$http.get(this.url + this.userIpt + '&page=' + this.page).then(res => {
            console.log("请求结果", res)
						this.spinShow = false;
						if(res.data.length > 1){
                this.result = res.data.slice(1);
                this.searchResultTotal = res.data[0]['数量']
                //将请求到的所有数据注册到全局变量中
                this.$store.state.$companyList = res.data.slice(1);
                this.$companyList = res.data.slice(1);
                this.drawerSpin = false
            }else{
                this.$Modal.error({
                    title: '提示',
                    content: '暂未搜索到该企业信息，换个关键词看看'
                });
                this.drawerSpin = false
            }
					}, res => {
            this.drawerSpin = false
						console.log(res);
					})
				}
			},
			posMap:function(companySelected,index) {
				//拿到被点击的公司下标，并把该公司的信息注册到全局变量company中 给map父组件传递信息窗体中的信息
				this.$company = this.$companyList[index];
				//将被选中的公司提交到中央管理器
				this.$store.state.$company = this.$companyList[index];
				this.$store.commit('companyHandle');//提交变更状态
				this.$emit("getInfor",companySelected);
				this.resultWarpper = false;//点击列表其中之一后关闭抽屉
			},
      showAllOnMap:function () {
          global.map.setZoom(12)
          //点击按钮后把结果都用标记显示出来
          var len = this.$store.state.$companyList.length
          for(var i =0 ;i<len ;i++){
              this.$emit('getAddressLocationAll',this.$store.state.$companyList[i])
          }
          this.$store.state.$isHaveSelectedToggle = true
      },
      pageChange:function (pageIndex) {
          this.drawerSpin = true
          this.$http.get(this.url + this.userIpt + '&page=' + pageIndex).then(res => {
              console.log("请求结果", res)
              this.spinShow = false;
              if(res.data.length > 1){
                  this.resultWarpper = true;
                  this.result = res.data.slice(1);
                  this.searchResultTotal = res.data[0]['数量']
                  //将请求到的所有数据注册到全局变量中
                  this.$store.state.$companyList = res.data.slice(1);
                  this.$companyList = res.data.slice(1);
                  this.drawerSpin = false
              }else{
                  this.$Modal.error({
                      title: '提示',
                      content: '系统开小差啦！请刷新后重试'
                  });
                  this.drawerSpin = false
              }
          }, res => {
              console.log(res);
          })
      }
		},
	}
</script>

<style scoped>
	.container {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-30%);
		width: 40%;
		z-index: 2;
	}

	.container input {
    width: 100%;
		display: inline-block;
		margin: 0 auto;
	}
  .search-container{
    display: flex;
    flex-direction: row;
  }
	#searchBtn {
		margin-left: 2px;
	}
</style>
