/**
 *  实时监测js
 **/
var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return params.name
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
option = {
	title: {
            text: ' 79%',
            subtext: '手环数据上传率',
            x: 74,
            y: 'center',
            top: '36%',
            textStyle: {
                fontWeight: 600,
                fontSize: 30,
                color: '#CAA113'
            },
            subtextStyle: {
                fontWeight: 600,
                fontSize: 12,
                color: '#CAA113'
            }
        },
    legend: {
        x : 'center',
        y : 'center',
        data:[
            '手环数据上传率','心率均值','血压均值','睡眠均值','计步均值'        
		],
		bottom:'bottom'
    },
    series : [
        {
            type : 'pie',
			clockWise:false,
			hoverAnimation: false,
			radius : [70, 80],
            center : ['30%', '50%'],
            data : [
                {
					name:'', 
					value:70, 
					itemStyle : {
						 normal: {
							color:'#CAA113',
						}
					},
					label:{
						show:true,
						position:'center',
						fontWeight:'bold',
						fontSize:12
					}
				},
                {
					name:'', 
					value:30, 
					itemStyle : {
						 normal: {
							color:'#04285D',
						}
					},
					label:{
						show:true,
						position:'center'
					}
				}
            ]
        },
		{
            type : 'pie',
			clockWise:true,
			hoverAnimation: false,
			radius : [55, 58],
            center : ['30%', '50%'],
            data : [
				{
					name:'', 
					value:100, 
					itemStyle : {
						 normal: {
							color:'#038899',
						}
					},
					label:{
						show:true,
						position:'center'
					}
				}
            ]
        },
        {
            type : 'pie',
			clockWise:true,
			hoverAnimation: false,
            center : ['60%', '30%'],
			radius : [25, 30],
            itemStyle : labelFromatter,
            data : [
                {
					//name:'心率均值', 
					name:'85', 
					value:100, 
					itemStyle : {
						 normal: {
							color:'#0194D9',
						}
					},
					label:{
						show:true,
						position:'center',
						fontWeight:"bold",
						fontSize:16,
						color:"#fff"
					}
				}
            ]
        },
        {
            type : 'pie',
			clockWise:true,
			hoverAnimation: false,
            center : ['60%', '70%'],
            radius : [25, 30],
            itemStyle : labelFromatter,
            data : [
                {
					//name:'血压均值', 
					name:'7.5',
					value:100, 
					itemStyle : {
						 normal: {
							color:'#28B013',
						}
					},
					label:{
						show:true,
						position:'center',
						fontWeight:"bold",
						fontSize:16,
						color:"#fff"
					}
				}
            ]
        },
        {
            type : 'pie',
			clockWise:true,
			hoverAnimation: false,
            center : ['80%', '30%'],
            radius : [25, 30],
            itemStyle : labelFromatter,
            data : [
				{
					name:'75\n120',
					//name:'睡眠均值', 
					value:100, 
					itemStyle : {
						 normal: {
							color:'#CB0A97'
						}
					},
					label:{
						show:true,
						position:'center',
						fontWeight:"bold",
						fontSize:16,
						color:"#fff"
					}
				}
            ]
        },
        {
            type : 'pie',
			clockWise:true,
			hoverAnimation: false,
            center : ['80%', '70%'],
            radius : [25, 30],
            itemStyle : labelFromatter,
            data : [
                {
					//name:'计步均值', 
					name:'1000',
					value:100, 
					itemStyle : {
						 normal: {
							color:'#C0700B',
						}
					},
					label:{
						show:true,
						position:'center',
						fontWeight:"bold",
						fontSize:16,
						color:"#fff"
					}
				}
            ]
        }
    ]
};
var domMain = document.getElementById('RealTimeMonitornStatistics');
RealTimeMonitornStatisticsDataChart = echarts.init(domMain);
RealTimeMonitornStatisticsDataChart.setOption(option, true)          