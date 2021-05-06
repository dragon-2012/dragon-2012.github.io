/*
 *  风险疾病js
 **/
var data = [
		
		[15016,30,10000,'甲状腺疾病','rgba(32,169,102,0.5)'],
		[17077,80.7,20000,'胆囊疾病','rgba(57,182,31,0.5'],
		[20006,100.4,30000,'骨关节疾病','rgba(36,175,105,0.5)'],
		[30062,200.4,40000,'骨髓疾病','rgba(207,161,43,0.5)'],
		[35062,300.4,50000,'白内障','rgba(22,120,214,0.5)'],
		[37006,400.4,60000,'风湿性心脏病','rgba(200,70,162,0.5)'],
		[38062,500.4,70000,'低血压','rgba(203,118,42,0.5)'],
		[47062,600.4,80000,'支气管炎','rgba(146,149,157,0.5)'],
		[59062,700.4,90000,'肠炎','rgba(196,22,27,0.5)'],
		[60062,800.4,100000,'传染性肝炎','rgba(143,57,212,0.5)']
];

option = {
    xAxis: {
        splitLine: {
			show:false
        },
		//坐标轴线相关设置
        axisLine: {
			show: true,
			lineStyle:{
				color:'#043883',
				type:'solid',
				width:2
			}
		},
		// 坐标轴刻度标签相关设置
        axisLabel: {
            textStyle: {
                color: '#03BACA'
            }
        }
    },
    yAxis: {
        splitLine: {
           show:false
        },
		axisLine: {
			show: true,
			lineStyle:{
				color:'#033F9B',
				type:'solid',
				width:2
			}
		},
		axisLabel: {
			show: true,
			color:'#03BACA'
		},
		nameTextStyle:{
			color:'#03BACA'
		},
    },
    series: [{
        name: 'rishDisease',
        data: data,
        type: 'scatter',
		//设置宽度和高度大小
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5;
        },
        label: {
            emphasis: {
                show: true,
				/*formatter: function (param) {
						return param.data[3];
					},*/
				//设置文字显示位置
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
				label:{
					show:true,
					formatter: function (param) {
						return param.data[3];
					},
					    position: 'top'

				},
                shadowBlur: 10,
                shadowColor: function(data)
				{
					return data.data[4]
				},
                shadowOffsetY: 5,
				color:function(data)
				{
					return data.data[4]
				}
            }
        }
    }]
};

var domMain = document.getElementById('RiskDiseaseDataStatistics');
RiskDiseaseDataChart = echarts.init(domMain);
RiskDiseaseDataChart.setOption(option, true);


