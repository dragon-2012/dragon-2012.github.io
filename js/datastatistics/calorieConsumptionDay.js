/**
 * 卡路里消耗日
 **/

var myChart16 = echarts.init(document.getElementById('calorieConsumptionDay'));
    option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel:true
    },
    xAxis: {
        type: 'category',
        data: ['9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            fontSize:12,
            color:'#00fcff',
        },
    },
    yAxis: {
        type: 'value',
        name:'千卡',
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
    series: [{
        data: [1247, 2417, 1827, 1985, 751, 1633, 1856,2397,7985,3485,1724,3840],
        color:'#a145d2',
        type: 'bar',
        itemStyle:{
            normal:{
                label:{
                    show:true,
                    position:'top',
                    color:'#fff',
                },
            }
        },
        barWidth:20,
    }]
};

myChart16.setOption(option);