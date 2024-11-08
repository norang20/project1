AOS.init();
/* 햄버거 메뉴 보이게 */
$(".all-menu").click(function () {
  $("#nav-all").addClass("active");
});

$(".close").click(function () {
  $("#nav-all").removeClass("active");
});

/* 햄버거 메뉴 메인메뉴 클릭시 하단 메뉴 보이게 */
$("#nav-all > .inner > .gnb__depth1 > li ").mouseenter(function () {
  $(this).find(".gnb__depth2").stop().slideDown(200);
});

$("#nav-all > .inner > .gnb__depth1 > li ").mouseleave(function () {
  $(this).find(".gnb__depth2").stop().slideUp(200);
});
/* 검색창 */
$(".util > .search").click(function () {
  $(".modal-search").css({
    top: "0",
  });
});

$(".close").click(function () {
  $(".modal-search").css({
    top: "-300px", // 모달을 숨길 위치로 설정
  });
});

$(".lang__btn").click(function () {
  $(".lang__lst").show();
});

$(".lang__lst li").click(function () {
  $(".lang__lst").hide();
});
$(".lang__lst").mouseleave(function () {
  $(this).hide();
});

/* new fullpage("#fullpage", {
  // 옵션 설정
  /*         sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke"] 
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"] 
  menu: "#header" 
  scrollingSpeed: 1000 
});
 */
