<template>
	<div>
		<Affix>
		<Menu id="menu_ul" mode="horizontal" :theme="theme" active-name="1">
			<Row type="flex" justify="space-between" class="code-row-bg">
				 <Col span="8">
					 <img id="logo" src="/static/LOGO.png" height="50px" width="auto" @click="goIndex()"/>
				 </Col>
				 <Col span="5">
					 <MenuItem v-for="item in NavItem" :key="NavItem.id" name="item.id">
						 <Icon :type="item.iconType" />
						 {{item.itemName}}
					 </MenuItem>
				 </Col>
			</Row>

		</Menu>
		</Affix>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				theme: 'light',//light,dark,primary
				NavItem:[
					{
						id:1,
						itemName:'首页',
						url:'/home',
						iconType:'md-home'
					},
					{
						id:2,
						itemName:'大屏数据可视化',
						url:'',
						iconType:'md-analytics'
					}
				]
			}
		},
		methods:{
			goIndex:()=>{
				location.href="/home"
			}
		}
	}
</script>

<style>
	Menu{
		z-index: 3;
	}
#logo{
	margin-left: 60px;
	margin-top: 4px;
	cursor: pointer;
}

</style>
