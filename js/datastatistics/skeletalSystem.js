/**
 *  骨骼系统
 **/

var myChart9 = echarts.init(document.getElementById('skeletalSystem'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            type: 'pie',
            radius : '70%',
            center: ['55%', '55%'],
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
                show:true,
                smooth:0.1,
                length:10,
                length2:5
            },
            data:[
               {
                value:20,
                name:'20.7%',
                itemStyle:{
                    normal:{
                        color:'#cd0a95',   
                    }
                }
               },
               {
                value:15,
                name:'14.7%',
                itemStyle:{
                    normal:{
                        color:'#015cd9',   
                    }
                }
               },
               {
                value:10,
                name:'5.1%',
                itemStyle:{
                    normal:{
                        color:'#05924d',   
                    }
                }
               },
               {
                value:15,
                name:'12.5%',
                itemStyle:{
                    normal:{
                        color:'#a147d5',   
                    }
                }
               },
               {
                value:20,
                name:'25.6%',
                itemStyle:{
                    normal:{
                        color:'#cd9d0d',   
                    }
                }
               },
               {
                value:20,
                name:'21.4%',
                itemStyle:{
                    normal:{
                        color:'#c04f29',   
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
myChart9.setOption(option);