// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

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
