// https://blog.xpeducacao.com.br/dark-mode-css/
// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
//   var menu = document.querySelector('u#menu-nav');
//if (window.pageYOffset > 150) {
//  menu.style.justifycontent = 'flex-end';
//} else {
//  menu.style.justifycontent = 'center';
//}

// function darkmode() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

// window.addEventListener("scroll", function() {
//   var menu = document.querySelector("header nav");
//   if (window.scrollY > 70) {
//     menu.style.position = "fixed";
//     menu.style.top = "0";
//   }
//   else {
//     menu.style.position = "static";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector("header nav");
  var darkButton = navbar.querySelector(".darkbutton");
  var isScrolled = false;

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 70 && !isScrolled) {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
      navbar.style.transition = "top 0.3s ease-in-out";
      darkButton.style.backgroundColor = "goldenrod";
      darkButton.style.transition = "background-color 0.3s ease-in-out, transform 0.3s ease-in-out";
      darkButton.style.transform = "scale(1.15)";
      isScrolled = true;
    } else if (scrollPosition <= 70 && isScrolled) {
      navbar.style.top = "-60px";
      darkButton.style.backgroundColor = "black";
      darkButton.style.transform = "scale(1)";
      isScrolled = false;
    } else if (scrollPosition === 0 && isScrolled) {
      navbar.style.top = "0";
      darkButton.style.backgroundColor = "black";
      darkButton.style.transform = "scale(1)";
      navbar.style.transition = "top 0.8s ease-in-out";
    } else if (scrollPosition === 0 && !isScrolled) {
      navbar.style.position = "static";
      navbar.style.transition = "none";
    }
  });
});

function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


window.addEventListener("scroll", () => {
  console.log("Scrolled!");
});

