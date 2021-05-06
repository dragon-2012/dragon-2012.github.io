/**
 *  THRA每月检测人数
 **/

var myChart9 = echarts.init(document.getElementById('comprehensiveDay'));
function myChart9() {
    console.log(option.series[0].data);
}
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
        data:['手环佩戴人数','本月新增人数','当日活跃人数','注册人数','BHS检测人数','BHS检测人次']
    },
    grid: {
        left: '3%',
        right: '15%',
        top:'15%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            fontSize:14,
            color:'#00fcff',
        },
        axisTick: {
                alignWithLabel: true
        },
        data:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
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
    dataZoom : [
                {
                    type: 'slider',
                    show: true,
                    realtime:true,
                    startValue: 15,
                    endValue: 20,
                    zoomLock:true, 
                    borderColor:"#023f98",                        
                    bottom:'0',
                    zoomOnMouseWheel:false,
                    moveOnMouseMove:false
                },
                {
                    type: 'inside',
                    startValue: 10,
                    endValue: 13,
                    borderColor:'#023f98',
                    zoomOnMouseWheel:false,
                    moveOnMouseMove:false
                },
            ],

    series: [
        {
            name:'手环佩戴人数',
            type:'bar',
            //显示人数，如果你不需要可以删掉
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
            color:['#0063eb'],
            smooth:false,
            data:[100,118,352,465,235,235,124,236,356,135,425,325,100,118,352,465,234,234,146,267,369,156,215,254],
            barWidth:20,
        },
        {
            name:'本月新增人数',
            type:'bar',
            //显示人数，如果你不需要可以删掉
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
            symbolSize:4,
            color:['#cd0892'],
            data:[105,186,362,455,345,214,164,234,235,211,124,135,100,184,320,455,345,214,154,234,265,211,124,135],
            barWidth:20,
        },
        {
            name:'当日活跃人数',
            type:'bar',
            //显示人数，如果你不需要可以删掉
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
            symbolSize:4,
            color:['#2cb50a'],
            data:[324,164,234,235,211,134,135,150,184,360,455,345,150,184,320,455,345,314,154,234,265,211,124,165],
             barWidth:20,
        },
        {
            name:'注册人数',
            type:'bar',
            //显示人数，如果你不需要可以删掉
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
            symbolSize:4,
            color:['#cd5124'],
            data:[234,235,211,124,135,150,184,100,110,320,457,264,100,164,320,455,385,324,164,264,235,211,134,135],
             barWidth:20,
        },
        {
            name:'BHS检测人数',
            type:'bar',
            //显示人数，如果你不需要可以删掉
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
            symbolSize:4,
            color:['#cd9b0a'],
            data:[186,320,455,385,324,154,264,235,214,124,264,265,100,184,360,455,385,324,164,264,235,211,134,165],
             barWidth:20,
        },
        {
            name:'BHS检测人次',
            type:'bar',
            //显示人数，如果你不需要可以删掉
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
            symbolSize:4,
            color:['#ff0000'],
            data:[184,320,455,345,324,164,263,265,211,124,234,235,100,164,360,455,385,314,154,264,265,211,124,365],
            barWidth:20,
        }
    ]
};
myChart9.setOption(option);


