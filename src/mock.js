import Mock from 'mockjs';


var mockData = Mock.Random.date();
const data = Mock.mock('/msg1',mockData)

export default {data};
