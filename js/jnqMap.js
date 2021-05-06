    var mapChart;
    var option;
    $.get('./json/jnq.json', function (jnqJson) {
        echarts.registerMap('集宁区', jnqJson);
        mapChart = echarts.init(document.getElementById('jnqGolbal'));
        option = {
            title:{
                text: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series:[
                {
                    name: '',
                    type: 'map',
                    map: '集宁区', // 自定义扩展图表类型
                    aspectScale: 1.0, //长宽比. default: 0.7
                    zoom:1.1,
                    scaleLimit:{
                        min:0.5,
                        max:2.0
                    },
                    roam: false,
                    label:{
                        normal:{
                            show:true,
                            textStyle:{
                                color:"#ffffff"
                            }
                        },
                        emphasis:{
                            show:false,
                            textStyle:{
                                color:"#ffffff"
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1, //区域边框宽度
                            borderColor: '#016efd', //区域边框颜色
                            areaColor: "transparent" //区域颜色
                        },
                        emphasis: {
                            borderWidth: 1,
                            borderColor: '#016efd',
                            areaColor: "#006cff"
                        }
                    }
                }
            ]
        };
        mapChart.setOption(option);
    });