// * navbar section start
const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



//* sticky navigation color

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// * navbar section End

// * type writer start
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #64ffda }";
  document.body.appendChild(css);
};
// * type writer end

//* progress-bar start
const progress = document.querySelector('.progress-done');

setTimeout(() => {
  progress.style.opacity = 1;
  progress.style.width = progress.getAttribute('data-done') + "%";
}, 500);

// second
const progress2 = document.querySelector('.progress-done2');

setTimeout(() => {
  progress2.style.opacity = 1;
  progress2.style.width = progress2.getAttribute('data-done') + "%";
}, 500);

// third
const progress3 = document.querySelector('.progress-done3');

setTimeout(() => {
  progress3.style.opacity = 1;
  progress3.style.width = progress3.getAttribute('data-done') + "%";
}, 500);

// fourth
const progress4 = document.querySelector('.progress-done4');

setTimeout(() => {
  progress4.style.opacity = 1;
  progress4.style.width = progress4.getAttribute('data-done') + "%";
}, 500);

// fifth
const progress5 = document.querySelector('.progress-done5');

setTimeout(() => {
  progress5.style.opacity = 1;
  progress5.style.width = progress5.getAttribute('data-done') + "%";
}, 500);

// sixth
const progress6 = document.querySelector('.progress-done6');

setTimeout(() => {
  progress6.style.opacity = 1;
  progress6.style.width = progress6.getAttribute('data-done') + "%";
}, 500);
//* progress-bar end


// * increment number start

const workSection = document.querySelector(".parallax-section");
const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting == false) return;

  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
      const targetCount = +counter.getAttribute("data-target"); //string to change in number {second option [number()]}

      const startingCount = +counter.innerHTML;

      const incr = targetCount / 100;

      if (startingCount < targetCount) {
        counter.innerHTML = `${startingCount + incr}`;
        setTimeout(updateCounter, 50);
      } else {
        counter.innerHTML = targetCount;
      }
    };

    updateCounter();
  });
  observer.unobserve(workSection);


},

  {
    root: null,
    threshold: 0,
  });

workObserver.observe(workSection);

// * increment number end



// * portfolio start
var $galleryContainer = $('.gallery2').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
})

$('.button-group2 .button2').on('click', function () {
  $('.button-group2 .button2').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value
  })
})
// * portfolio end