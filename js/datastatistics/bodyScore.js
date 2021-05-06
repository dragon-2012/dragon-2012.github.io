/**
 *  身体当前得分
 **/

window.onload = function () {
var canvas = document.getElementById('bodyScore'),
    ctx = canvas.getContext('2d'),
    cWidth = canvas.width,
    cHeight = canvas.height,
    score = canvas.attributes['data-score'].value,
    /*标尺*/
        /*stage = ['', '', '', '', '',],*/
        radius = canvas.width / 3,
        deg0 = Math.PI / 9,
    /*刻度值指标*/
        deg1 = Math.PI * 11 / 45;
        var dot = new Dot1(),
        dotSpeed = 0.1,
        textSpeed = Math.round(dotSpeed * 100 / deg1),
        angle = 0,
        credit = 0;


        function drawC1() {


            setTimeout(function () {
                ctx.beginPath();
//
//            var grad=ctx.createLinearGradient(0,0,180,0);
//            grad.addColorStop(1,'#FE646D'); // 绿
//            grad.addColorStop(0.75,'#B483B7');  // 紫
//            grad.addColorStop(0.5,'#66A7F6');  // 紫
//            grad.addColorStop(0.25,'#3DCDD7');
//            grad.addColorStop(0,'#00FF00');    // 红

//            var grad=ctx.createLinearGradient(0,0,180,0);
//            grad.addColorStop(1,'#FE646D'); // 绿
//            grad.addColorStop(0.75,'#B483B7');  // 紫
//            grad.addColorStop(0.5,'#66A7F6');  // 紫
//            grad.addColorStop(0.25,'#3DCDD7');
//            grad.addColorStop(0,'#00FF00');    // 红
                ctx.strokeStyle = "#e4812c";
                ctx.lineWidth = 10;
                //  ctx.lineCap="round";
                ctx.arc(0, 0, radius + 20, 0, aim, false);
                ctx.stroke();
                ctx.restore();
                ctx.save();
            }, 500);


        }


        /*指标*/
        function Dot1() {
            this.x = 0;
            this.y = 0;
            this.draw = function (ctx) {
                ctx.save();
                ctx.beginPath();
                //    ctx.lineCap="round";
                ctx.fillStyle = '#011d4d';
                ctx.arc(this.x, this.y, 4, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.restore();
            };
        }

        /*画数值*/
        function text1(process) {
            ctx.save();
            ctx.rotate(10 * deg0);
            ctx.fillStyle = '#e0a710';
            ctx.font = '20px Microsoft yahei';
            ctx.textAlign = 'center';
            ctx.textBaseLine = 'bottom';
            ctx.fillText(process, 0, 0);
            ctx.restore();
        }


//        ctx.translate(0,0);
        function drawFrame1() {

            ctx.save();
            ctx.clearRect(0, 0, cWidth, cHeight);
            ctx.translate(cWidth / 2, cHeight / 2);
            for (var i = 0; i < 11; i++) {
                /*求弧度*/
                hudu = ((220 / 10) * i + 180 + 70) * Math.PI / 180;
//                /*计算上下位置*/
                var x = (cHeight / 2 ) + Math.sin(hudu) * (radius - 20);
//                /*计算左右位置*/
                var y = (cWidth / 2) - Math.cos(hudu) * (radius - 20);
                ctx.font = '12px Microsoft yahei';
                ctx.fillStyle = '#0145a8';
                /*文字垂直居中*/
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                /*写数字*/
                if (i % 2 == 0) {

                    ctx.fillText(10 * i, x - cWidth / 2 - 2, y - cHeight / 2 - 2);

                }

            }


            ctx.rotate(8 * deg0);
            dot.x = radius * Math.cos(angle);
            dot.y = radius * Math.sin(angle);
            aim = (score / 100 * 500) * deg1 / 100;
            if (angle < aim) {
                angle += dotSpeed;
            }
            dot.draw(ctx);

            if (credit < score - textSpeed) {
                credit += textSpeed;
            } else if (credit >= score - textSpeed && credit < score) {
                credit += 1;
            }


            text1(score);


            ctx.save();

            ctx.save(); 
            /*会动层*/
            ctx.save();

            ctx.beginPath();
            ctx.strokeStyle = '#0043a8';
           /* ctx.lineWidth = 10;*/
            // ctx.lineCap="round";
            ctx.arc(0, 0, radius, 0, 11 * deg0, false);

            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius, 0, Math.PI * 1.222, false);
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius, 0, Math.PI * 0.97, false);
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius, 0, Math.PI * 0.73, false);
            ctx.stroke();
            ctx.restore();
            ctx.save();

         
            ctx.beginPath();
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius, 0, Math.PI * 0.49, false);
            ctx.stroke();
            ctx.restore();
            ctx.save();

            ctx.beginPath();
            ctx.lineWidth = 20;
        
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius, 0, Math.PI * 0.24, false);
            ctx.stroke();
            ctx.restore();

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius, 0, 220 * Math.PI / 180, false);

            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius, 0, 220 * Math.PI / 180, false);


            ctx.stroke();
            ctx.restore();
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#0043a8';

            ctx.arc(0, 0, radius + 15, 0, 220 * Math.PI / 180, false);

            ctx.stroke();
            ctx.save(); 
            // 刻度线
            for (var i = 0; i < 6; i++) {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#1363de';
                ctx.moveTo(radius + 10, 0);
                ctx.lineTo(radius - 10, 0);
                ctx.stroke();

                ctx.rotate(deg1);
            }


            ctx.rotate(316 * Math.PI / 180);
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#0043a8';
            ctx.moveTo(radius + 25, 0);
            ctx.lineTo(radius + 15, 0);
            ctx.stroke();

            ctx.rotate((140) * Math.PI / 180);
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#0043a8';
            ctx.moveTo(radius + 25, 0);
            ctx.lineTo(radius + 15, 0);
            ctx.stroke();

            ctx.restore();
