/**
 * 睡眠曲线
 **/
var myChart6 = echarts.init(document.getElementById('bloodPressureHeartDay'));
option = {
    tooltip: {
        trigger: 'axis', 
       /* axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }*/
    },
    legend: {
        top:30,
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
        data:['收缩压','舒张压','心率']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel:true
    },
    toolbox: {
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
        data:['0:00','06:00','12:00',"18:00","24:00"],
    },
    yAxis: {
        type: 'value',
        name:'单位(mmhg)',
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
        {
            name:'收缩压',
            type:'line',
            areaStyle:{
                type:'true',
                normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset:0,color:'#3d7035'},{offset:1,color:'#3d7035'}],false),opacity:0.8}
            },
            color:'#2bb813',
            symbolSize:4,
            smooth:false,
            data:['90','80','100','60','110'],
        },
       {
            name:'舒张压',
            type:'line',
            areaStyle:{
                type:'true',
                normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset:0,color:'#404b47'},{offset:1,color:'#404b47'}],false),opacity:0.8}
            },
            symbolSize:4,
            smooth:false,
            color:['#cc9f13'],
            data:['100','60','90','90','30'],
        },
       {
            name:'心率',
            type:'line',
            areaStyle:{
                type:'true',
                normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset:0,color:'#40234f'},{offset:1,color:'#40234f'}],false),opacity:0.8}
            },
            symbolSize:4,
            smooth:false,
            color:['#c9232d'],
            data:['50','80','60','120','70'],
        }
    ]
};
myChart6.setOption(option);