/**
 * === === === === === === === ===
 *
 *          TIME LINE
 *
 * === === === === === === === ===
 */

const main = document.getElementById("main");
const body = document.getElementById("body");
const music = document.getElementById("music");
let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });

// intro

tl.to(`#intro-title-1`, { opacity: 1, duration: 2 });
tl.to(`#intro-title-1`, { opacity: 0, duration: 2, delay: 1 });

tl.to(`#intro-title-2`, { opacity: 1, duration: 3 });
tl.to(`#intro-title-2`, { opacity: 0, duration: 1, delay: 1 });

tl.to(`#intro-title-3`, { opacity: 1, duration: 3 });
tl.to(`#intro-title-3`, { opacity: 0, duration: 1, delay: 1 });

tl.to(`#intro-alert-1`, { opacity: 1, duration: 5 });
tl.to(`#intro-alert-1`, { opacity: 0, duration: 1, delay: 1 });

tl.to(`#intro-btn-1`, { opacity: 1, duration: 2 });
tl.add(() => {
  tl.pause();
});
tl.to(`#intro-btn-1`, { opacity: 0, duration: 2 });

// step 1

tl.to(`#step-1-title-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-1-title-1`, { opacity: 0, duration: 1, delay: 1 });

tl.to(`#step-1-breathing`, { opacity: 1, duration: 2, display: "block" });
tl.to(`#step-1-breathing`, { opacity: 0, duration: 1, delay: 60 });

// step 2

tl.to(`#step-2-title-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-2-title-1`, { opacity: 0, duration: 1, delay: 1 });

tl.to(`#step-2-title-2`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-2-title-2`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-2-title-3`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-2-title-3`, { opacity: 0, duration: 1, delay: 10 });

// step 3

tl.to(`#step-3-title-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-3-title-1`, { opacity: 0, duration: 1, delay: 1 });

tl.to(`#step-3-title-2`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-3-title-2`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-3-p-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-3-p-1`, { opacity: 0, duration: 1, delay: 10 });

tl.to(`#step-3-title-3`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-3-title-3`, { opacity: 0, duration: 1, delay: 3 });

// step 4

tl.to(`#step-4-p-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-p-1`, { opacity: 0, duration: 1, delay: 10 });
tl.add(() => {
  body.style.background = "#e9ffe8";
});
tl.to(`#step-4-title-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-title-1`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-4-p-2`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-p-2`, { opacity: 0, duration: 1, delay: 10 });

//questions

tl.to(`#step-4-question-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-question-1`, { opacity: 0, duration: 1, delay: 5 });

tl.to(`#step-4-question-2`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-question-2`, { opacity: 0, duration: 1, delay: 5 });

tl.to(`#step-4-question-3`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-question-3`, { opacity: 0, duration: 1, delay: 5 });

tl.to(`#step-4-question-4`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-question-4`, { opacity: 0, duration: 1, delay: 5 });

tl.to(`#step-4-question-5`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-question-5`, { opacity: 0, duration: 1, delay: 5 });

tl.to(`#step-4-question-6`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-question-6`, { opacity: 0, duration: 1, delay: 5 });

tl.to(`#step-4-question-7`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-4-question-7`, { opacity: 0, duration: 1, delay: 5 });

// step 5

tl.to(`#step-5-title-1`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-5-title-1`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-5-title-2`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-5-title-2`, { opacity: 0, duration: 1, delay: 3 });
tl.add(() => {
  body.style.background = "#dfdef9";
});

tl.to(`#step-5-title-3`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-5-title-3`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-5-title-4`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-5-title-4`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-5-title-5`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-5-title-5`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-5-title-6`, { opacity: 1, duration: 5, display: "block" });
tl.to(`#step-5-title-6`, { opacity: 0, duration: 1, delay: 3 });

// step 6

tl.to(`#step-6-title-1`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-6-title-1`, { opacity: 0, duration: 1, delay: 2 });

tl.to(`#step-6-title-2`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-6-title-2`, { opacity: 0, duration: 1, delay: 2 });

tl.add(() => {
  body.style.background = "#c4f1ff";
});

tl.to(`#step-6-title-3`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-6-title-3`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-6-p-1`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-6-p-1`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#step-6-title-4`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-6-title-4`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-6-title-5`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-6-title-5`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-6-p-2`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-6-p-2`, { opacity: 0, duration: 1, delay: 4 });

// step 7

tl.add(() => {
  body.style.background = "#f4f4f4";
});

tl.to(`#step-7-title-1`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-7-title-1`, { opacity: 0, duration: 1, delay: 3 });

tl.to(`#step-7-p-1`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-7-p-1`, { opacity: 0, duration: 1, delay: 6 });

// step 8

tl.to(`#step-8-title-1`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-8-title-1`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#step-8-title-2`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-8-title-2`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#step-8-title-3`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-8-title-3`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#step-8-title-4`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-8-title-4`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#step-8-title-5`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-8-title-5`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#step-8-title-6`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#step-8-title-6`, { opacity: 0, duration: 1, delay: 4 });

// outro

tl.add(() => {
  body.style.background = "#000";
  body.style.color = "#f4f4f4";
});

tl.to(`#outro-title-1`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#outro-title-1`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#outro-title-2`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#outro-title-2`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#outro-title-3`, { opacity: 1, duration: 3, display: "block" });
tl.to(`#outro-title-3`, { opacity: 0, duration: 1, delay: 4 });

tl.to(`#outro-alert-1`, { opacity: 1, duration: 3, display: "block" });

tl.add(() => {
  tl.pause();
});

/**
 * === === === === === === === ===
 *
 *          Functions
 *
 * === === === === === === === ===
 */

const resumeTimeline = () => {
  tl.resume();
  body.style.background = "#fee8ff";
  body.style.color = "#0f0f0f";
  console.log("resume");
  music.play();
};

