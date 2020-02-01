import Mock from 'mockjs';

var mockData = {}

var time = Mock.Random.date() //随机日期
var dateLineMock = [
	{
		date: Mock.Random.date(),
		pos: '担任' + Mock.Random.ctitle(3,10) + '工作'
	},{
		date: Mock.Random.date(),
		pos: '担任' + Mock.Random.ctitle(3,10) + '工作'
	},{
		date: Mock.Random.date(),
		pos: '担任' + Mock.Random.ctitle(3,10) + '工作'
	},{
		date: Mock.Random.date(),
		pos: '担任' + Mock.Random.ctitle(3,10) + '工作'
	},{
		date: Mock.Random.date(),
		pos: '担任' + Mock.Random.ctitle(3,10) + '工作'
	},{
		date: Mock.Random.date(),
		pos: '担任' + Mock.Random.ctitle(3,10) + '工作'
	},
	
]//随机时间线
var cparagraph = Mock.Random.cparagraph(40,60) //随机中文文段
var ctitle = Mock.Random.ctitle(3,6) //随机中文标题
var cword = Mock.Random.cword(3,6) //随机中文标题
var integer = Mock.Random.integer(50,100) //随机整数
var float = Mock.Random.float(50,100) //随机浮点数

var company = cword + '有限责任公司' //随机公司
var cname = Mock.Random.cname() //随机人名
var workPos = '担任' + ctitle + '工作' //随机职位

mockData.time = time
mockData.dataLineMock = dateLineMock
mockData.cparagraph = cparagraph
mockData.cname = cname
mockData.company = company
mockData.workPos = workPos
mockData.ctitle = ctitle
mockData.integer = integer
mockData.float = float

var mockDataHandle = Mock.mock('/mockDataHandle',mockData)
export default {mockDataHandle};
