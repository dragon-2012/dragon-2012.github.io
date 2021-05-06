//<script>
//var data = {
//    min: -5, max: 5,
//    title: '激素水平 -20~+20', array: [
//        {color: '#071183', name: '间质的促甲状腺激素', operation: '=', value: 10},
//        {color: '#9103cd', name: '间质的促卵泡激素', operation: '=', value: 20},
//        {color: '#b5bd63', name: '间质的脱氢表雄酮', operation: '=', value: -10},
//        {color: '#b98506', name: '间质的皮质醇', operation: '=', value: 10},
//        {color: '#026209', name: '醛固酮', operation: '=', value: -12},
//        {color: '#bb7d63', name: '肾上腺髓质激素分泌量', operation: '=', value: -8},
//        {color: '#9883cd', name: '间质的睾丸激素', operation: '=', value: -20},
//        {color: '#90008f', name: '胰岛素分泌量', operation: '=', value: -29},
//
//    ]
//};


aNm = function () {
    this.canheight = 30;//px;
    this.allWidth = 320;
    this.allHeight = 300;
    this.padding = 20;
    this.Twidth = (this.allWidth-40)/6;



    this.MiddelNumber = 0;
    this.ctx = '';
    this.step = 2;
    this.minNumber = 0;
    this.maxNumber = 3;
    this.data = {};
    this.lineSmall=0;
    /*设置画布*/
    this.doC = (function (canvasId, data) {
        this.Canvas = document.getElementById(canvasId);
        this.ctx = this.Canvas.getContext('2d');
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(0, 0, this.allWidth, this.allHeight);
        this.mkline(data);
        this.data = data;
        console.log(this);
        this.canvasId = canvasId;
        this.mkRect(data);


    });
    /*画线的布局*/
    this.mkline = (function (data) {

        this.minNumber=data.min;
        this.maxNumber=data.max;
        /*获取刻度值*/
        for (var i = 0; i < data.array.length; i++) {
            if (data.array[i].value < this.minNumber) {
                this.minNumber = parseInt(data.array[i].value);
            }
            if (data.array[i].value > this.maxNumber) {
                this.maxNumber =parseInt( data.array[i].value);
            }
        }

            this.lineSmall=this.minNumber;

        this.minNumber = this.maxNumber * -1 > this.minNumber ? this.minNumber : this.maxNumber * -1;
        //if( this.lineSmall>=0){
        //
        //    this.step = 5;
        //
        //}else{
        //
        //    this.step=5;
        //}
        this.step=(data.min*-1==data.max)?data.max:5;


        this.minNumber += (this.step - this.minNumber * -1 % this.step);

        this.maxNumber += (this.step - this.maxNumber % this.step);
        console.log(this);
        for (var i = 0; i < 7; i++) {
            /*竖格虚线*/
            this.ctx.strokeStyle = 'black';

            this.ctx.setLineDash([]);

            this.ctx.lineDashOffset = 1;
            this.ctx.beginPath();
            this.ctx.lineWidth = 0.3;
            if( this.lineSmall>=0){
                 if(i==0){
                        this.ctx.setLineDash([]);
                        this.ctx.lineWidth = 1;
                    }
            }else{
                if(i==3){
                    this.ctx.setLineDash([]);
                    this.ctx.lineWidth = 1;
                }
            }


//              起始点
            this.ctx.moveTo((this.Twidth) * i + this.padding, 0);
//              画到位置
            this.ctx.lineTo((this.Twidth) * i + this.padding, this.allHeight - 10);
            this.ctx.stroke();
            this.ctx.closePath();
            /*写小刻度*/
            if (!(i < 0 || i > 5)) {
                for (var j = 0; j <=4; j++) {
                    if (j == this.step || j == 0) {
                        add = 0;
                    } else {
                        add = 4
                    }
                    this.ctx.beginPath();
                    this.ctx.setLineDash([]);
                    this.ctx.strokeStyle = 'black';
                    this.ctx.lineWidth = 0.1;
                    this.ctx.moveTo((this.Twidth) * i + this.padding + this.Twidth / 4 * j, this.allHeight-10);
                    this.ctx.lineTo((this.Twidth) * i + this.padding + this.Twidth / 4 * j, this.allHeight - add);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }


            /*刻度数字书写*/
            this.ctx.fillStyle = '#333333';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseLine = 'middle';
            if(this.lineSmall>=0){
                this.ctx.fillText((i) * this.step * 1, (this.Twidth) * i  + this.padding, this.allHeight);
            }else{
                if (i < 3) {

                    this.ctx.fillText((3 - i) * this.step * -1, (this.Twidth) * i  + this.padding, this.allHeight);

                } else if (i == 3) {

                    this.ctx.fillText(0, (this.Twidth) * i + this.padding, this.allHeight);
                } else if (i > 3) {

                    this.ctx.fillText((i - 3) * this.step, (this.Twidth) * i  + this.padding, this.allHeight);
                }
            }



        }
        this.ctx.beginPath();
        this.ctx.setLineDash([]);
        this.ctx.lineDashOffset = 0;
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 0.8;
        this.ctx.moveTo(0, this.allHeight - 10);
        this.ctx.lineTo(this.allWidth, this.allHeight - 10);
        this.ctx.stroke();
        this.canheight = (this.allHeight - 10) / data.array.length;
        this.ctx.closePath();
        /*横格虚线*/
        for (var i = 0; i < data.array.length; i++) {

            this.ctx.strokeStyle = '#dddddd';

            this.ctx.setLineDash([1, 3]);
            this.ctx.lineDashOffset = 1;
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(0 + this.padding , (this.canheight) * i);
            this.ctx.lineTo(this.allWidth - 1 - this.padding , (this.canheight) * i);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    });
    /*画幅度条*/
    this.mkRect = (function (data) {

        this.makeDocument();
        this.makejzhunLin();
       if(this.lineSmall>=0){

         var  longwidth=this.Twidth * 0
       }else{
           var  longwidth=this.Twidth * 3
       }

        for (var i = 0; i < data.array.length; i++) {
            this.ctx.beginPath();
            this.ctx.fillStyle = data.array[i].color;
            if(data.array[i].value==0){

                var numValue=0.2;
            }else{
                var numValue=data.array[i].value;
            }
            this.ctx.fillRect((this.padding + longwidth) , (this.canheight * i)+2.5, (numValue * this.Twidth / this.step), this.canheight-5);

            this.ctx.closePath();
            if (data.array[i].value >= 0) {

                this.makeSonDocument(i, (this.padding + longwidth) - 2, (this.canheight * i)+2.5, (numValue * this.Twidth / this.step), this.canheight-5, data.array[i].name + "[" + data.array[i].value + "]", 1)
            } else {
                this.makeSonDocument(i, (this.padding + longwidth) - 2, (this.canheight * i)+2.5, (data.array[i].value * this.Twidth / this.step), this.canheight-5, data.array[i].name + "[" + data.array[i].value + "]")
            }


        }

    });

    /*创建外围对象*/
    this.makeDocument = (function () {
        var Div = document.createElement('div');
        Div.id = this.canvasId + "_box";

        var rect = document.getElementById(this.canvasId).getBoundingClientRect();
        document.getElementById(this.canvasId).parentNode.appendChild(Div);
        Div = document.getElementById(this.canvasId + "_box");
        Div.style.position = 'absolute';
        Div.style.top =0;
        //Div.style.left = rect.left + 'px';
      //  Div.style.border = '1px solid';
        Div.style.width = this.allWidth + 'px';
        Div.style.height = this.allHeight + 'px';
        Div.title = this.data.title;

    })
//        创建小的每条元素对象 用来做鼠标经过提示
    this.makeSonDocument = (function (i, y, x, w, h, title, q) {
        var sonDiv = document.createElement('div');
        sonDiv.id = this.canvasId + "_box_son" + i;
        Div = document.getElementById(this.canvasId + "_box");

        Div.appendChild(sonDiv);
        sonDiv = document.getElementById(this.canvasId + "_box_son" + i);
        sonDiv.style.position = 'absolute';
        sonDiv.style.top = (+x) - 2 + 'px';
        /*判断负值的处理*/
        if (q) {
            sonDiv.style.left = (y)+'px';
        } else {
            sonDiv.style.left = (y + w)  + 'px';
        }

        sonDiv.addEventListener('mouseover', function (a) {
            this.style.border = "1px solid red";
        }, false);
        sonDiv.addEventListener('mouseleave', function (a) {
            this.style.border = "none";
        }, false);
        sonDiv.style.width = Math.abs(w) + 'px';
        sonDiv.style.height = Math.abs(h) + 'px';
        sonDiv.style.zIndex =6;
        sonDiv.title = title;
    })

    /*画标准线*/
    this.makejzhunLin = (function () {
        if(this.lineSmall>=0){

          var  longwidth=this.Twidth * 0
        }else{
         var   longwidth=this.Twidth * 3
        }

        this.ctx.strokeStyle = '#94252a';
        this.ctx.setLineDash([]);
        this.ctx.beginPath();
        this.ctx.lineWidth = 1;
        this.ctx.moveTo((this.Twidth / this.step) * this.data.max + this.padding + (longwidth), 0);
        this.ctx.lineTo((this.Twidth / this.step) * this.data.max + this.padding + (longwidth), this.allHeight+10);
        this.makeSonDocument('max', (this.Twidth / this.step) * this.data.max + this.padding + (longwidth), 0, 0.1, this.allHeight+10, "标准上限[" + this.data.max + ']', 1);
        if(this.lineSmall>=0&&this.data.min>0){

            this.ctx.moveTo((this.Twidth / this.step) * this.data.min + this.padding + (longwidth), 0);
            this.ctx.lineTo((this.Twidth / this.step) * this.data.min + this.padding + (longwidth), this.allHeight+10);
            this.makeSonDocument('min', (this.Twidth / this.step) * this.data.min + this.padding + (longwidth), 0, 0.1, this.allHeight+10 , "标准下限[" + this.data.min + ']', 1);
        }else if(this.lineSmall<0){
            this.ctx.moveTo((this.Twidth / this.step) * this.data.min + this.padding + (longwidth), 0);
            this.ctx.lineTo((this.Twidth / this.step) * this.data.min + this.padding + (longwidth), this.allHeight+10);
            this.makeSonDocument('min', (this.Twidth / this.step) * this.data.min + this.padding + (longwidth), 0, 0.1, this.allHeight+10 , "标准下限[" + this.data.min + ']', 1);
        }

        this.ctx.stroke();
        this.ctx.closePath();


    })

};


aNmForSjPH = function () {
    this.canheight = 30;//px;
    this.allWidth = 320;
    this.allHeight = 280;
    this.padding = 30;
    this.Twidth = 260/9;



//    this.canheight = 30;//px;
//    this.Twidth = 30;
//    this.allWidth = 320;
////        this.padding = (this.allWidth - this.Twidth * 11) / 2;
//    this.padding = 25;
//    this.allHeight = 200;

    this.paddingHeight = 10;
    this.MiddelNumber = 0;
    this.ctx = '';
    this.step = 10;
    this.minNumber = -3;
    this.maxNumber = 3;
    this.data = {};
    /*设置画布*/
    this.doC = (function (canvasId, data) {
        this.Canvas = document.getElementById(canvasId);
        this.ctx = this.Canvas.getContext('2d');
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(0, 0, this.allWidth, this.allHeight + this.paddingHeight);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(this.padding, 0 + this.paddingHeight, this.allWidth - this.padding * 2, this.allHeight - this.paddingHeight * 2);
        this.mkline();
//            this.data = data;
        this.canvasId = canvasId;
        this.makejzhunLin();
        //  this.mkRect();

    });
    /*画线的布局*/
    this.mkline = (function () {
        for (var i = 0; i < 10; i++) {
            /*竖格虚线*/
            this.ctx.strokeStyle = '#dddddd';
            //
            //this.ctx.setLineDash([1, 2]);
            //
            //this.ctx.lineDashOffset = 1;
            this.ctx.beginPath();
            this.ctx.lineWidth = 0.5;
//              起始点
            this.ctx.moveTo((this.Twidth) * i + this.padding, this.paddingHeight);
//              画到位置
            this.ctx.lineTo((this.Twidth) * i + this.padding, this.allHeight - this.paddingHeight);
            this.ctx.stroke();
            this.ctx.closePath();
            /*写小刻度*/
//                if (!(i < 0 || i > 5)) {
//                    for (var j = 0; j <= this.step; j++) {
//                        if (j == this.step || j == 0) {
//                            add = 0;
//                        } else {
//                            add = 4
//                        }
//                        this.ctx.beginPath();
//                        this.ctx.setLineDash([]);
//                        this.ctx.strokeStyle = 'red';
//                        this.ctx.lineWidth = 0.1;
//                        this.ctx.moveTo((this.Twidth) * i + this.padding + this.Twidth / this.step * j, 180);
//                        this.ctx.lineTo((this.Twidth) * i + this.padding + this.Twidth / this.step * j, 190 - add);
//                        this.ctx.stroke();
//                        this.ctx.closePath();
//                    }
//                }


            /*刻度数字书写*/
            this.ctx.font = "10px Microsoft JhengHei";
            this.ctx.fillStyle = '#333';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseLine = 'middle';

            if (i < 10) {
                this.ctx.fillText(i * 10 + 10, (this.Twidth) * i + this.padding, this.allHeight + this.paddingHeight);
            }


        }
        this.ctx.beginPath();
        this.ctx.setLineDash([]);
        this.ctx.lineDashOffset = 0;
        this.ctx.strokeStyle = '#dddddd';
        this.ctx.lineWidth = 0.8;
        this.ctx.moveTo(this.padding, this.allHeight - 10);
        this.ctx.lineTo(this.allWidth - this.padding, this.allHeight - 10);
        this.ctx.stroke();
        this.canheight = (this.allHeight - this.paddingHeight * 2) / 6;
        this.heightSvg= this.canheight/this.step;
        this.ctx.closePath();
        /*横格虚线*/
        for (var i = 0; i < 6; i++) {

            this.ctx.strokeStyle = '#dddddd';

            this.ctx.setLineDash([1, 3]);
            this.ctx.lineDashOffset = 0.5;
            this.ctx.beginPath();
            if (i == 3) {
                this.ctx.strokeStyle = '#dddddd';
                //
                this.ctx.setLineDash([]);
                this.ctx.lineDashOffset = 0.5;
            }
            this.ctx.lineWidth = 0.5;
            this.ctx.moveTo(0 + this.padding , (this.canheight) * i + this.paddingHeight);
            this.ctx.lineTo(this.allWidth - 1 - this.padding , (this.canheight) * i + this.paddingHeight);
            this.ctx.stroke();
            this.ctx.closePath();

            this.ctx.setLineDash([]);
            //this.ctx.lineDashOffset = 0;
            //this.ctx.lineWidth = 0.8;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(40 - (i * 10 + 10), 10, (this.canheight) * i + this.paddingHeight + 5);


        }
        this.ctx.fillText('-30', 10, this.allHeight - this.paddingHeight + 5);

        /*8条斜线*/
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#dddddd';
        this.ctx.setLineDash([]);
//                this.ctx.lineDashOffset = 0.5;
        this.ctx.lineWidth = 0.5;
        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 3 + this.canheight / 10 * 7);
        this.ctx.lineTo(this.padding + this.Twidth * 4 - this.Twidth / 10 * 7, this.paddingHeight);
        this.ctx.fillStyle = '#3333';
        this.ctx.fillText('7.7', this.padding + this.Twidth * 4 - this.Twidth / 10 * 7, this.paddingHeight + 15);


        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 4 + this.canheight / 10);
        this.ctx.lineTo(this.padding + this.Twidth * 4 + this.Twidth / 10 * 6, this.paddingHeight);
        this.ctx.fillText('7.6', this.padding + this.Twidth * 4 + this.Twidth / 10 *6, this.paddingHeight + 15);

        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 4 + this.canheight / 10 * 4);
        this.ctx.lineTo(this.padding + this.Twidth * 6 + this.Twidth / 10 * 3, this.paddingHeight);
        this.ctx.fillText('7.5', this.padding + this.Twidth * 6 + this.Twidth / 10 * 3, this.paddingHeight + 15);


        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 4 + this.canheight / 10 * 7);
        this.ctx.lineTo(this.padding + this.Twidth * 9 - this.Twidth / 10 * 6, this.paddingHeight);
        this.ctx.fillText('7.4', this.padding + this.Twidth * 9 - this.Twidth / 10 * 6, this.paddingHeight + 15);

        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 5);
        this.ctx.lineTo(this.padding + this.Twidth * 9, this.paddingHeight + this.canheight * 1 - this.canheight / 10);
        this.ctx.fillText('7.3', this.padding + this.Twidth * 9 - 20, this.paddingHeight + this.canheight * 1 - this.canheight / 10 + 20);

        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 5 + this.canheight / 10 * 2);
        this.ctx.lineTo(this.padding + this.Twidth * 9, this.paddingHeight + this.canheight * 2);
        this.ctx.fillText('7.2', this.padding + this.Twidth * 9 - 20, this.paddingHeight + this.canheight * 2 + 20);

        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 5 + this.canheight / 10 * 4);
        this.ctx.lineTo(this.padding + this.Twidth * 9, this.paddingHeight + this.canheight * 2 + this.canheight / 10 * 8);
        this.ctx.fillText('7.1', this.padding + this.Twidth * 9 - 20, this.paddingHeight + this.canheight * 2 + this.canheight / 10 * 8 + 40);

        this.ctx.moveTo(this.padding, this.paddingHeight + this.canheight * 5 + this.canheight / 10 * 6);
        this.ctx.lineTo(this.padding + this.Twidth * 9, this.paddingHeight + this.canheight * 3 + this.canheight / 10 * 6);
        this.ctx.fillText('7.0', this.padding + this.Twidth * 9 - 20, this.paddingHeight + this.canheight * 3 + this.canheight / 10 * 4 + 40);
        this.ctx.stroke();
        this.ctx.closePath();

    });



