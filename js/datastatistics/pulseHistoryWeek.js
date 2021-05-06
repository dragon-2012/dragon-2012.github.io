/**
 * 晨脉曲线 周
 **/
var myChart9 = echarts.init(document.getElementById('pulseHistoryWeek'));
option = {
    tooltip: {
        trigger: 'axis', 
    },
   /* legend: {
        top:28,
        left:80,
        itemGap:10,
        icon:'rect',
        textStyle:{
            fontSize:12,
            color:'#00fcff',
        },
        itemWidth:10,
        itemHeight:10,
        orient:'horizontal',
        data:['清醒','浅眠','深眠'],
    },*/
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
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
        axisLine:{
            lineStyle:{
                color:'#305da2',
                width:1,
                type:'solid'
            }
        },
        axisLabel:{
            fontSize:12,
            color:'#00fcff',
        },
        data:['10/01','02','03',"04","05","06","07"],
    },
    yAxis: {
        type: 'value',
        name:'(单位:次/分钟)',
        nameTextStyle:{
            color:'#00fcff',
            fontSize:12,
        },
        axisLine:{
            lineStyle:{
                color:'#305da2',
            }
        },
        axisLabel:{
            formatter:'{value}',
            color:'#00fcff',
            fontSize:12,
        },
        splitLine:{
            lineStyle:{
                color:'#305da2',
                type:'solid',
            }
        },
    },
    series: [
        {
            name:'晨脉次数',
            type:'line',
            color:'#febd03',
            symbolSize:4,
            smooth:true,
            data:['58','59','67','65','55','50','57'],
        },
    ]
};
myChart9.setOption(option);