//
//            ctx.save(); // 细分刻度线
//            for (i = 0; i < 20; i++) {
//                if (i % 4 !== 0) {
//                    ctx.beginPath();
//                    ctx.lineWidth = 1;
//                    ctx.strokeStyle = 'blue';
//                    ctx.moveTo(80, 0);
//                    ctx.lineTo(75, 0);
//                    ctx.stroke();
//                }
//                ctx.rotate(deg1 / 4);
//            }
//            ctx.restore();

            ctx.save(); //信用分数


            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius + 25, 0, 220 * Math.PI / 180, false);
            ctx.stroke();
            ctx.restore();
            ctx.save();


           /* ctx.rotate(Math.PI / 2 + deg0);
            for (i = 0; i < 5; i++) {
                ctx.fillStyle = '#e3a419';
                ctx.font = "12px Microsoft yahei";
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText(stage[i], 0, -radius);
                ctx.rotate(deg1);
            }*/


            ctx.restore();
            ctx.save();

            ctx.restore();
            drawC1();



             //信用阶段及评估时间文字
        }

        drawFrame1();

    setTimeout(function () {
       /* function drawFrame2() {

            }

            drawFrame2();

        }, 200)*/
         var canvas1 = document.getElementById('canvas1'),
                ctx1 = canvas1.getContext('2d'),
                cWidth = canvas1.width,
                cHeight = canvas1.height,
                score = canvas1.attributes['data-score'].value,
            /*标尺*/
                radius = canvas1.width / 3,
                deg0 = Math.PI / 9,
            /*刻度值指标*/
                deg1 = Math.PI * 11 / 45;
            var dot = new Dot(),
                dotSpeed = 0.1,
                textSpeed = Math.round(dotSpeed * 100 / deg1),
                angle = 0,
                credit = 0;

            function drawC() {


                setTimeout(function () {
                    ctx1.beginPath();
//
//            var grad=ctx1.createLinearGradient(0,0,180,0);
//            grad.addColorStop(1,'#FE646D'); // 绿
//            grad.addColorStop(0.75,'#B483B7');  // 紫
//            grad.addColorStop(0.5,'#66A7F6');  // 紫
//            grad.addColorStop(0.25,'#3DCDD7');
//            grad.addColorStop(0,'#00FF00');    // 红

//            var grad=ctx1.createLinearGradient(0,0,180,0);
//            grad.addColorStop(1,'#FE646D'); // 绿
//            grad.addColorStop(0.75,'#B483B7');  // 紫
//            grad.addColorStop(0.5,'#66A7F6');  // 紫
//            grad.addColorStop(0.25,'#3DCDD7');
//            grad.addColorStop(0,'#00FF00');    // 红
                    ctx1.strokeStyle = "#e4812c";
                    ctx1.lineWidth = 10;
                    //  ctx1.lineCap="round";
                    ctx1.arc(0, 0, radius + 20, 0, aim1, false);
                    ctx1.stroke();
                    ctx1.restore();
                    ctx1.save();
                }, 500);


            }


            /*指标*/
            function Dot() {
                this.x = 0;
                this.y = 0;
                this.draw = function (ctx1) {
                    ctx1.save();
                    ctx1.beginPath();
                    //    ctx1.lineCap="round";
                    ctx1.fillStyle = '#011d4d';
                    ctx1.arc(this.x, this.y, 4, 0, Math.PI * 2, false);
                    ctx1.fill();
                    ctx1.restore();
                };
            }

            /*画数值*/
            function text(process) {
                ctx1.save();
                ctx1.rotate(10 * deg0);
                ctx1.fillStyle = '#d2a92d';
                ctx1.font = '20px Microsoft yahei';
                ctx1.textAlign = 'center';
                ctx1.textBaseLine = 'bottom';
                ctx1.fillText(process, 0, -10);
                ctx1.restore();
            }


//        ctx1.translate(0,0);
            function drawFrame2() {

                ctx1.save();
                ctx1.clearRect(0, 0, cWidth, cHeight);
                ctx1.translate(cWidth / 2, cHeight / 2);
                for (var i = 0; i < 11; i++) {
                    /*求弧度*/
                    var hudu = ((220 / 10) * i + 180 + 70) * Math.PI / 180;
//                /*计算上下位置*/
                    var x = (cHeight / 2 ) + Math.sin(hudu) * (radius - 20);
//                /*计算左右位置*/
                    var y = (cWidth / 2) - Math.cos(hudu) * (radius - 20);
                    ctx1.font = '10px Microsoft yahei';
                    ctx1.fillStyle = '#0145a8';
                    /*文字垂直居中*/
                    ctx1.textBaseline = 'descent';
                    ctx1.textAlign = 'center';

                    /*写数字*/
                   /* if (i % 2 == 0) {

                        ctx1.fillText(10 * i, x - cWidth / 2 - 2, y - cHeight / 2 - 2);

                    }*/

                }


                ctx1.rotate(8 * deg0);
                dot.x = radius * Math.cos(angle);
                dot.y = radius * Math.sin(angle);
                aim1 = (score / 100 * 500) * deg1 / 100;
                if (angle < aim1) {
                    angle += dotSpeed;
                }
                dot.draw(ctx1);

                if (credit < score - textSpeed) {
                    credit += textSpeed;
                } else if (credit >= score - textSpeed && credit < score) {
                    credit += 1;
                }


                text(score);


                ctx1.save();

                ctx1.save(); //中间刻度层


                /// window.requestAnimationFrame(drawFrame1);
                /*会动层*/
                ctx1.save();
//            ctx1.beginPath();
//            ctx1.lineWidth = 5;
////            if(score<40){
////
////                ctx1.strokeStyle = 'red';
////            }else if(score>40&&score<60){
////                ctx1.strokeStyle = 'pink';
////
////            }else if(score>60){
//                ctx1.strokeStyle = 'black';
////            }
//
//
//            ctx1.arc(0, 0, radius, 0, angle, false);
//            ctx1.stroke();
//            ctx1.restore();


                ctx1.beginPath();
                ctx1.strokeStyle = '#0045ab';
                ctx1.lineWidth = 10;
                // ctx1.lineCap="round";
                ctx1.arc(0, 0, radius, 0, 11 * deg0, false);

                ctx1.stroke();
                ctx1.restore();
                ctx1.save();
                ctx1.beginPath();
                ctx1.lineWidth = 10;
                ctx1.strokeStyle = '#0045ab';
                // ctx1.lineCap="round";
                ctx1.arc(0, 0, radius, 0, Math.PI * 1.222, false);
                ctx1.stroke();
                ctx1.restore();
                ctx1.save();
                ctx1.beginPath();
                ctx1.lineWidth = 10;
                ctx1.strokeStyle = '#0045ab';
                ctx1.arc(0, 0, radius, 0, Math.PI * 0.97, false);
                ctx1.stroke();
                ctx1.restore();
                ctx1.save();
                ctx1.beginPath();
                ctx1.lineWidth = 10;
                ctx1.strokeStyle = '#0045ab';
                ctx1.arc(0, 0, radius, 0, Math.PI * 0.73, false);
                ctx1.stroke();
                ctx1.restore();
                ctx1.save();

                /*e60012  efc274       f8e6c6    fbf499   35b6b4\*/
                ctx1.beginPath();
                ctx1.lineWidth = 10;
                ctx1.strokeStyle = '#0045ab';
                ctx1.arc(0, 0, radius, 0, Math.PI * 0.49, false);
                ctx1.stroke();
                ctx1.restore();
                ctx1.save();

                ctx1.beginPath();
                ctx1.lineWidth = 10;
                // ctx1.lineCap="round";
                ctx1.strokeStyle = '#0045ab';
                ctx1.arc(0, 0, radius, 0, Math.PI * 0.24, false);
                ctx1.stroke();
                ctx1.restore();

                ctx1.beginPath();
                ctx1.lineWidth = 2;
                ctx1.strokeStyle = '#0045ab';
                ctx1.arc(0, 0, radius, 0, 220 * Math.PI / 180, false);

                ctx1.stroke();
                ctx1.restore();
                ctx1.save();
                ctx1.beginPath();
                ctx1.lineWidth = 2;
                ctx1.strokeStyle = '#0045ab';
                ctx1.arc(0, 0, radius, 0, 220 * Math.PI / 180, false);


                ctx1.stroke();
                ctx1.restore();
                ctx1.beginPath();
                ctx1.lineWidth = 2;
                ctx1.strokeStyle = '#0045ab';

                ctx1.arc(0, 0, radius + 15, 0, 220 * Math.PI / 180, false);

                ctx1.stroke();
                ctx1.save(); // 刻度线
                for (var i = 0; i < 6; i++) {
                    ctx1.beginPath();
                    ctx1.lineWidth = 1;
                    ctx1.strokeStyle = '#1363de';
                    ctx1.moveTo(radius + 5, 0);
                    ctx1.lineTo(radius - 10, 0);
                    ctx1.stroke();

                    ctx1.rotate(deg1);
                }


                ctx1.rotate(316 * Math.PI / 180);
                ctx1.beginPath();
                ctx1.lineWidth = 1;
                ctx1.strokeStyle = '#0045ab';
                ctx1.moveTo(radius + 25, 0);
                ctx1.lineTo(radius + 15, 0);
//            ctx1.moveTo(radius+30, 0);
//            ctx1.lineTo(radius-50, 0);
                ctx1.stroke();

                ctx1.rotate((140) * Math.PI / 180);
                ctx1.beginPath();
                ctx1.lineWidth = 1;
                ctx1.strokeStyle = '#0045ab';
                ctx1.moveTo(radius + 25, 0);
                ctx1.lineTo(radius + 15, 0);
//            ctx1.moveTo(radius+30, 0);
//            ctx1.lineTo(radius-50, 0);
                ctx1.stroke();

                ctx1.restore();
//
//            ctx1.save(); // 细分刻度线
//            for (i = 0; i < 20; i++) {
//                if (i % 4 !== 0) {
//                    ctx1.beginPath();
//                    ctx1.lineWidth = 1;
//                    ctx1.strokeStyle = 'blue';
//                    ctx1.moveTo(80, 0);
//                    ctx1.lineTo(75, 0);
//                    ctx1.stroke();
//                }
//                ctx1.rotate(deg1 / 4);
//            }
//            ctx1.restore();

                ctx1.save(); //信用分数


                ctx1.save();
                ctx1.beginPath();
                ctx1.lineWidth = 2;
                ctx1.strokeStyle = '#0045ab';
                ctx1.arc(0, 0, radius + 25, 0, 220 * Math.PI / 180, false);
//            console.log(220 * Math.PI / 180);
                ctx1.stroke();
                ctx1.restore();
                ctx1.save();


//            ctx1.rotate(Math.PI / 2 + deg0);
//            for (i = 0; i < 5; i++) {
//                ctx1.fillStyle = '#666666';
//                ctx1.font = "10px Microsoft yahei";
//                ctx1.textBaseline = 'middle';
//                ctx1.textAlign = 'center';
//                ctx1.fillText(stage[i], 0, -radius);
//                ctx1.rotate(deg1);
//            }
//
//
//            ctx1.restore();
//            ctx1.save();
//        ctx1.beginPath();
//            stage1 = ['差', '较差', '一般', '良好', '优秀'];

                //信用阶段及评估时间文字
            ctx1.rotate(10 * deg0);

            ctx1.font = '16px Microsoft yahei';
            ctx1.textAlign = 'center';
            score1 = Math.ceil(score);
                if(score1 > 0 && score1 <= 50) {
                    ctx1.fillStyle = '#d2a92d';
                   ctx1.fillText('易病', 0, 10);
               } else if (score1 > 51 && score1 <= 60) {
                   ctx1.fillStyle = '#d2a92d';
                  ctx1.fillText('体弱', 0, 10);
               } else if (score1 > 61 && score1 <= 70) {
                    ctx1.fillStyle = '#d2a92d';
                   ctx1.fillText('亚健康', 0, 10);
                } else if (score1 > 71 && score1 <= 80) {
                  ctx1.fillStyle = '#d2a92d';
                     ctx1.fillText('普通', 0, 10);
                } else if (score1 > 81 && score1 <= 90) {
                  ctx1.fillStyle = '#d2a92d';
                    ctx1.fillText('平均', 0, 10);
               }else if(score1 > 91 && score1 <= 100){
                    ctx1.fillStyle = '#d2a92d';
                    ctx1.fillText('良好', 0, 10);
               }

                    ctx1.restore();
                    drawC();


//            ctx1.restore();


            }

            drawFrame2();

        }, 200)


    }