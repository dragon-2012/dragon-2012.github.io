/**
 * 基础分布js
 **/
var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false}
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    tooltip : {
		showTip:'null',
		hideTip:true
    },
	itemStyle : {
		normal : {
			show:true,
			textStyle:{
				color:"#fff"
			}
		}
	},
    legend: {
        orient : 'vertical',
        x : 280,
        y : 45,
        itemGap:12,
		itemWidth:10,
		itemHeight:10,
        data:['注册人数','当日活跃人数','Thr筛查人数','手环佩戴人数'],
		textStyle:{
			color:'#03BACA'
		}
    },
    series : [
		{
            name:'注册人数',
            type:'pie',
            clockWise:true,
            hoverAnimation: false,
            radius : [68, 76],
			center:['25%','50%'],
            itemStyle :  {
                normal: {
					label : {
                        show : true   
                    },
					labelLine:{
						show:true,
						length:20
					},
                    color:'#cd752e'
                }
            },
            data:[
                {
                    value:99,
                    name:'1000'
                },
                {
                    value:1,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
		{
            name:'当日活跃人数',
            type:'pie',
            clockWise:true,
            hoverAnimation: false,
            radius : [52, 60],
			center:['25%','50%'],
            itemStyle :  {
                normal: {
					label : {
                        show : true   
                    },
					labelLine:{
						show:true,
						length:20
					},
                    color:'#2db60d'
                }
            },
            data:[
                {
                    value:20,
                    name:'2000'
                },
                {
                    value:80,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Thr筛查人数',
            type:'pie',
            clockWise:true,
            hoverAnimation: false,
            radius : [36, 44],
			center:['25%','50%'],
            itemStyle :  {
                normal: {
					label : {
                        show : true   
                    },
					labelLine:{
						show:true,
						length:50
					},
                    color:'#cd9d0d'
                }
            },
            data:[
                {
                    value:10,
                    name:'3000'
                },
                {
                    value:90,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
		{
            name:'手环佩戴人数',
            type:'pie',
            clockWise:true,
            radius : [20, 28],
			center:['25%','50%'],
            itemStyle : {
                normal: {
					label : {
                        show : true   
                    },
					labelLine:{
						show:true,
						length:50
					},
                    color:'#016ed8',
                }
            },
            hoverAnimation: false,
            data:[
                {
                    value:33,
                    name:'4000'
                },
                {
                    value:67,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }
    ]
};

var domMain = document.getElementById('baseData');
baseDataChart = echarts.init(domMain);
baseDataChart.setOption(option, true)