AOS.init();
// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$();
$(".all-menu").click(function () {
  $("#nav-all").addClass("active");
});

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$("#nav-all .close").click(function () {
  $("#nav-all").removeClass("active");
});

$("#gnb").mouseenter(function () {
  $("#header").addClass("active");
});

$("#gnb").mouseleave(function () {
  $("#header").removeClass("active");
});

$(".lang__btn").click(function () {
  $(".lang__lst").show();
});

$(".lang__lst li").click(function () {
  $(".lang__lst").hide();
});

//#to-top 눌렀을 때 상단으로 이동하기
$("#nav-all > .gnb__depth1 > li ").mouseenter(function () {
  $(this).find(".gnb__depth2").stop().slideDown(200);
});

$("#nav-all > .gnb__depth1 > li ").mouseleave(function () {
  $(this).find(".gnb__depth2").stop().slideUp(200);
});

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

$(".familysite").click(function () {
  $(this).siblings(".familysite__lst").find("li").toggleClass("active");
});

/* include 스크립트 적용 안됨*/
