/*
 *  月数柱状体图形展示
*/
var myChart9 = echarts.init(document.getElementById('comprehensiveMonth'));
var arr1 = ['1','2','3','4','5','6','7','8','9','10','11','12']; //初始化数组
var arr2 = []; // 追加数组
var arrtmp = []; //转换变量
var startBlog=1; // 为0的时候是不允许追加  大于0 的时候可以追加
var endBlog=0;
var dateNum = arr1.length;
var yLength = 12; //年长长度
var hYear = 6; //半年长度
var initValue = 3;   //初值

myChart9.on("dataZoom",function(params){
    var startValue = myChart9.getModel().option.dataZoom[0].startValue;
    var endValue = myChart9.getModel().option.dataZoom[0].endValue;
    //获得起止位置百分比
    var startPercent = myChart9.getModel().option.dataZoom[0].start;
    var endPercent = myChart9.getModel().option.dataZoom[0].end;

    console.log(startValue,endValue,startBlog,endBlog);

    if(arr1.length < yLength){
        option.xAxis.data = arr1;
        myChart9.setOption(option);
        startBlog = 0;
        endBlog = 0;
    }


    if(startBlog > 0 && startValue == 0){
        arr2 = [];
        arr2=['1','2','3','4','5','6'];
        if(arr1.length <= 75){
            arrtmp = arr2.concat(arr1);
            arr1 = arrtmp;
            option.dataZoom[0].startValue =  initValue;
            option.dataZoom[0].endValue = initValue + 3;
        }else{
            arrtmp = arr1.splice(arr1.length - hYear , hYear);
            console.log("endBlog1_2  "+ arr1.length , arrtmp);
            arr1 = arr2.concat(arrtmp);
            option.dataZoom[0].startValue =  initValue;
            option.dataZoom[0].endValue = initValue + 3;
            endBlog = 1;
        }
        if(arr2.length < hYear){ 	//当数组2小于指定的元素个数时，不允许往数组前追加
            startBlog = 0;
        }
        option.xAxis.data = arr1;
        myChart9.setOption(option);
    }
    if(endBlog > 0 && endValue == arr1.length-1){
        arr2 = [];
        arr2=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
        console.log("endBlog2");
        if(arr1.length <= 75){
            arrtmp = arr1.concat(arr2);
            arr1 = arrtmp;
            option.dataZoom[0].startValue =  arr1.length - (initValue+3) ;
            option.dataZoom[0].endValue = arr1.length - initValue;
            console.log("endBlog2_1  "+ arr1.length);
        }else{
            arrtmp = arr1.splice(0, hYear);
            arr1 = arrtmp.concat(arr2);
            option.dataZoom[0].startValue =  arr1.length - (initValue+3) ;
            option.dataZoom[0].endValue = arr1.length - initValue;
            console.log("endBlog2_2  "+ arr1.length);
        }
        if(arr2.length < hYear){ 	//当数组2小于指定的元素个数时，不允许往数组前追加
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
            startValue: dateNum - 4,
            endValue: dateNum - 1,
            zoomLock:true,
            borderColor:"#023f98",
            bottom:'0',
            zoomOnMouseWheel:false,
            moveOnMouseMove:false,
            throttle:100,
        },
        {
            type: 'inside',
            startValue: dateNum - 4,
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
            data:[352,465,235,235,124,236,356,135,425,325,100,118],
            barWidth:30,
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
            data:[105,186,362,455,345,214,164,234,235,211,124,113],
            barWidth:30,
        },
    ]
};
myChart9.setOption(option);
