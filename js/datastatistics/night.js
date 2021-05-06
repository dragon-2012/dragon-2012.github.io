/**
 *  入睡时间
 **/

var myChart14 = echarts.init(document.getElementById('night'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)" 
    },
    series : [
        {
            type: 'pie',
            radius : ['60%','80%'],
            center: ['50%', '50%'],
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:'inner',
                        textStyle:{
                            fontSize:12,
                        }
                    },
                },
            },

            labelLine:{
                show:false,
            },
            data:[
               {
                value:20,
                name:'推荐',
                itemStyle:{
                    normal:{
                        color:'#209326',   
                    }
                }
               },
               {
                value:20,
                name:'较推荐',
                itemStyle:{
                    normal:{
                        color:'#00a6bf',   
                    }
                }
               },
               {
                value:20,
                name:'较不推荐',
                itemStyle:{
                    normal:{
                        color:'#998026',   
                    }
                }
               },
               {
                value:20,
                name:'不推荐',
                itemStyle:{
                    normal:{
                        color:'#99603a',   
                    }
                }
               },
               {
                value:20,
                name:'极不推荐',
                itemStyle:{
                    normal:{
                        color:'#99128c',   
                    }
                }
               },
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
myChart14.setOption(option);