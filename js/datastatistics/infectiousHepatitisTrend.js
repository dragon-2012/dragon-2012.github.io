/**
 * 传染性肝炎疾病趋势
 **/
var myChart1= echarts.init(document.getElementById('infectiousHepatitisTrend'));
option = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '2%',
        right: '6%',
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
        name:'人数',
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
            name:'传染性肝炎人数',
            type:'line',
            symbolSize:4,
            color:['#cd552e'],
            smooth:true,
            type:'line',
            data:[44,88,48,65,38,75,44,58,38,58,65,38]
        },
    ]
};
myChart1.setOption(option);