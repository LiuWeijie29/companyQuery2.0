<template>
	<div class="container">
		<Row type="flex" justify="space-between" class="code-row-bg">
			<Col span="16">
        <Input  v-model="userIpt" value="南昌" placeholder="请输入您要查询的企业关键信息" size="large" autofocus @keyup.enter.native="searchCompany"></Input>
        <Tooltip  placement="bottom-start">
          <div slot="content" style="white-space: normal;">
            <p><i>可搜索的关键词</i></p>
            <p>企业名称，地址，法人信息，社会统一信用代码，联系号码、邮箱</p>
          </div>
        </Tooltip>
			</Col>
			<Col span="8">
			<Button id="searchBtn"  @click="searchCompany" size="large" icon="ios-search" type="primary" :loading="sBtnLoading">搜索</Button>
			</Col>
		</Row>
		<Drawer title="搜索结果" @keyup.esc.native="closable = false" :closable="true" :scrollable="true" :draggable="true" width="300" v-model="resultWarpper" class-name="resultWarpper">
			<CellGroup v-for="(item,index) in result" :key="item.id">
			    <Cell :title="item.name" :selected="isSelected" @click.native="posMap(item,index)" />
			</CellGroup>
		</Drawer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userIpt: '',//用户输入的搜索关键词
				url: 'http://106.14.151.119:3000/api/search?name=',//数据请求地址
				resultWarpper: false,//控制抽屉开关
				result:'',
				sBtnLoading:false,
				isSelected:false,
        page:1,
			}
		},
		methods: {
			searchCompany: function() {
				if (this.userIpt == '') {
					this.$Modal.error({
						title: '提示',
						content: '您输入的数据为空，请重新输入'
					});
				} else {
					//如果用户输入没问题 那么就发送数据请求
					this.sBtnLoading = true;//按钮变成正在搜索状态
					this.$http.get(this.url + this.userIpt + '&page=' + this.page).then(res => {
						console.log(res.data);
						this.sBtnLoading = false;
						if(res.data.length > 1){
                this.resultWarpper = true;
                console.log("res:",res.data.slice(1))
                this.result = res.data.slice(1);
                //将请求到的所有数据注册到全局变量中
                this.$store.state.$companyList = res.data.slice(1);
                this.$companyList = res.data.slice(1);
            }else{
                this.$Modal.error({
                    title: '提示',
                    content: '暂未搜索到该企业信息，换个关键词看看'
                });
            }
					}, res => {
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
			}
		},
	}
</script>

<style scoped>
	.container {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
		width: 40%;
		z-index: 2;
	}

	.container input {
		display: inline-block;
		margin: 0 auto;
	}

	#searchBtn {
		margin-left: 2px;
	}
</style>
