/**
 *  THRA每月检测人数
 **/

var myChart9 = echarts.init(document.getElementById('comprehensiveMonth'));
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    /*dataset:{
        source:[
            ['product','手环佩戴人数','本月新增人数','当日活跃人数','注册人数','THRA检测人数','人数'],
            ['2018-1月', 43, 85, 93, 85, 93,100],
            ['2018-2月',43, 85, 93, 85, 93,100],
            ['2018-3月',43, 85, 93, 85, 93,100],
            ['2018-4月',43, 85, 93, 85, 93,100],
            ['2018-5月', 43, 85, 93, 85, 93,100],
            ['2018-6月',43, 85, 93, 85, 93,100],
            ['2018-7月',43, 85, 93, 85, 93,100],
            ['2018-8月',43, 85, 93, 85, 93,100],
            ['2018-9月', 43, 85, 93, 85, 93,100],
            ['2018-10月',43, 85, 93, 85, 93,100],
            ['2018-11月',43, 85, 93, 85, 93,100],
            ['2018-12月',43, 85, 93, 85, 93,100],
            ['2019-1月', 43, 85, 93, 85, 93,100],
            ['2019-2月',43, 85, 93, 85, 93,100],
            ['2019-3月',43, 85, 93, 85, 93,100],
            ['2019-4月',43, 85, 93, 85, 93,100],
            ['2019-5月', 43, 85, 93, 85, 93,100],
            ['2019-6月',43, 85, 93, 85, 93,100],
            ['2019-7月',43, 85, 93, 85, 93,100],
            ['2019-8月',43, 85, 93, 85, 93,100],
            ['2019-9月', 43, 85, 93, 85, 93,100],
            ['2019-10月',43, 85, 93, 85, 93,100],
            ['2019-11月',43, 85, 93, 85, 93,100],
            ['2019-12月',43, 85, 93, 85, 93,100]
            ['2018-1月', 43, 85, 93, 85, 93,100],
            ['2月',43, 85, 93, 85, 93,100],
            ['3月',43, 85, 93, 85, 93,100],
            ['4月',43, 85, 93, 85, 93,100],
            ['5月', 43, 85, 93, 85, 93,100],
            ['6月',43, 85, 93, 85, 93,100],
            ['7月',43, 85, 93, 85, 93,100],
            ['8月',43, 85, 93, 85, 93,100],
            ['9月', 43, 85, 93, 85, 93,100],
            ['10月',43, 85, 93, 85, 93,100],
            ['11月',43, 85, 93, 85, 93,100],
            ['12月',43, 85, 93, 85, 93,100],
            ['2019-1月', 43, 85, 93, 85, 93,100],
            ['2月',43, 85, 93, 85, 93,100],
            ['3月',43, 85, 93, 85, 93,100],
            ['4月',43, 85, 93, 85, 93,100],
            ['5月', 43, 85, 93, 85, 93,100]
        ]
    },*/
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
        data:['2018-1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月','2019-1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
                    startValue: 10,
                    endValue: 14,
                    zoomLock:true, 
                    borderColor:"#023f98",                        
                    bottom:'0'
                },
                {
                    type: 'inside',
                    startValue: 10,
                    endValue: 14,
                    borderColor:'#023f98',             
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
            data:[1000,1180,3520,4657,2354,2354,1246,2367,3569,1356,4215,3254,1000,1180,3520,4657,2354,2354,1246,2367,3569,1356,4215,3254]
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
            data:[1050,1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,1365,1050,1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,1365]
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
            data:[3214,1654,2634,2365,2111,1324,1365,1050,1864,3620,4555,3845,1050,1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,1365]
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
            data:[2634,2365,2111,1324,1365,1050,1864,1000,1180,3520,4657,2364,1050,1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,1365]
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
            data:[1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,2634,2365,1050,1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,1365]
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
            color:['#cd9b0a'],
            data:[1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,2634,2365,1050,1864,3620,4555,3845,3214,1654,2634,2365,2111,1324,1365]
        }
    ]
};
/*    series: [
        
        {
            type: 'bar',
            color:'#0063eb',
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
        },
        {
            type: 'bar',
            color:'#cd0892',
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
        },
        {
            type: 'bar',
            color:'#2cb50a',
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
        },
        {
            type: 'bar',
            color:'#cd5124',
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
        },
        {
            type: 'bar',
            color:'#cd9b0a',
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'top',
                        color:'#fff',
                    },
                }
            },
        },
        {
            type: 'bar',
            color:'red',
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
        }
    ]

};*/
myChart9.setOption(option);