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

// 두 번째 애니메이션 - .title2 스크롤에 반응
gsap.from(".title2", {
  scrollTrigger: {
    trigger: ".title2", // 트리거할 요소
    start: "top 80%", // 요소가 화면 80% 지점에서 애니메이션 시작
    end: "bottom 60%", // 요소가 화면 60% 지점에서 애니메이션 종료
    scrub: 1, // 부드러운 스크롤 동기화
    markers: false,
  },
  y: 70, // 70px 아래에서 위로 이동
  opacity: 0, // 초기 투명 상태
  ease: "power2.out", // 부드럽게 끝나는 이징
  duration: 1, // 애니메이션 지속 시간
});

// **throttle을 Lodash 없이 직접 구현할 경우** 아래와 같이 작성할 수 있습니다.
