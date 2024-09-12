let packmenuboxlist = document.querySelector(".packmenu-boxlist");
let packmenuboxlist2 = document.querySelector(".packmenu-boxlist2");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let degree = 0;

const navbarbox = document.querySelector(".navbarbox");
document.querySelector("#burgermenu").onclick = () => {
  navbarbox.classList.toggle("active");
};

const burgermenu = document.querySelector("#burgermenu");
document.addEventListener("click", function (event) {
  if (!burgermenu.contains(event.target) && !navbarbox.contains(event.target)) {
    navbarbox.classList.remove("active");
  }
});

let runautoplay = setTimeout(() => {
  next.click();
}, 10000);

prev.addEventListener("click", () => {
  degree += 90;
  packmenuboxlist.style = `transform: perspective(100rem) rotateY(${degree}deg);`;
  packmenuboxlist2.style = `transform: perspective(100rem) rotateY(${degree}deg);`;
});
next.addEventListener("click", () => {
  degree -= 90;
  packmenuboxlist.style = `transform: perspective(100rem) rotateY(${degree}deg);`;
  packmenuboxlist2.style = `transform: perspective(100rem) rotateY(${degree}deg);`;

  clearTimeout(runautoplay);
  runautoplay = setTimeout(() => {
    next.click();
  }, 10000);
});

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animageseratas");
    }
  });
});

const geseratas = document.querySelectorAll(".geseratas");
geseratas.forEach((el) => observer.observe(el));
