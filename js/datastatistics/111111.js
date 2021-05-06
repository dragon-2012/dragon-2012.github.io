/**
 * Created by caoyu on 2019/11/22.
 */
/**
 *  风险疾病js
 **/



var RiskDiseaseDataObj = {};
RiskDiseaseDataObj.init = function(res){
    RiskDiseaseDataObj.data = [];
    RiskDiseaseDataObj.dataList = [];
    RiskDiseaseDataObj.series = [];

    var rbg = [
        'rgba(40,152,27)',
        'rgba(56,184,197)',
        'rgba(45,128,209)',
        'rgba(131,134,141)',
        'rgba(193,38,154)',
        'rgba(200,70,162)',
        'rgba(203,118,42)',
        'rgba(146,149,157)',
        'rgba(196,22,27)',
        'rgba(143,57,212)'
    ];
    var i = 0;
    if(res.count > 0){
        $.each(res.riskInfo, function (k, v) {
            var array = [];
            var yValue = ["", "", "", "", ""];
            v.percent = RiskDiseaseDataObj.formart(v.percent)
            array.push(v.diseaseName);
            array.push(v.numbers);
            array.push(v.percent);
            array.push(v.diseaseName);
            array.push(rbg[i]);
            yValue[i] = v.numbers;
            RiskDiseaseDataObj.data.push(array);
            RiskDiseaseDataObj.dataList.push(v.diseaseName);
            RiskDiseaseDataObj.seriesArr = {
                symbolSize: v.percent,
                data: yValue,
                type: 'scatter',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            color: '#fff',
                            distance:1
                        },
                        shadowBlur: 30,
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(255, 255, 255)'
                        }, {
                            offset: 1,
                            color: rbg[i],
                            zoom:1
                        }])
                    }
                },
            };
            RiskDiseaseDataObj.series.push(RiskDiseaseDataObj.seriesArr);
            i++;
        });
    }
};


// 加载中请求页面
RiskDiseaseDataObj.loading = function(domId)
{
    $('#'+domId).html('').html('<div class="loading"><img src="/datastatistics/images/loading-1.gif" /></div>');
};

// 关闭加载中
RiskDiseaseDataObj.closeLoading = function(domId){
    $('#'+domId).html('');
};

RiskDiseaseDataObj.setOption = function(){
    RiskDiseaseDataObj.option = {
        grid: {
            top:'15%',
            left: '3%',
            right: '3%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: {
            data: RiskDiseaseDataObj.dataList,
            /*name:'疾病\n名称',*/
            //坐标轴刻度设置
            axisTick: {
                show: true,
                inside:true,
                length:5,
                alignWithLabel:true
            },

            nameTextStyle:{
                color:'#07B2BB'
            },
            splitLine: {
                show:false,
                length:10
            },
            //坐标轴线相关设置
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#043883',
                    type:'solid',
                    width:5
                }
            },
            // 坐标轴刻度标签相关设置
            axisLabel: {
                interval:0,
                show:true,
                textStyle: {
                    color: '#03BACA'/*,
                     align:'left'*/
                },
                fontSize:'12',
                formatter:function(value)
                {
                    var ret = "";//拼接加\n返回的类目项
                    var maxLength = 5;//每项显示文字个数
                    var valueText = value;
                    var valLength = valueText.length;//X轴类目项的文字个数

                    if( valLength >16 ){
                        valueText = value.substring(0,12)+"...";
                    }

                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1)//如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = "";//每次截取的字符串
                            var start = i * maxLength;//开始截取的位置
                            var end = start + maxLength;//结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = valueText.substring(start, end) + "\n";
                            ret += '{term|'+temp+'}'; //凭借最终的字符串
                        }
                        return ret;
                    }
                    else {
                        return valueText;
                    }
                },
                rich: {
                    term: {
                        align : "left"
                    }
                }
            }
        },
        yAxis: {
            name:'人数',
            splitLine: {
                show:false
            },
            //坐标轴刻度设置
            axisTick: {
                show: false,
                inside:true,
                length:2
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
            }
        },
        series: RiskDiseaseDataObj.series
    };
};

RiskDiseaseDataObj.formart = function( data ){
    var value = 0;
    if( data <10){
        value =data;
    }else if( data >= 10 && data <30){
        value = data/1.3+3
    }else if(data >= 30 && data <50){
        value =data / 2+11
    }else if(data >= 50 && data <70){
        value = data / 2.5+16
    }else if(data >=70 && data <100){
        value = data/ 3+21
    }else{
        value = data / 4+26;
    }
    return value

}

RiskDiseaseDataObj.exec = function(documentId,res)
{
    RiskDiseaseDataObj.init(res);
    RiskDiseaseDataObj.setOption();
    var domMain = document.getElementById(documentId);
    RiskDiseaseDataChart = echarts.init(domMain);
    RiskDiseaseDataChart.setOption(RiskDiseaseDataObj.option, true)
};
