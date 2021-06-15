$(function(){
  
  $('.humberger').on("click",function() {
    //ハンバーガーボタンの変形
    $(this).css('z-index','110')
    $('.bar-top').toggleClass("active-top");
    $('.bar-bottom').toggleClass("active-bottom");

    //メニューの開閉
    $(".mask").toggleClass('open');

    //メニューがにゅんってなる動き
    if($('.menu-item').hasClass('off')){
      $('.menu-item').removeClass('off');
      $('.menu-item').animate({'marginLeft' : '550px'}, 450).addClass('on');
      $(".bar").css("background", "#fff");
    }else{
      $('.menu-item').addClass('off');
      $('.menu-item').animate({'marginLeft' : '0px'}, 300);
      $(".bar").css("background", "#000");
    }  
  });
});
