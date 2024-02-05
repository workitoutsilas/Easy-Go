// // Variables
// const head = document.querySelector(".heading"),
//   over = document.querySelector(".overlay"),
//   clear = document.querySelector(".intro-text"),
//   section = document.querySelectorAll(".unique"),
//   navLinks = document.querySelectorAll(".nav-link"),
//   divs = document.querySelectorAll(".anim-one"),
//   twos = document.querySelectorAll(".two");
// let bTn = document.querySelector("#btt");

// Page before Reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// //Intersection Observers  -- Animations
// let options = {
//   threshold: 0.4,
// };
// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("fade-in");
//       observer.unobserve(entry.target);
//     } else {
//       entry.target.classList.remove("fade-in");
//     }
//   });
// }, options);
// observer.observe(head);
// observer.observe(over);
// observer.observe(clear);

// // Intersection Observer --- Animations
// let option_2 = {
//   threshold: 0.4,
// };
// let observer_2 = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("fade-in");
//       observer.unobserve(entry.target);
//     } else {
//       entry.target.classList.remove("fade-in");
//     }
//   });
// }, option_2);
// divs.forEach((div) => {
//   observer.observe(div);
// });
// twos.forEach((two) => {
//   observer.observe(two);
// });

// // Copy cert. No.
// const copy = document.querySelectorAll(".text");

// copy.forEach((text) => {
//   const butt = text.querySelector("#copy");
//   const paragraphh = text.querySelector("span");
//   butt.addEventListener("click", () => {
//     navigator.clipboard.writeText(paragraphh.textContent);
//     butt.innerHTML = "Copied";
//     setTimeout(function () {
//       butt.innerHTML = '<i class="fa-solid fa-copy fa-1x"></>';
//     }, 2000);
//   });
// });

// For preloader
let newFunction;
const headr = document.querySelector("header");
const mainelement = document.querySelector("main");
const mainform = document.querySelector(".main-form");

function myFunction() {
  newFunction = setTimeout(() => {
    document.querySelector(".preloader").style.opacity = 0;
    headr.style.display = "block";
    mainelement.style.display = "block";
    mainform.style.display = "block";
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 1000);
  }, 1050);
}
