// メニューバー
$('#toggle').click(function() {
   $(this).toggleClass("active");
   $('#overlay').toggleClass("open");
   if ($("html div").not("#overlay").hasClass("blur")){
      $("html div").not("#overlay").not(".button_container").removeClass("blur")
   }else{
      $("html div").not("#overlay").not(".button_container").addClass("blur")
   }
});

// 特定の位置までスクロール
$('.menu_aboutme').click(function() {
  $("html,body").animate({scrollTop:$(".profile_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_works').click(function() {
  $("html,body").animate({scrollTop:$(".works_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_skills').click(function() {
  $("html,body").animate({scrollTop:$(".skill_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_contact').click(function() {
  $("html,body").animate({scrollTop:$(".contact_title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});
