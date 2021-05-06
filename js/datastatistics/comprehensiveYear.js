/*
 *  月数柱状体图形展示
 */
var myChart9 = echarts.init(document.getElementById('comprehensiveYear'));
var arr1 = ['2016','2017','2018','2019']; //初始化数组
var arr2 = []; // 追加数组
var arrtmp = []; //转换变量
var startBlog=1; // 为0的时候是不允许追加  大于0 的时候可以追加
var endBlog=0;
var dateNum = arr1.length;
var fYearLength = 4; //四年长度
var tYearLength = 2; //两年长度
var initValue = 1;   //初值

myChart9.on("dataZoom",function(params){
    var startValue = myChart9.getModel().option.dataZoom[0].startValue;
    var endValue = myChart9.getModel().option.dataZoom[0].endValue;
    //获得起止位置百分比
    var startPercent = myChart9.getModel().option.dataZoom[0].start;
    var endPercent = myChart9.getModel().option.dataZoom[0].end;

    console.log(startValue,endValue,startBlog,endBlog);

    if(arr1.length < fYearLength){
        option.xAxis.data = arr1;
        myChart9.setOption(option);
        startBlog = 0;
        endBlog = 0;
    }


    if(startBlog > 0 && startValue == 0){
        arr2 = [];
        arr2=['2014','2015'];
        if(arr1.length <= 75){
            arrtmp = arr2.concat(arr1);
            arr1 = arrtmp;
            console.log(arr1.length);
            option.dataZoom[0].startValue =  initValue;
            option.dataZoom[0].endValue = initValue +1;
        }else{
            arrtmp = arr1.splice(arr1.length - tYearLength , tYearLength);
            console.log("endBlog1_2  "+ arr1.length , arrtmp);
            arr1 = arr2.concat(arrtmp);
            option.dataZoom[0].startValue =  initValue;
            option.dataZoom[0].endValue = initValue +1;
            endBlog = 1;
        }
        if(arr2.length < tYearLength){ 	//当数组2小于指定的元素个数时，不允许往数组前追加
            startBlog = 0;
        }
        option.xAxis.data = arr1;
        myChart9.setOption(option);
    }
    if(endBlog > 0 && endValue == arr1.length-1){
        arr2 = [];
        arr2=['2014','2015'];
        console.log("endBlog2");
        if(arr1.length <= 75){
            arrtmp = arr1.concat(arr2);
            arr1 = arrtmp;
            option.dataZoom[0].startValue =  arr1.length - (initValue+3) ;
            option.dataZoom[0].endValue = arr1.length - initValue;
            console.log("endBlog2_1  "+ arr1.length);
        }else{
            arrtmp = arr1.splice(0, tYearLength);
            arr1 = arrtmp.concat(arr2);
            option.dataZoom[0].startValue =  arr1.length - (initValue+3) ;
            option.dataZoom[0].endValue = arr1.length - initValue;
            console.log("endBlog2_2  "+ arr1.length);
        }
        if(arr2.length < tYearLength){ 	//当数组2小于指定的元素个数时，不允许往数组前追加
            endBlog = 0;
        }

        option.xAxis.data = arr1;
        myChart9.setOption(option);
    }

});
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
        data:arr1
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
            startValue: dateNum - 2,
            endValue: dateNum - 1,
            zoomLock:true,
            borderColor:"#023f98",
            bottom:'0',
            zoomOnMouseWheel:false,
            moveOnMouseMove:false,
            throttle:100,
            textStyle:{
                color:'#fff'
            }
        },
        {
            type: 'inside',
            startValue: dateNum - 2,
            endValue: dateNum - 1,
            borderColor:'#023f98',
            zoomOnMouseWheel:false,
            moveOnMouseMove:false,
            throttle:100,
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
            data:[352,465,352,465],
            barWidth:40,
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
            data:[105,186,352,465],
            barWidth:40,
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
            data:[324,164,352,465],
            barWidth:40,
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
            data:[234,235,352,465],
            barWidth:40,
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
            data:[186,320,352,465],
            barWidth:40,
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
            data:[184,320,352,465],
            barWidth:40,
        }
    ]
};
myChart9.setOption(option);
