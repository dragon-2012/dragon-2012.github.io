/**
 * 睡眠曲线 周
 **/
var myChart7 = echarts.init(document.getElementById('sleepHistoryWeek'));
option = {
    tooltip: {
        trigger: 'axis', 
    },
    legend: {
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
        data:['浅眠','深眠'],
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '0',
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
                color:'#023f98',
                /*width:1,
                type:'solid'*/
            }
        },
        axisLabel:{
            fontSize:12,
            color:'#00fcff',
        },
        data:['10/30','11/01','02',"03","04","05","06"],
    },
    yAxis: {
        type: 'value',
        name:'(单位:小时)',
        nameTextStyle:{
            color:'#00fcff',
            fontSize:12,
        },
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            formatter:'{value}',
            color:'#00fcff',
            fontSize:12,
        },
        splitLine:{
            lineStyle:false,
        },
    },
    series: [
        /*{
            name:'清醒',
            type:'line',
            areaStyle:{
                type:'true',
                normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset:0,color:'#3d7035'},{offset:1,color:'#3d7035'}],false),opacity:0.8}
            },
            color:'#cc9f13',
            symbolSize:4,
            smooth:true,
            data:['70','','','','60','50','30','','','','','80'],
        },*/
       {
            name:'浅眠',
            type:'line',
            /*areaStyle:{
                type:'true',
                normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset:0,color:'#404b47'},{offset:1,color:'#404b47'}],false),opacity:0.8}
            },*/
            symbolSize:4,
            smooth:true,
            color:['#a049db'],
            data:['4','6','5','3','2','3','5'],
        },
       {
            name:'深眠',
            type:'line',
            /*areaStyle:{
                type:'true',
                normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset:0,color:'#404b47'},{offset:1,color:'#404b47'}],false),opacity:0.8}
            },*/
            symbolSize:4,
            smooth:true,
            color:['#005edf'],
            data:['2','4','6','5','4','2','4'],
        }
    ]
};
myChart7.setOption(option);