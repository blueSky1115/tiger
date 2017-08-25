/**
 * Created by Dell on 2016/3/23.
 */


$(function(){
    var start = $('.alter');
    var aImg = $('img');
    var aFirst = $('.first');
    var aSecond = $('.second');
    var iNow = 0;
    var onoff = true;//点击开始抽奖开关，一次

    start.on('click', function(){
        if(onoff){    //点击开始抽奖开关，一次
            var num1 = Math.ceil(Math.random()*10+13);
            var num2 = Math.ceil(Math.random()*10+13);
            var num3 = Math.ceil(Math.random()*10+13);

            $('.s1').find('.imgBox').css('transform', 'translate3d(0,-'+num1*100+'%,0)');
            $('.s1').find('.imgBox').css('-webkit-transform', 'translate3d(0,-'+num1*100+'%,0)');//兼容

            $('.s2').find('.imgBox').css('transform', 'translate3d(0,-'+num2*100+'%,0)');
            $('.s2').find('.imgBox').css('-webkit-transform', 'translate3d(0,-'+num2*100+'%,0)');//兼容


            $('.s3').find('.imgBox').css('transform', 'translate3d(0,-'+num3*100+'%,0)');
            $('.s3').find('.imgBox').css('-webkit-transform', 'translate3d(0,-'+num3*100+'%,0)');//兼容


            //var str1 = $('.s1').find('img').eq(num1).attr('src');
            //var str2 = $('.s2').find('img').eq(num2).attr('src');
            //var str3 = $('.s3').find('img').eq(num3).attr('src');
            //
            //$('.prize1').eq(0).attr('src', str1);
            //$('.prize1').eq(1).attr('src', str2);
            //$('.prize1').eq(2).attr('src', str3);
        }
        onoff = false;//点击开始抽奖开关，一次

    });
    $('.prizeBtn').on('click', function(){
        //if(!onoff){
            $('.pupop').show();
        //}
    });

    $('.sure').on('click', function(){
        //if(!onoff){
            $('.pupop').hide();
        //}

    })

});




