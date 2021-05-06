/**
 * 每日运动人数
 **/

var myChart4 = echarts.init(document.getElementById('sportHistoryDay'));
    option = {
    grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        containLabel:true
    },
    xAxis: {
        type: 'category',
        data: ['0:00', '06:00', '12:00', '18:00', '24:00'],
        axisLine:{
            lineStyle:{
                color:'#305ea2',
            }
        },
        axisLabel:{
            fontSize:12,
            color:'#00fcff',
        },
    },
    yAxis: {
        show:false,
        /*type: 'value',
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
            show:false,
            formatter:'{value}',
            color:'#00fcff',
            fontSize:14,
        },
        splitLine:{
            lineStyle:{
                color:'#023f98',
                type:'dotted',
            }
        },*/
    },
    series: [{
        data: [1247, 2417, 1827, 1985, 1985],
        color:'#e6b00e',
        type: 'bar',
        itemStyle:{
            normal:{
                barBorderRadius: [10, 10, 10, 10],
                label:{
                    show:true,
                    position:'top',
                    color:'#fff'
                },
            }
        },
        barWidth:8,
    }]
};

myChart4.setOption(option);