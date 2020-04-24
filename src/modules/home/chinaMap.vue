<template>
  <div>
    <!-- 初始化echarts需要有个宽高的盒子 -->
    <div ref='mapbox' class='china'></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
// eslint-disable-next-line no-unused-vars
import jsonp from 'jsonp'
const option = { 
    title: {
        text: '中国疫情图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
      },
    roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
          'china': true
        }
      },
    series: [
        {
          name: '累计确诊数',
          type: 'map',
          mapType: 'china',
          roam: false,
          label: {
            show: true,
            color: 'rgb(249, 249, 249)'
          },
          data: []
        }
      ],
    visualMap: {
        type: 'piecewise',
        pieces: [
          { min: 10000, label: '大于等于1000人' },
          { min: 1000, max: 9999, label: '确诊1000-9999人' },
          { min: 100, max: 999, label: '确诊100-999人' },
          { min: 10, max: 99, label: '确诊10-99人' },
          { min: 1, max: 9, label: '确诊1-9人'},
        ],
        inRange:{
          symbol:'rect',
          color:['#ffc0b1','#9c0505']
        }
        // color: ['#E0022B', '#E09107', '#A3E00B']
      },
  
    data:[],//用来展示后台给的数据
    
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      }
   
};

export default {
  mounted(){
    this.getData();
    this.mychart = echarts.init(this.$refs.mapbox);
    this.setOption(option);
  },
  methods:{
    getData(){
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
        if(!err){
          //代表请求数据成功
          console.log(data);
          // eslint-disable-next-line no-unused-vars
          let list = data.data.list.map(item=>({name:item.name,value:item.value}))
          option.series[0].data = list;
          this.mychart.setOption(option)
          //这行代码能执行的前提是 Dom已渲染完成，只有Dom渲染完成才能执行echarts初始化
        }
      })
    },
    setOption() {}
  }
}
//https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427
</script>
<style scoped>
  .china{
    height:600px;
    width:600px;
    float:left;
  }
</style>
