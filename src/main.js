import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
// ,Draggable,MotionPathPlugin



ScrollTrigger.create({
    trigger: ".line_drawing",
    start: "top center",
    end: "500px center",
    // markers:true,
    animation: gsap.to('.line_drawing',{height:'31vw'}),
    scrub: true,
  });


//graph_red
ScrollTrigger.create({
    trigger: ".section02",
    start: "100px center",
    end: "150px center",
    // markers:true,
    animation: gsap.to('.graph_red', { 
      width: '9vw',             // 로딩 박스의 스케일을 1로 설정
      ease: "none",          // 애니메이션 속도
    }),
    scrub: true,
  });



//graph_yellow
ScrollTrigger.create({
    trigger: ".section02",
    start: "150px center",  // 스크롤 시작 위치
    end: "200px center",  // 끝 위치
    // markers:true,
    animation: gsap.to('.graph_yellow', { 
      width: '19vw',             // 로딩 박스의 스케일을 1로 설정
      ease: "none",          // 애니메이션 속도
    }),
    scrub: true,
  });



//graph_green
ScrollTrigger.create({
    trigger: ".section02",
    start: "200px center",
    end: "250px center",
    // markers:true,
    animation: gsap.to('.graph_green', { 
      width: '25vw',             // 로딩 박스의 스케일을 1로 설정
      ease: "none",          // 애니메이션 속도
    }),
    scrub: true,
  });




//섹션3 텍스트
const circle_text = gsap.timeline();

circle_text.from(".circle_text01", { stagger: 0.1, y: 50, opacity: 0 });
circle_text.from(".circle_text02", { stagger: 0.1, y: 50, opacity: 0 });
circle_text.from(".circle_text03", { stagger: 0.1, y: 50, opacity: 0 });
circle_text.from(".circle_text04", { stagger: 0.1, y: 50, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "50% center",
  end: "70% center",
  // markers:true,
  animation: circle_text,
  scrub: 8,
});



//section03_text
const section03_text = gsap.timeline();

section03_text.from(".section03_text", { stagger: 0.1, y: 40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section03",
  start: "top center",
  end: "300px center",
  // markers:true,
  animation: section03_text,
  scrub: 8,
});


//연달아 올라오는 4줄
ScrollTrigger.create({
  trigger: ".section03",
  start: "1600px center",
  end: "bottom center",
  // markers:true,
  animation: gsap.from(".ani", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: true,
});




//연달아 나오는 원
ScrollTrigger.create({
  trigger: ".section05",
  start: "10px center",
  end: "+=300px",
  // markers:true,
  animation: gsap.from(".circle3", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: 5,
});



//섹션6 텍스트 왼
ScrollTrigger.create({
  trigger: ".section06",
  start: "-200px center",
  end: "100px center",
  // markers: true,
  animation: gsap.fromTo('.left', 
    { width: 0, x: -1500, opacity: 1 }, // 초기 상태: height 0, y 위치 위로 -50, opacity 0
    { width: '78vw', x: 0, opacity: 1, duration: 1 } // 애니메이션 후 상태: height 78vw, y 0, opacity 1
  ),
  scrub: 3,
});



//섹션6 텍스트 오
ScrollTrigger.create({
  trigger: ".section06",
  start: "-200px center",
  end: "100px center",
  // markers: true,
  animation: gsap.fromTo('.right  ', 
    { width: 0, x: -100, opacity: 1 }, // 초기 상태: height 0, y 위치 위로 -50, opacity 0
    { width: '78vw', x: 0, opacity: 1, duration: 1 } // 애니메이션 후 상태: height 78vw, y 0, opacity 1
  ),
  scrub: 3,
});




//오 박스 2
ScrollTrigger.create({
  trigger: ".bg_full_2",
  start: "top center",
  end: "300px center",
  // markers:true,
  animation: gsap.from(".right_box", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: 3,
});



//왼 박스 2
ScrollTrigger.create({
  trigger: ".bg_full_3",
  start: "top center",
  end: "300px center",
  // markers:true,
  animation: gsap.from(".left_box", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: 3,
});


ScrollTrigger.create({
  trigger: ".section08_img",
  start: "top center",
  end: "800px center",
  // markers:true,
  animation: gsap.to('.section08_img',{height:'31vw'}),
  scrub: true,
});







markers();
