/*
* 血氧 血压 疲劳感
*/
var e = 79;
var myChart = echarts.init(document.getElementById('blood_pressure'));  
option = {
    color:['#ff05aa','#002d71'],  
    title:{                 
        show:true,                   
        text:'120/79',          
        x:'center',                 
        y:'center',                 
        textStyle: {                       
            fontSize: '14',                     
            color:'#fff',                      
            fontWeight: 'normal'                    
        },         
    },          
    tooltip: {              
        trigger: 'item',                
        formatter: "{d}%",              
        show:false,       
    },          
    legend: {              
        orient: 'vertical',                
        x: 'left',             
        show:false         
    },          
    series:{                   
        name:'',                  
        type:'pie',                    
        radius: ['65%', '85%'],                    
        avoidLabelOverlap: true,                   
        hoverAnimation:false,                  
        label: {                       
            normal: {                           
                show: false,                           
                position: 'center',
            },                      
            emphasis: {                         
                show: false                     
            }                   
    },                 
    labelLine: {                       
        normal: {                           
            show: false,          
        }                   
     },                 
    data:[                     
            {value:e, name:''},                        
            {value:120-e, name:''}                 
        ]              
    }                   
};        
myChart.setOption(option);


var e = 31;
var myChart = echarts.init(document.getElementById('blood_oxygen'));  
option = {
    color:['#ff8821','#002d71'],  
    title:{                 
        show:true,                   
        text:e,          
        x:'center',                 
        y:'center',                 
        textStyle: {                       
            fontSize: '14',                     
            color:'#fff',                      
            fontWeight: 'normal'                    
        },         
    },          
    tooltip: {              
        trigger: 'item',                
        formatter: "{d}%",              
        show:false,       
    },          
    legend: {              
        orient: 'vertical',                
        x: 'left',             
        show:false         
    },          
    series:{                   
        name:'',                  
        type:'pie',                    
        radius: ['65%', '85%'],                    
        avoidLabelOverlap: true,                   
        hoverAnimation:false,                  
        label: {                       
            normal: {                           
                show: false,                           
                position: 'center',
            },                      
            emphasis: {                         
                show: false                     
            }                   
    },                 
    labelLine: {                       
        normal: {                           
            show: false,          
        }                   
     },                 
    data:[                     
            {value:e, name:''},                        
            {value:120-e, name:''}                 
        ]              
    }                   
};        
myChart.setOption(option);



var e = 79;
var myChart = echarts.init(document.getElementById('fatigue_degree'));  
option = {
    color:['#00b750','#002d71'],  
    title:{                 
        show:true,                   
        text:'重度',          
        x:'center',                 
        y:'center',                 
        textStyle: {                       
            fontSize: '14',                     
            color:'#fff',                      
            fontWeight: 'normal'                    
        },         
    },          
    tooltip: {              
        trigger: 'item',                
        formatter: "{d}%",              
        show:false,       
    },          
    legend: {              
        orient: 'vertical',                
        x: 'left',             
        show:false         
    },          
    series:{                   
        name:'',                  
        type:'pie',                    
        radius: ['65%', '85%'],                    
        avoidLabelOverlap: true,                   
        hoverAnimation:false,                  
        label: {                       
            normal: {                           
                show: false,                           
                position: 'center',
            },                      
            emphasis: {                         
                show: false                     
            }                   
    },                 
    labelLine: {                       
        normal: {                           
            show: false,          
        }                   
     },                 
    data:[                     
            {value:e, name:''},                        
            {value:100-e, name:''}                 
        ]              
    }                   
};        
myChart.setOption(option);

