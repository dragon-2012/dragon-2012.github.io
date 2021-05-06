/**
 * 睡眠曲线 综合
 **/
var myChart4 = echarts.init(document.getElementById('sleepCurve'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisLine:{
            lineStyle:{
                color:'#023f98',
                width:1,
                type:'solid'
            }
        },
        axisLabel:{
            fontSize:12,
            color:'#00fcff',
        },
        data:['20:00', '21:00', '22:00', '23:00', '24:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'],
    },
    yAxis: {
        type: 'value',
        name:'',
        nameTextStyle:{
            show:false,
        },
        axisLine:{
            show:false,
        },
        axisLabel:{
            show:false,
        },
        splitLine:{
            lineStyle:false,
        },
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: '#cc9f13'
        }, {
            gt: 6,
            lte: 8,
            color: '#a049db'
        }, {
            gt: 8,
            color: '#005edf'
        }]
    },
    series: [
        {
            name:'时长',
            type:'line',
            smooth: true,
            data: [10,20,30,40,55,45,35,25,45,55,15,15,12],
            markArea: {
                show:false
            }
        }
    ]
};

myChart4.setOption(option);