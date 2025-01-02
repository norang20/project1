// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY; /* 스크롤 값 */
  console.log(`스크롤 값 : ${scrolled}`);

  //만약 y축 스크롤 값이 80보다 크다면
  if (scrolled > 80) {
    gsap.to("#header", {
      y: -100,
      duration: 1,
    });
    gsap.to("#to-top", {
      x: -70,
      duration: 0.3,
    });
  } else {
    gsap.to("#header", {
      y: 0,
      duration: 1,
    });
    gsap.to("#to-top", {
      x: 0,
      duration: 0.3,
    });
  }
});
console.log("안녕");

document.addEventListener("DOMContentLoaded", function () {
  // 약간의 지연을 주어 DOM이 완전히 준비되도록 함
  setTimeout(() => {
    const animations = [
      {
        element: ".section-contentInner",
        trigger: ".section-contentInner",
        start: "top 80%",
        end: "bottom 60%",
      },
      {
        element: ".title2",
        trigger: ".txt__price",
        start: "top top",
        end: "bottom bottom",
      },
      {
        element: ".txt2",
        trigger: ".section-img2",
        start: "top top",
        end: "top bottom",
      },
    ];

    animations.forEach(({ element, trigger, start, end }) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: 1,
          markers: false, // 프로덕션에서는 false로 설정
          // 모바일에서의 성능 최적화를 위한 옵션
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
        },
        y: 70,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
    });
  }, 100);
});
