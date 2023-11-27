// https://blog.xpeducacao.com.br/dark-mode-css/
// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector("header nav");
  var darkButton = document.querySelector(".navdarkbutton");
  var btncontato = document.querySelector(".btn-form");
  var btncontatonav = document.querySelector(".btn-contato-nav");
  var hide = document.querySelector(".hide");
  var isScrolled = false;

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 70 && !isScrolled) {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
      navbar.style.transition = "top 0.3s ease-in-out";
      btncontato.style.display = "none";
      btncontatonav.classList.add("fixed");
      darkButton.classList.add("fixed");
      hide.classList.add("fixed");
      isScrolled = true;
    } else if (scrollPosition <= 70 && isScrolled) {
      navbar.style.top = "-60px";
      btncontato.style.display = "block";
      isScrolled = false;
      btncontato.style.display = "block";
      btncontatonav.classList.remove("fixed");
      darkButton.classList.remove("fixed");
      hide.classList.remove("fixed");
    } else if (scrollPosition === 0 && isScrolled) {
      navbar.style.top = "0";
      navbar.style.transition = "top 0.8s ease-in-out";
      btncontato.style.display = "block";
      btncontatonav.classList.remove("fixed");
      darkButton.classList.remove("fixed");
      hide.classList.remove("fixed");
    } else if (scrollPosition === 0 && !isScrolled) {
      navbar.style.position = "static";
      navbar.style.transition = "none";
      btncontato.style.display = "block";
      btncontatonav.classList.remove("fixed");
      darkButton.classList.remove("fixed");
      hide.classList.remove("fixed");
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


