/**
 * 血压曲线
 **/
var myChart5 = echarts.init(document.getElementById('bloodPressureDay'));
option = {
    tooltip: {
        trigger: 'axis', 
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
        data:['收缩压','舒张压']
    },
    grid: {
        left: '3%',
        right: '5%',
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
        axisLine:{
            lineStyle:{
                color:'#023f98',
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
            data:['90','80','100','60','110','90','80','100','60','110','90','80','100','60','110','90','80','100','60','110','90','80','100','60'],
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
            data:['100','60','90','90','30','100','60','110','90','80','100','60','110','90','80','100','60','110','90','80','100','60','90','80'],
        }
    ]
};
myChart5.setOption(option);