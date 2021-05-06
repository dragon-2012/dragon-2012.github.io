/**
 *  THRA每月检测人数
 **/

var myChart9 = echarts.init(document.getElementById('comprehensiveMonth'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer:{
            type:'shadow'
        }
    },
    legend: {
        top:55,
        right:30,
        itemGap:20,
        icon:'rect',
        textStyle:{
            fontSize:14,
            color:'#00fcff',
        },
        itemWidth:24,
        itemHeight:4,
        orient:'vertical',
        data:['手环佩戴人数','本月新增人数','当日活跃人数','注册人数','THRA检测人数']
    },
    grid: {
        left: '3%',
        right: '15%',
        top:'15%',
        bottom: '3%',
        containLabel:true
    },
    toolbox: {
        /*show:false,
        feature: {
            saveAsImage: {}
        }*/
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            formatter:'{value} 人',
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
            name:'手环佩戴人数',
            type:'bar',
            stack:'总人数',
            label:{
                normal:{
                    show:true,
                    position:'insideRight'
                }
            },
            symbolSize:4,
            color:['#0063eb'],
           /* smooth:false,*/
            data:[1000,1180,3520,4657,2354,2354,1246,2367,3569,1356,4215,3254]
        },
        {
            name:'本月新增人数',
            type:'bar',
            symbolSize:4,
            color:['#cd0892'],
            stack:'总人数',
            label:{
                normal:{
                    show:true,
                    position:'insideTop'
                }
            },
            data:[1050,1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,1365]
        },
        {
            name:'当日活跃人数',
            type:'bar',
            symbolSize:4,
            stack:'总人数',
            label:{
                normal:{
                    show:true,
                    position:'insideTop'
                }
            },
            color:['#2cb50a'],
            data:[3214,1654,2634,2365,2111,1324,1365,1050,1864,3620,4555,3845]
        },
        {
            name:'注册人数',
            type:'bar',
            symbolSize:4,
            stack:'总人数',
            label:{
                normal:{
                    show:true,
                    position:'insideTop'
                }
            },
            color:['#cd5124'],
            data:[2634,2365,2111,1324,1365,1050,1864,1000,1180,3520,4657,2364]
        },
        {
            name:'THRA检测人数',
            type:'bar',
            symbolSize:4,
            stack:'总人数',
            label:{
                normal:{
                    show:true,
                    position:'insideTop'
                }
            },
            color:['#cd9b0a'],
            data:[1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,2634,2365]
        }
    ]
};
myChart9.setOption(option);