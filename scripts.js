function circleChaptakro() {
  var xscale = 1;
  var yscale = 1;

  var xprevious = 0;
  var yprevious = 0;

  window.addEventListener("mousemove", function (dets) {
    var xdiff = dets.clientX - xprevious;
    var ydiff = dets.clientY - yprevious;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    xprevious = dets.clientX;
    yprevious = dets.clientY;

    circlemousefollower(xscale, yscale);
  });
}

circleChaptakro();

function circlemousefollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}
const scroller = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstpageanimation() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut, // Corrected to camelCase
  })
    .to(".boundingelem", {
      y: 0,
      duration: 3,
      ease: Expo.easeInOut, // Corrected to camelCase
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut, // Corrected to camelCase
    });
}

firstpageanimation();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

function updateClock() {
  const currentTimeElement = document.getElementById('current-time');
  const currentYearElement = document.getElementById('current-year');

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentYear = now.getFullYear();

  // Format the time (you can adjust the format based on your preference)
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  // Update the content of the elements
  currentTimeElement.textContent = formattedTime;
  currentYearElement.textContent = currentYear;

  // Update the time every second (1000 milliseconds)
  setTimeout(updateClock, 1000);
}

// Initial call to set the time when the page loads
updateClock();
  