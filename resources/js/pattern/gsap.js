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
// 첫 번째 애니메이션
gsap.to(".section-contentInner", {
  scrollTrigger: {
    trigger: ".section-contentInner",
    start: "-200% center",
    end: "bottom 10%",
    scrub: 1, // 더 부드러운 반응 속도를 위해 scrub을 1로 설정
    pin: false,
  },
  y: -150,
  duration: 1,
});

// 두 번째 애니메이션
gsap.to(".title2", {
  scrollTrigger: {
    trigger: ".title2",
    start: "-300% center",
    end: "bottom 10%",
    scrub: 1, // 애니메이션과 스크롤을 더 부드럽게 동기화
    pin: false,
  },
  y: -100,
  duration: 1.5,
  ease: "power2.inOut", // 부드럽고 자연스러운 이징
});
