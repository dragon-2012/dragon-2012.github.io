/**
 * 每日运动人数日
 **/

var myChart14 = echarts.init(document.getElementById('sportsNumberDay'));
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
    series: [{
        data: [1247, 2417, 1827, 1985, 1985, 1239, 2579,1856,3985,1485,913,1840],
        color:'#cd5125',
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

myChart14.setOption(option);