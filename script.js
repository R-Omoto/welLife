//top-img
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#top-img').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});

// modal
$(function(){
  $('#contact-link').click(function(){
    $('#modal').fadeIn();
    $('.layer').css('visibility','visible');
  });
  $('#close-button').click(function(){
    $('#modal').hide();
    $('.layer').css('visibility','hidden');
  });
});


// question scroll event
$(function () {
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
    scrollY = $(window).scrollTop(),
    slideInPosition = $('.beforeSlideIn').offset().top;
    
    if(scrollY > slideInPosition - windowHeight){
      $('.beforeSlideIn').addClass('slideIn');
      $('.beforeSlideIn').removeClass('noView');
    }
  });
});

// logo scroll event
$(function () {
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
    scrollY = $(window).scrollTop(),
    slideInPosition = $('#logo-wrapper').offset().top;
    
    if(scrollY > slideInPosition - windowHeight){
      $('#logo-wrapper').addClass('logoAnime');
      $('#logo-wrapper').removeClass('noView');
    }
  });
});

// service scroll event

$(function () {
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
    scrollY = $(window).scrollTop(),
    slideInPosition = $('.service0').offset().top;
    
    if(scrollY > slideInPosition - windowHeight){
      $('.service0').addClass('serviceAnime');
      $('.beforeSlideIn').removeClass('noView');
    }
  });
});

$(function () {
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
    scrollY = $(window).scrollTop(),
    slideInPosition = $('.service-L').offset().top;
    
    if(scrollY > slideInPosition - windowHeight){
      $('.service-L').addClass('serviceAnimeL');
      $('.beforeSlideIn').removeClass('noView');
    }
  });
});

$(function () {
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
    scrollY = $(window).scrollTop(),
    slideInPosition = $('.service2').offset().top;
    
    if(scrollY > slideInPosition - windowHeight){
      $('.service2').addClass('serviceAnime');
      $('.beforeSlideIn').removeClass('noView');
    }
  });
});


// トップに戻るボタン
 $(function (){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
	  if (scroll >= 400){
     $('#page-top').addClass('topButtonUpAnime');
     $('#page-top').removeClass('topButtonDownAnime')
	  }else{
      if($('#page-top').hasClass('topButtonUpAnime')){
        $('#page-top').addClass('topButtonDownAnime');
        $('#page-top').removeClass('topButtonUpAnime');
      }
    }
  })
});

$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});


// reload page top
$(document).ready(function(){
  $(this).scrollTop(0);
});