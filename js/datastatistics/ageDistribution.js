/**
 *  年龄分布
 **/

var myChart3 = echarts.init(document.getElementById('ageDistribution'));
option = {
    tooltip : {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show:true,
        type:'plain',
        top:0,
        right:-5,
        itemGap:8,
        icon:'rect',
        textStyle:{
            fontSize:12,
            color:'#00fcff',
        },
        itemWidth:4,
        itemHeight:4,
        orient:'vertical',
        data:['20岁以下','21~30岁','31~40岁','41~50岁','51~60岁','61~70岁','71~80岁','80岁以上'],
    },
    series : [
        {
            type: 'pie',
            radius : '60%',
            center: ['40%', '60%'],
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
            label:{
                normal:{
                    show:true,
                    formatter:'{d}%',
                }
            },
            labelLine:{
                show:true,
                smooth:0.1,
                length:5,
                length2:5
            },
            data:[
               {
                value:15,
                name:'20岁以下',
                itemStyle:{
                    normal:{
                        color:'#01cfd9',   
                    }
                }
               },
               {
                value:15,
                name:'21~30岁',
                itemStyle:{
                    normal:{
                        color:'#0166d9',   
                    }
                }
               },
                {
                    value:1,
                    name:'31~40岁',
                    itemStyle:{
                        normal:{
                            color:'#35b70d',
                        }
                    }
                },
                {
                    value:28,
                    name:'41~50岁',
                    itemStyle:{
                        normal:{
                            color:'#cd9a0d',
                        }
                    }
                },

                {
                    value:5,
                    name:'51~60岁',
                    itemStyle:{
                        normal:{
                            color:'#cd0a95',
                        }
                    }
                },
                {
                    value:20,
                    name:'61~70岁',
                    itemStyle:{
                        normal:{
                            color:'#018d51',
                        }
                    }
                },
               {
                value:10,
                name:'71~80岁',
                itemStyle:{
                    normal:{
                        color:'#cd7327',   
                    }
                }
               },
               {
                value:1,
                name:'80岁以上',
                itemStyle:{
                    normal:{
                        color:'#ba0813',   
                    }
                }
               },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart3.setOption(option);