//        创建小的每条元素对象 用来做鼠标经过提示


    /*画标准线*/
    this.makejzhunLin = (function () {

//
//            this.ctx.strokeStyle = 'red';
//            this.ctx.setLineDash([]);
//            this.ctx.beginPath();
//            this.ctx.lineWidth = 1;
//            this.ctx.moveTo((this.Twidth / this.step) * this.data.max + this.padding + (this.Twidth * 3), 0);
//            this.ctx.lineTo((this.Twidth / this.step) * this.data.max + this.padding + (this.Twidth * 3), this.allHeight - 10);
//            this.makeSonDocument('max', (this.Twidth / this.step) * this.data.max + this.padding + (this.Twidth * 3), 0, 0.1, this.allHeight - 10, "标准上限[" + this.data.max + ']', 1);
//            this.ctx.moveTo((this.Twidth / this.step) * this.data.min + this.padding + (this.Twidth * 3), 0);
//            this.ctx.lineTo((this.Twidth / this.step) * this.data.min + this.padding + (this.Twidth * 3), this.allHeight - 10);
//            this.makeSonDocument('min', (this.Twidth / this.step) * this.data.min + this.padding + (this.Twidth * 3), 0, 0.1, this.allHeight - 10, "标准下限[" + this.data.min + ']', 1);
//            this.ctx.stroke();
//            this.ctx.closePath();


        this.ctx.beginPath();
        this.ctx.setLineDash([]);
        this.ctx.lineDashOffset = 0;
        this.ctx.strokeStyle = '#94252a';
        this.ctx.lineWidth =2.0;
        //   this.ctx.fillRect((this.Twidth/10)*32+this.padding,(this.canheight/10)*28+this.paddingHeight,(this.Twidth/10)*8,this.canheight/10*4);
        this.ctx.stroke();
        this.ctx.strokeRect((this.Twidth/10)*33.6+this.padding,(this.canheight/10)*28+this.paddingHeight,(this.Twidth/10)*8,this.canheight/10*4);
        this.ctx.closePath();


    });
    /*x sbe值 ,
    y, paco2
    i,
    r, 圆半径1
    rr
    */
    this.makeTheCircleCenter=(function(x,y,i,r,rr){
        cheight=this.paddingHeight+this.canheight/10*(60+(-30-x));
        cwidth=this.padding+this.Twidth/10*(y-10);
        console.log(cheight,cwidth);




        this.ctx.strokeStyle="red";
        this.ctx.fillStyle="#FFFFFF";   //设置填充的颜色
        this.ctx.lineWidth =0.8;
        this.ctx.arc(cwidth,cheight,rr,0,360,false);
        //this.ctx.fill();
        this.ctx.stroke();
        //this.ctx.lineWidth=1;    //重新设置画笔
        //this.ctx.arc(cwidth,cheight,i,0,360,false);
        //this.ctx.fillStyle="rgb(255,0,0)";   //设置填充的颜色
        //this.ctx.lineWidth=1;    //重新设置画笔
        //this.ctx.strokeStyle="black";
        //this.ctx.arc(cwidth,cheight,r,0,360,false);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.strokeStyle="#94252a";
        //this.ctx.fillStyle="rgb(255,0,0)";   //设置填充的颜色
        this.ctx.lineWidth =0.8;
        this.ctx.arc(cwidth,cheight,r,0,360,false);
        //this.ctx.fill();
        this.ctx.stroke();
        //this.ctx.lineWidth=1;    //重新设置画笔
        //this.ctx.arc(cwidth,cheight,i,0,360,false);
        //this.ctx.fillStyle="rgb(255,0,0)";   //设置填充的颜色
        //this.ctx.lineWidth=1;    //重新设置画笔
        //this.ctx.strokeStyle="black";
        //this.ctx.arc(cwidth,cheight,r,0,360,false);
        this.ctx.closePath();




        this.ctx.beginPath();
        this.ctx.setLineDash([]);
        this.ctx.lineDashOffset = 0;
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 1;
        this.ctx.moveTo(cwidth,cheight-20);
        this.ctx.lineTo(cwidth,cheight-5);
        this.ctx.moveTo(cwidth,cheight+20);
        this.ctx.lineTo(cwidth,cheight+5);
        this.ctx.moveTo(cwidth-20,cheight);
        this.ctx.lineTo(cwidth-5,cheight);
        this.ctx.moveTo(cwidth+20,cheight);
        this.ctx.lineTo(cwidth+5,cheight);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        //this.ctx.strokeStyle="red";
        this.ctx.fillStyle="#FFFFFF";   //设置填充的颜色
        //this.ctx.lineWidth =0.8;
        this.ctx.arc(cwidth,cheight,i,0,360,false);
        //this.ctx.fill();
        //this.ctx.stroke();
        //this.ctx.lineWidth=1;    //重新设置画笔
        //this.ctx.arc(cwidth,cheight,i,0,360,false);
        //this.ctx.fillStyle="rgb(255,0,0)";   //设置填充的颜色
        //this.ctx.lineWidth=1;    //重新设置画笔
        //this.ctx.strokeStyle="black";
        //this.ctx.arc(cwidth,cheight,r,0,360,false);
        this.ctx.closePath();

        this.ctx.beginPath();




    });
}
//Anm = new aNm;
//Anm.doC('myChartFive', data);
//Anm.doC('myChartFive1', data);
//
////     function getL(canvasId, evt) {
////        var rect = document.getElementById(canvasId).getBoundingClientRect();
////        return {
////            x: evt.clientX - rect.left,
////            y: evt.clientY - rect.top
////        };
////    };
//</script>