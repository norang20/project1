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

gsap.from(".section-contentInner", {
  scrollTrigger: {
    trigger: ".section-contentInner",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
    markers: false,
  },
  y: 70, // 아래에서 위로 이동 (초기 위치)
  opacity: 0, // 투명도 설정 (처음에 투명)
  ease: "power2.out",
  duration: 1,
});
gsap.from(".title2 ", {
  scrollTrigger: {
    trigger: ".txt__price",
    start: "top top", // 애니메이션 시작시점
    end: "bottom bottom", // 애니메이션 종료시점
    scrub: 1,
    markers: true, // 디버깅용으로 마커를 표시
  },
  y: 70, // 아래에서 위로 이동
  opacity: 0, // 처음에 투명
  ease: "power2.out",
  duration: 1,
});
gsap.from(".txt2 ", {
  scrollTrigger: {
    trigger: ".section-img2",
    start: "top top", // 애니메이션 시작시점
    end: "top bottom", // 애니메이션 종료시점
    scrub: 1,
    markers: true, // 디버깅용으로 마커를 표시
  },
  y: 70, // 아래에서 위로 이동
  opacity: 0, // 처음에 투명
  ease: "power2.out",
  duration: 1,
});
