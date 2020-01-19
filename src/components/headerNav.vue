<template>
	<div>
		<Affix>
      <Menu id="menu_ul" mode="horizontal" :theme="theme" active-name="1" width="auto">
        <Row type="flex" justify="space-between" class="code-row-bg">
           <Col span="8">
             <img id="logo" src="/static/LOGO.png" height="50px" width="auto" @click="goIndex()"/>
           </Col>
           <Col span="5">
             <MenuItem name="1">
               <Icon type="md-home" />
               首页
             </MenuItem>
             <MenuItem name="2" @click.native="changeNavIndex">
               <Icon type="md-analytics" />
               大屏数据可视化
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
        navIndex:1,    //默认导航页

			}
		},
		methods:{
			goIndex:()=>{
				location.href="/home"
			},
      changeNavIndex:()=>{

      },
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
