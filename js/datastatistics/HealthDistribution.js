/**
 * 健康分布js
 **/
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['易病', '体弱', '亚健康', '普通', '平均', '良好'],
		//
        axisTick: {
			show: true,
			length:2

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
		//坐标横向设置
        splitLine: {
			show: true,
			lineStyle:{
				color:'#043883',
				type:'dashed'
			}
		},
		//坐标轴刻度设置
        axisTick: {
			show: true,
			inside:true,
			length:1
		},
		//坐标轴刻度线相关设置
        axisLine: {
			show: true,
			lineStyle:{
				color:'#033F9B',
				type:'solid',
				width:2
			}
		},
		//坐标轴刻度标签相关设置
        axisLabel: {
			show: true,
			color:'#03BACA'
		},
		nameTextStyle:{
			color:'#03BACA'
		},
		show:true
    },
    color: ['#e54035'],
    series: [
	{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '50%',
		symbolSize:'100%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                opacity: 0.5
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [
			{
				value: 1230,
				symbolSize:['200%','100%'],
				itemStyle:{
					color:'#CD0893'
				}
			}, 
			{
				value: 600,
				symbolSize:['200%','100%'],
				itemStyle:{
					color:'#CD7023'
				}
			}, 
			{
				value: 250,
				symbolSize:['200%','100%'],
				itemStyle:{
					color:'#CE9B09'
				}
			}, 
			{
				value: 180,
				symbolSize:['200%','100%'],
				itemStyle:{
					color:'#02CCD8'
				}
			}, 
			{
				value: 120,
				symbolSize:['200%','100%'],
				itemStyle:{
					color:'#049049'
				}
			}, 
			{
				value: 90,
				symbolSize:['200%','100%'],
				itemStyle:{
					color:'#2DB509'
				}			
			}
		]
    }
	]
};


var domMain = document.getElementById('HealthDistribution');
healthDisDataChart = echarts.init(domMain);
healthDisDataChart.setOption(option, true)