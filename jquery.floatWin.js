(function($){
    $.fn.floatWin = function(options){
        var defaults = {
            srcId : "", //漂浮图片路径
            speed : 20 //漂浮速度 单位毫秒
        };
        var options = $.extend(defaults, options);
        var html = "<div id='float_ad' style='position:absolute;left:0px;top:0px;z-index:9999;cleat:both;'></div>";
        $('body').append(html);

        var div = $('#' + options.srcId);
        div.append('<div class="close_float_ad"><input type="button" value="关闭" id="close_float_ad"/></div>');
        $('#float_ad').append(div);

        function init(){
            var x = 0,y = 0 
            var xin = true, yin = true 
            var step = 1 
            var delay = 10 
            var obj = $('#' + options.srcId); 
            obj.livequery(function(){
                var float = function(){
                    var L = T = 0;
                    var OW = obj.width();//当前广告的宽
                    var OH = obj.height();//高
                    var DW = window.innerWidth; //浏览器窗口的宽
                    var DH = window.innerHeight; 

                    x = x + step *( xin ? 1 : -1 ); 
                    if (x < L) { 
                        xin = true; x = L
                    } 
                    if (x > DW-OW-1){//-1为了ie
                        xin = false; x = DW-OW-1
                    } 

                    y = y + step * ( yin ? 1 : -1 ); 
                    if (y > DH-OH-1) { 
                        yin = false; y = DH-OH-1 ;
                    }
                    if (y < T) {
                        yin = true; y = T
                    } 

                    var left = x ; 
                    var top = y; 

                    obj.css({'top':top,'left':left});
                }
                var itl = setInterval(float,options.speed);
                $('#float_ad').mouseover(function(){clearInterval(itl)}); 
                $('#float_ad').mouseout(function(){itl=setInterval(float, options.speed)} )
            });
            // 点击关闭
            $('#close_float_ad').on('click',function(){
                $('#float_ad').hide();
            });
        }

       init();

    }; //floatAd

})(jQuery);