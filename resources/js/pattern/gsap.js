gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    pin: true,
    start: "top 0",
    end: "+=500",
    scrub: 1,
    // markers: true,
  },
});



//윈도우가 스크롤 됐을 때
window.addEventListener("scroll",_.throttle(
  
  function () {
    const scrolled = window.scrollY; /* 스크롤 값 */
    console.log(`스크롤 값 : ${scrolled}`);
   
    //만약 y축 스크롤 값이 80보다 크다면
    if(scrolled > 80) {
      gsap.to(".inner",{
        y : -100,
        duration :1 
    
      });
    }else{
      gsap.to(".inner",{
        y : 0,
        duration :1 
    
      });
    }


  }



)); 





gsap.from(".title", {
  scrollTrigger: {
    trigger: ".title",  // 애니메이션을 트리거할 요소
    start: "top 30%",     // 애니메이션 시작 위치
    end: "bottom",       // 애니메이션 종료 위치
    scrub: true,          // 스크롤과 애니메이션을 동기화
    markers: true          // 디버깅용 마커 표시 (개발 중에만 사용)
  },
           // 애니메이션 속성
  y: -260,                 // y축 이동
  duration: 1            // 애니메이션 지속 시간
});