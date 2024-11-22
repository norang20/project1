gsap.registerPlugin(ScrollTrigger);
// intro 텍스트 애니메이션
gsap.registerPlugin(TextPlugin);

/* 커서 깜빡깜빢 */
gsap.set(".cursor", { opacity: 0 });
let cursor = gsap.to(".cursor", {
  delay: 1,
  opacity: 1,
  repeat: -1,
  yoyo: true,
  duration: 0.01,
  repeatDelay: 0.5,
});
let masterTl = gsap.timeline({ repeat: -1 }).pause();

gsap.set(".fixed-txt span", { y: "100%", opacity: 0 });

gsap.fromTo(
  ".fixed-txt span",
  { y: "100%", opacity: 1 },
  {
    delay: 3,
    y: "0%",
    opacity: 1,
    duration: 0.7,
    ease: "power2.out",
    stagger: { amount: 1, each: 0.1 },
    onComplete: () => masterTl.play(),
  }
);

/* 단어 하나씩 옆으로 나오면서 단어 하나씩 바꾸기 */
const words = ["BELIEF", "INNOVATION", "INGREDIENT", "CREATED BY SULWHASOO"];
gsap.fromTo(
  ".fixed-txt span",
  { y: "100%", opacity: 1 },
  {
    delay: 3,
    y: "0%",
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
    stagger: { amount: 1, each: 0.1 },
    onComplete: () => masterTl.play(),
  }
);

words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(".text", { duration: 1, text: word });
  masterTl.add(tl);
});
////////////////////////////////////////////////////

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
// window.addEventListener("scroll", function () {
//   const scrolled = window.scrollY; /* 스크롤 값 */
//   console.log(`스크롤 값 : ${scrolled}`);

//   //만약 y축 스크롤 값이 80보다 크다면
//   if (scrolled > 80) {
//     gsap.to("#header", {
//       y: -100,
//       duration: 1,
//     });
//     gsap.to("#to-top", {
//       x: -70,
//       duration: 0.3,
//     });
//   } else {
//     gsap.to("#header", {
//       y: 0,
//       duration: 1,
//     });
//     gsap.to("#to-top", {
//       x: 0,
//       duration: 0.3,
//     });
//   }
// });

// setting
// https://unpkg.co/gsap@3/dist/gsap.min.js
// https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js

gsap.to(".cover", {
  top: "-100%",
  // duration: 1,
  scrollTrigger: {
    trigger: ".intro", //객체기준범위
    start: "0% 0%", //시작 지점
    end: "90% 80%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
});

gsap.to(".box1", {
  scale: 10,
  borderRadius: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".section", //객체기준범위
    start: "0% 10%", //시작 지점
    end: "100% 80%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1, //부드러운 스크러빙
    markers: true, //개발가이드선
  },
});

gsap.to(".box2", {
  x: 300,
  y: 200,
  rotation: 360,
  scrollTrigger: {
    trigger: ".section2", //객체기준범위
    start: "0% 30%", //시작 지점
    end: "100% 80%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
});
