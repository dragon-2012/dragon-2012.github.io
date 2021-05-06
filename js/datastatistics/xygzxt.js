/**
 * 需要关注的系统
 **/

var myChart21 = echarts.init(document.getElementById('xygzxt'));
    option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel:true
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            fontSize:12,
            color:'#00fcff',
        },
    },
    yAxis: {
        type: 'value',
        name:'等级',
      /*  show:false,*/
        nameTextStyle:{
            color:'#70dce0',
            fontSize:14,
        },
        axisLine:{
            lineStyle:{
                color:'#023f98',
            }
        },
        axisLabel:{
            formatter:'{value}',
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
    series: [{
        color:'#cd5125',
        type: 'bar',
        itemStyle:{
            /*normal:{
                label:{
                    show:true,
                    position:'top',
                    color:'#fff',
                },
            }*/
             normal: {
                // 随机显示
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
              
                // 定制显示（按顺序）
                color: function(params) { 
                    var colorList = ['#0160e2','#cd1c26','#cd0991','#cd5228','#a247d3', '#cc9c0a','#00d3dc',
                    '#2cb50f','#0160e0','#cd0893','#cf5128 ','#ce9b0e'
                    ]; 
                    return colorList[params.dataIndex] 
                },

                label:{
                    show:true,
                    position:'top',
                    formatter:function(params){
                        var nameList = ['内分泌系统','心血管系统','神经系统','呼吸系统','消化系统', '骨骼系统','泌尿生殖系统',
                '免疫系统','内分泌系统','神经系统','呼吸系统','骨骼系统']; 
                    return nameList[params.dataIndex] 
                    },
                },
                
            },
        },
        data: [10, 20, 30, 40, 50, 60, 70,80,90,100,45,82],
        barWidth:20,
    }]
};

myChart21.setOption(option);