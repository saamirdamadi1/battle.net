// start________________________________________________________________loading__page
const loading = (e) => {
  return document.querySelector(e);
};
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loading(".loading").remove();
  }, 2000);
});
// start______________________________________header__In__Mobile
let rightOpen = document.querySelector("#rightOpen");
let leftOpen = document.querySelector("#leftOpen");
let rightMenu = document.querySelector("#rightMenu");
let leftMenu = document.querySelector("#leftMenu");
let body = document.querySelector("#body");
let lc = document.querySelector("#lc");
let rc = document.querySelector("#rc");
rightOpen.addEventListener("click", () => {
  body.classList.add("overflow-hidden");
  rightMenu.classList.remove("translate-x-full");
  if (!leftMenu.classList.contains("-translate-x-full")) {
    leftMenu.classList.add("-translate-x-full");
  }
});
leftOpen.addEventListener("click", () => {
  body.classList.add("overflow-hidden");
  leftMenu.classList.remove("-translate-x-full");
  if (!rightMenu.classList.contains("translate-x-full")) {
    rightMenu.classList.add("translate-x-full");
  }
});
lc.addEventListener("click", () => {
  leftMenu.classList.add("-translate-x-full");
  body.classList.remove("overflow-hidden");
});
rc.addEventListener("click", () => {
  rightMenu.classList.add("translate-x-full");
  body.classList.remove("overflow-hidden");
});
// // start_______________________________________________________________________slider
// let slides = [...document.querySelectorAll(".slide")];
// let counter = 0;
// /*****************/
// let sliderbullets = document.querySelector("#sliderbullets");
// let bullets = slides.map((e, i) => {
//   return `<span class="bullet w-[40px] h-[4.5px] " data-id="${i}"></span>`;
// });
// sliderbullets.insertAdjacentHTML("afterbegin", bullets.join(""));

// [...document.querySelectorAll(".bullet")].forEach((elem) => {
//   elem.addEventListener("click", (e) => {
//     counter = e.target.dataset.id;
//     generateslider(counter);
//     e.target.classList.add("active");
//   });
// });

// /*****************/
// let generateslider = (c) => {
//   slides.forEach((elem, i) => {
//     elem.style.left = `${(i - c) * 100}%`;
//   });
//   document.querySelectorAll(".bullet").forEach((e, i) => {
//     e.classList.remove("active");
//     if (counter === i) {
//       e.classList.add("active");
//     }
//   });
// };
// generateslider(counter);
// /*****************/
// let prevbtn = document.querySelector("#prevbtn");
// let nextbtn = document.querySelector("#nextbtn");
// let next = () => {
//   if (counter === slides.length - 1) {
//     counter = 0;
//     generateSlider(counter);
//   } else {
//     counter++;
//     generateSlider(counter);
//   }
// };
// let prev = () => {
//   if (counter === 0) {
//     counter = slides.length - 1;
//     generateslider(counter);
//   } else {
//     counter--;
//     generateslider(counter);
//   }
// };
// nextbtn.addEventListener("click", () => {
//   next();
// });
// prevbtn.addEventListener("click", () => {
//   prev();
// });
// /*****************/
// document.addEventListener("keyup", (e) => {
//   if (e.key === "ArrowRight") {
//     next();
//   } else if (e.key === "ArrowLeft") {
//     prev();
//   }
// });
// /*****************/
// let intervalstate = true;
// let interval = setInterval(() => {
//   next();
// }, 4000);
// /*****************/
// document.querySelector("#interval").addEventListener("click", () => {
//   if (intervalstate) {
//     clearInterval(interval);
//     intervalstate = false;
//     document.querySelector("#interval").innerHTML =
//       '<svg class="w-[20px] h-[20px] fill-[#84868b] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-play-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-play-filled">Play</title><path d="M7.768 5.489A.5.5 0 0 0 7 5.911v12.178a.5.5 0 0 0 .768.422l9.57-6.09a.5.5 0 0 0 0-.843L7.767 5.49Z"></path></svg>';
//   } else {
//     interval = setInterval(() => {
//       next();
//     }, 3000);
//     intervalstate = true;
//     document.querySelector("#interval").innerHTML =
//       '<svg class="w-[20px] h-[20px] fill-[#84868b] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-pause-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-pause-filled">Pause</title><path d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"></path></svg>';
//   }
// });
let slides = [...document.querySelectorAll(".slide")];
let nextbtn = document.querySelector("#nextbtn");
let prevbtn = document.querySelector("#prevbtn");
let stopbtn = document.querySelector("#stopbtn");
let pagination = document.querySelector("#pagination");
let slider = document.querySelector(".slider");
let counter = 0;
// start generate slider
let generateSlider = (c) => {
  slides.forEach((elem, index) => {
    elem.style.left = `${(index - c) * 100}%`;
  });
  activeAdder();
};
// end generate slider
generateSlider(counter);
let next = () => {
  if (counter === slides.length - 1) {
    counter = 0;
    generateSlider(counter);
  } else {
    counter++;
    generateSlider(counter);
  }
};
let prev = () => {
  if (counter === 0) {
    counter = slides.length - 1;
    generateSlider(counter);
  } else {
    counter--;
    generateSlider(counter);
  }
};
function activeAdder() {
  let bullets = [...document.querySelectorAll(".bullet")];
  bullets.forEach((elem, index) => {
    elem.classList.remove("active");
    if (index === counter) {
      elem.classList.add("active");
    }
  });
}
nextbtn.addEventListener("click", () => {
  next();
});
prevbtn.addEventListener("click", () => {
  prev();
});
let autoSlide = setInterval(() => {
  next();
}, 3000);
let intervalStatus = true;
stopbtn.addEventListener("click", () => {
  if (intervalStatus === true) {
    clearInterval(autoSlide);
    stopbtn.innerHTML = "play";
    intervalStatus = false;
  } else {
    autoSlide = setInterval(() => {
      next();
    }, 3000);
    stopbtn.innerHTML = "stop";
    intervalStatus = true;
  }
});
let bullets = slides.map((elem, index) => {
  return `<div class="bullet" data-id="${index}"></div>`;
});
pagination.insertAdjacentHTML("afterbegin", bullets.join(""));
activeAdder();
document.querySelectorAll(".bullet").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    counter = +e.target.dataset.id;
    generateSlider(counter);
  });
});

let tsx = 0;
let tex = 0;
let swipeHandler = () => {
  if (tsx < tex) {
    prev();
  } else if (tsx > tex) {
    next();
  }
  tex = 0;
  tsx = 0;
};

slider.addEventListener("touchstart", (e) => {
  tsx = e.changedTouches[0].screenX;
});
slider.addEventListener("touchend", (e) => {
  tex = e.changedTouches[0].screenX;
  swipeHandler();
});
// start______________________________________region/lan
function toggleDiv() {
  const hiddenDiv = document.getElementById('hiddenDiv');
  hiddenDiv.classList.toggle('hidden');
  hiddenDiv.classList.toggle('flex');
}