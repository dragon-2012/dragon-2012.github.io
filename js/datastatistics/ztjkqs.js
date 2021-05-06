/**
 *  总体健康趋势
 **/

var myChart20 = echarts.init(document.getElementById('ztjkqs'));
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top:45,
        right:85,
        itemGap:20,
        icon:'rect',
        textStyle:{
            fontSize:14,
            color:'#00fcff',
        },
        itemWidth:24,
        itemHeight:4,
        orient:'vertical',
        data:['内分泌系统','神经系统','免疫系统','呼吸系统','心血管系统','消化系统','泌尿生殖系统','骨骼系统']
    },
    grid: {
        left: '2%',
        right: '18%',
        top:'15%',
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
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
        name:'分数',
        nameTextStyle:{
            color:'#00fcff',
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
            name:'内分泌系统',
            type:'line',
            symbolSize:4,
            color:['#056bfe'],
            smooth:true,
            data:[10,80,35,46,23,54,10,37,69,56,42,54]
        },
        {
            name:'神经系统',
            type:'line',
            symbolSize:4,
            color:['#fa03a9'],
            smooth:true,
            data:[50,86,36,55,38,14,54,24,23,21,14,65]
        },
        {
            name:'免疫系统',
            type:'line',
            symbolSize:4,
            color:['#f95b1a'],
            smooth:true,
            data:[32,14,26,65,11,24,15,50,18,20,45,38]
        },
        {
            name:'呼吸系统',
            type:'line',
            symbolSize:4,
            color:['#cd5124'],
            smooth:true,
            data:[26,25,21,13,15,15,64,10,80,52,57,64]
        },
        {
            name:'心血管系统',
            type:'line',
            symbolSize:4,
            color:['#fe1e1e'],
            smooth:true,
            data:[64,20,55,45,14,54,24,25,11,24,34,25]
        },
        {
            name:'消化系统',
            type:'line',
            symbolSize:4,
            color:['#c550f6'],
            smooth:true,
            data:[64,20,55,45,50,54,24,88,18,24,34,25]
        },
        {
            name:'泌尿生殖系统',
            type:'line',
            symbolSize:4,
            color:['#02fffc'],
            smooth:true,
            data:[30,20,56,80,14,66,24,55,11,24,77,25]
        },
        {
            name:'骨骼系统',
            type:'line',
            symbolSize:4,
            color:['#fbc002'],
            data:[82,21,54,51,14,54,22,25,22,24,34,25]
        }
    ]
};
myChart20.setOption(option);