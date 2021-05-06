/**
 *  大华山村排名趋势图--月情况
 **/

var myChart11 = echarts.init(document.getElementById('rankingChartMonth'));
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top:55,
        right:30,
        itemGap:20,
        icon:'rect',
        textStyle:{
            fontSize:14,
            color:'#00fcff',
        },
        itemWidth:24,
        itemHeight:4,
        orient:'vertical',
        data:['总分','易病','体弱','亚健康','普通','平均','良好']
    },
    grid: {
        left: '3%',
        right: '12%',
        bottom: '3%',
        containLabel:true
    },
    toolbox: {
        show:false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            fontSize:14,
            color:'#00fcff',
        },
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            formatter:'{value}',
            color:'#00fcff',
            fontSize:14,
        },
        splitLine:{
            lineStyle:{
                color:'#023f98',
                type:'dotted',
            }
        },
    },
    series: [
        {
            name:'总分',
            type:'line',
            symbolSize:4,
            color:['#0063eb'],
            smooth:true,
            data:[]
        },
        {
            name:'易病',
            type:'line',
            symbolSize:4,
            color:['#cd0893'],
            data:[1,4,2,5,8,4,6,6,5,2,3,6]
        },
        {
            name:'体弱',
            type:'line',
            symbolSize:4,
            color:['#2cb50a'],
            data:[4,6,6,3,1,4,5,10,4,0,5,5]
        },
        {
            name:'亚健康',
            type:'line',
            symbolSize:4,
            color:['#cd5125'],
            data:[2,5,1,4,5,10,4,10,8,2,6,2]
        },
        {
            name:'普通',
            type:'line',
            symbolSize:4,
            color:['#cd9b0a'],
            data:[8,2,5,8,2,6,2,3,2,3,6,3]
        },
        {
            name:'平均',
            type:'line',
            symbolSize:4,
            color:['#a145d2'],
            data:[8,2,5,8,3,1,2,1,8,2,6,3]
        },
        {
            name:'良好',
            type:'line',
            symbolSize:4,
            color:['#cd9b0a'],
            data:[,5,8,4,6,6,5,1,3,6,6,3]
        }
    ]
};
myChart11.setOption(option);