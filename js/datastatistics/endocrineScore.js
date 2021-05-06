/*
* 内分泌分数值
*/
/**
 *  身体当前得分
 **/

window.onload = function () {
var canvas1 = document.getElementById('endocrineScore'),
    ctx = canvas.getContext('2d'),
    cWidth = canvas.width,
    cHeight = canvas.height,
    score = canvas.attributes['data-score'].value,
    /*标尺*/
        /*stage = ['差', '较差', '一般', '良好', '优秀'],
        radius = canvas.width / 3,
        deg0 = Math.PI / 9,*/
    /*刻度值指标*/
        deg1 = Math.PI * 11 / 45;
        var dot = new Dot1(),
        dotSpeed = 0.1,
        textSpeed = Math.round(dotSpeed * 100 / deg1),
        angle = 0,
        credit = 0;


        function drawC2() {


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
                ctx.strokeStyle = "#e7812c";
                ctx.lineWidth = 10;
                //  ctx.lineCap="round";
                ctx.arc(0, 0, radius + 20, 0, aim, false);
                ctx.stroke();
                ctx.restore();
                ctx.save();
            }, 500);


        }


        /*指标*/
        function Dot2() {
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
        function text2(process) {
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
        function drawFrame2() {

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


            text2(score);


            ctx.save();

            ctx.save(); 
            /*会动层*/
            ctx.save();

            ctx.beginPath();
            ctx.strokeStyle = '#0043a8';
            ctx.lineWidth = 10;
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
            ctx.arc(0, 0, radius - 10, 0, 220 * Math.PI / 180, false);

            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#0043a8';
            ctx.arc(0, 0, radius + 10, 0, 220 * Math.PI / 180, false);


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


            ctx.rotate(Math.PI / 2 + deg0);
            for (i = 0; i < 5; i++) {
                ctx.fillStyle = '#e3a419';
                ctx.font = "12px Microsoft yahei";
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText(stage[i], 0, -radius);
                ctx.rotate(deg1);
            }


            ctx.restore();
            ctx.save();

            ctx.restore();
            drawC1();

        }

        drawFrame2();

    setTimeout(function () {
        function drawFrame3() {

            }

            drawFrame3();

        }, 200)

    }