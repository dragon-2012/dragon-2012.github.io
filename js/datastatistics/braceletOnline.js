/**
 *  手环在线人数
 **/

var myChart6 = echarts.init(document.getElementById('braceletOnline'));
var option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            type:'gauge',  
            radius:'75',             
            min:0,
            max:100,            
            splitNumber: 10,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width:12,
                    color: [[0.2, '#1FAA0A'],[0.8, '#006FD7'],[1, '#CF0896']], 
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 5,   // 每份split细分多少段
                length :5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize:12
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :12,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#fff'
                }
            },
            pointer : {
                width : 5
            },
            title : {
                show:false,
               /*offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                }*/
            },
            detail : {
                show:false,
                /*formatter:'{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontWeight: 'bolder'
                }*/
            },
            data:[{value: 50, name: ''}]
        }
    ]
};


setInterval(function () {
option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
myChart6.setOption(option, true);
},2000);
