/**
 * 计步统计日
 **/

var myChart15 = echarts.init(document.getElementById('stepCountDay'));
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
        name:'步数(平均)',
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
        data: [2793, 5794, 3672, 3985, 6347, 2392, 5546,3800,7985,3485,1724,3840],
        color:'#cd0892',
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

myChart15.setOption(option);