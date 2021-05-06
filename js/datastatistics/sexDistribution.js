/**
 *  性别分布
 **/

var myChart4 = echarts.init(document.getElementById('sexDistribution'));
option = {
    tooltip : {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
    {
        type: 'pie',
        radius : '70%',
        center: ['52%', '45%'],
        label:{
        normal:{
            position:'inner'
        }
    },
    labelLine:{
        normal:{
            show:false
        }
    },
    data:[
        {
            value:250, 
            name:'3620(人)\n(25%)',
            itemStyle:{
                normal:{
                    color:'#cc1bb3',   
                }
            }
        },
        {
            value:750, 
            name:'5899(人)\n(75%)',
            itemStyle:{
                normal:{
                    color:'#0172d9',   
                }
            }
        }
    ],
        itemStyle: {
            emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
]
};
myChart4.setOption(option);