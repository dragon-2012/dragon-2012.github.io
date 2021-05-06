/**
 * 心率分布
 **/

var myChart1= echarts.init(document.getElementById('heartRateDistribution'));
option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        top:0,
        right:30,
        itemGap:20,
        icon:'rect',
        textStyle:{
            fontSize:14,
            color:'#00fcff',
        },
        itemWidth:24,
        itemHeight:4,
        orient:'horizontal',
        data:['最低值','最高值'],
    },
    grid: {
        left: '3%',
        right: '4%',
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
        data: ['9月','10月','11月','12月','1月','2月','3月','4月','5月','6月','7月','8月'],
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
        name:'心率值',
        nameTextStyle:{
            color:'#70dce0',
            fontSize:14,
        },
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
            name:'最低值',
            type:'line',
            symbolSize:4,
            color:['#ff6021'],
            smooth:true,
            type:'line',
            data:[44,88,48,65,38,75,44,58,38,58,65,38]
        },
        {
            name:'最高值',
            smooth:true,
            type:'line',
            symbolSize:4,
            color:['#36dd00'],
            data:[130,120,121,125,135,150,155,176,200,120,130,140]
        }
    ]
};
myChart1.setOption(option);