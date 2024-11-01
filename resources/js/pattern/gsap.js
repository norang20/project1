AOS.init({
  duration: 1200,
});

gsap.registerPlugin(ScrollTrigger);

//윈도우가 스크롤 됐을 때
window.addEventListener(
  "scroll",
  _.throttle(function () {
    const scrolled = window.scrollY; /* 스크롤 값 */
    console.log(`스크롤 값 : ${scrolled}`);

    //만약 y축 스크롤 값이 80보다 크다면
    if (scrolled > 80) {
      gsap.to(".inner", {
        y: -100,
        duration: 1,
      });
      gsap.to("#to-top", {
        x: -70,
        duration: 0.3,
      });
    } else {
      gsap.to(".inner", {
        y: 0,
        duration: 1,
      });
      gsap.to("#to-top", {
        x: 0,
        duration: 0.3,
      });
    }
  })
);

gsap.to(".section-contentInner", {
  /* 움직임을 주고 싶은 요소 */
  scrollTrigger: {
    trigger: ".section-contentInner", // 움직임의 기준이 되는 요소,, 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
    start: "-200% top", // 애니메이션 시작시점
    end: "bottom 10%", // 애니메이션 종료시점
    scrub: 2,
    pin: false,
    /* markers: true, */ // 트리거 마커의 표시(boolean)
  },
  y: -150,
  duration: 1,
});
