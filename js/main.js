//スライダー
$(function(){
    $('.p-mv__slick').slick({
      autoplay: true, // 自動再生
      autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
      infinite: true, // 無限スライド
      arrows: false,
    });
  });

  //ヘッダースクロール時色変化
  $(window).scroll(function () {
    if($(window).scrollTop() > 100) {
      $('.l-header').addClass('change-color');
    } 
  });

  //aboutテキスト右からフェードイン
  $(function(){
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      }
    });
  });

  //conceptテキスト左からフェードイン
  $(function(){
    $(".inview_re").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      } 
    });
  });

 //ハンバーガーメニュー
let open_btn = document.querySelector('.l-header__burger-btn'); //ハンバーガーボタンの要素を取得し、変数hamに格納
let close_btn = document.querySelector('.u-close'); //ナビゲーションメニューの要素を取得し、変数navに格納
let nav = document.querySelector('.nav_sp .l-header__nav');

open_btn.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  nav.classList.add('is-open'); // ハンバーガーメニューにis-openクラスを付ける
});

close_btn.addEventListener('click', function () { //×ボタンをクリックしたら
  nav.classList.remove('is-open'); //is-openクラスを消す
});

$("a").on("click", function() {
  $(".nav_sp .l-header__nav").removeClass("is-open"); //aタグクリックでメニューリスト消える
  });

//spのand moreを押したら、残りの画像表示、非表示
  $(function() {
    if (window.matchMedia( "(max-width: 768px)" ).matches) {
  /* ウィンドウサイズが 768px以下の場合のコードをここに */
        $('.p-product__box:nth-child(n+3)').hide();
  } else {
  /* ウィンドウサイズが 768px以上の場合のコードをここに */
  ;
  }
        
  
        $('.p-product__button').click(function() {
          $('.p-product__box:nth-child(n+3)').slideToggle(700);
        });

        $('.p-product__button').on('click', function () {
          if ($(this).text() === 'close') {
            $(this).text('and more');
          } else {
            $(this).text('close');
          }
        });
  });

  //パララックス
  let images = document.querySelectorAll('.para');
 
// 要素の繰り返し処理
for (var i = 0; i < images.length; i++) {
  new simpleParallax(images, {
    delay: .7,
    transition: 'cubic-bezier(0,0,0,1)'
  });
}