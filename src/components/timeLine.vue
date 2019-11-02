<template>
	<div class="timeContainer">
    <div v-if="this.$store.state.$company.name">
		<Timeline>
			<TimelineItem color="green">
				<Icon type="ios-trophy" slot="dot"></Icon>
				<h1>公司成立</h1>
			</TimelineItem>
			<TimelineItem>
				<p class="time">2015年</p>
				<p class="tcontent">2015年江西省才华无限科技有限公司在南昌瑶湖地区紫阳大道99号成立，公司创始人刘威杰发表了公司成立感言</p>
			</TimelineItem>
			<TimelineItem>
				<p class="time">2016年</p>
				<p class="tcontent">2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，
				公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言</p>
			</TimelineItem>
			<TimelineItem>
				<p class="time">2016年</p>
				<p class="tcontent">2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言</p>
			</TimelineItem>
			<TimelineItem>
				<p class="time">2016年</p>
				<p class="tcontent">2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言</p>
			</TimelineItem>
			<TimelineItem>
				<p class="time">2016年</p>
				<p class="tcontent">2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言
				2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言
				2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言</p>
			</TimelineItem>
			<TimelineItem>
				<p class="time">2016年</p>
				<p class="tcontent">2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言
				溪湖北大道88号成立分公司，公司创始人刘威杰与总经理</p>
			</TimelineItem>
			<TimelineItem>
				<p class="time">2016年</p>
				<p class="tcontent">2016年江西省才华无限科技有限公司在南昌瑶湖地区艾溪湖北大道88号成立分公司，公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言
				公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言公司创始人刘威杰与总经理刘锡峰发表了分公司成立感言开工大吉！</p>
			</TimelineItem>
		</Timeline>
	</div>
    <div v-else class="pleaseSearchTip">
      <h1>请先查找企业</h1>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
	.timeContainer {
		width: 100%;
		height: 100%;
		padding: 20px;
	}

	.time {
		font-size: 18px;
		font-weight: bold;
	}

	.tcontent {
		padding-left: 5px;
		min-height: 60px;
	}
  .pleaseSearchTip{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 450px;
  }
  .pleaseSearchTip h1{
    opacity: 0.2;
    font-weight: bolder;
  }
</style>
