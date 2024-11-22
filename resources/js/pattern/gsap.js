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

// 첫 번째 애니메이션 - .section-contentInner 스크롤에 반응
gsap.to(".section-contentInner", {
  scrollTrigger: {
    trigger: ".section-contentInner", // 트리거할 요소
    start: "top center", // 애니메이션 첫번째 인수 :트리거 위치 두번째 인수: 뷰포트에서 트리거위치 (section-contentInner의 상단이 화면 중앙에 올 때) ...start의 두개의 인수가 맞닿아야 애니메이션 시작
    end: "bottom 90%", // 애니메이션 종료 위치
    scrub: 1, // 스크롤에 따라 애니메이션을 부드럽게 동기화
    pin: false, // 애니메이션이 실행되면서 해당 요소를 고정시킬지 여부
    markers: false, // 디버그를 위한 마커를 숨김
  },
  y: -100, // 요소를 Y축으로 -150px 이동
  ease: "power2.out", // 애니메이션 이징 (부드럽게 끝내기)
  duration: 1, // 애니메이션 지속 시간 (이 값을 변경하면 애니메이션 속도 조정 가능)
});

// 두 번째 애니메이션 - .title2 스크롤에 반응
gsap.to(".title2", {
  scrollTrigger: {
    trigger: ".title2", // 트리거할 요소
    start: "top center", // 애니메이션 시작 위치
    end: "bottom 10%", // 애니메이션 종료 위치
    scrub: 1, // 스크롤에 따라 애니메이션을 부드럽게 동기화
    pin: false, // 해당 요소를 고정시키지 않음
    markers: false, // 디버그를 위한 마커 숨기기
  },
  y: -100, // .title2 요소를 Y축으로 -100px 이동
  duration: 1.5, // 애니메이션 지속 시간 (조정 가능)
  ease: "power2.inOut", // 부드러운 이징 효과
});

// **throttle을 Lodash 없이 직접 구현할 경우** 아래와 같이 작성할 수 있습니다.
