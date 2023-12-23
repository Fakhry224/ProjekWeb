//* Responsive Function
window.addEventListener("DOMContentLoaded", (event) => {
  var windowWidth = window.innerWidth;
  var rowElement = document.querySelector(".half");

  var responsiveImg1 = document.getElementById("responsiveImg1");
  var responsiveImg2 = document.getElementById("responsiveImg2");
  var responsiveImg3 = document.getElementById("responsiveImg3");

  if (windowWidth <= 576) {
    responsiveImg1.src = "assets/images/demores1.png";
    responsiveImg2.src = "assets/images/demores2.png";
    responsiveImg3.src = "assets/images/demores3.png";
  } else {
    responsiveImg1.src = "assets/images/demo1.png";
    responsiveImg2.src = "assets/images/demo2.png";
    responsiveImg3.src = "assets/images/demo3.png";
  }

  if (windowWidth <= 768) {
    if (rowElement) {
      rowElement.classList.remove("row50");
      rowElement.classList.add("row100");
    }
  }

  window.addEventListener("resize", function () {
    var windowWidth = window.innerWidth;

    if (windowWidth <= 576) {
      responsiveImg1.src = "assets/images/demores1.png";
      responsiveImg2.src = "assets/images/demores2.png";
      responsiveImg3.src = "assets/images/demores3.png";
    } else if (windowWidth <= 768) {
      if (rowElement) {
        rowElement.classList.remove("row50");
        rowElement.classList.add("row100");
      }
    } else {
      responsiveImg1.src = "assets/images/demo1.png";
      responsiveImg2.src = "assets/images/demo2.png";
      responsiveImg3.src = "assets/images/demo3.png";

      if (rowElement) {
        rowElement.classList.remove("row100");
        rowElement.classList.add("row50");
      }
    }
  });
});

//* Dropdown Function
function activateDropDown(x) {
  var header = document.querySelector(".header-container");
  var link = document.querySelector(".nav-drop");

  x.classList.toggle("change");
  header.classList.toggle("dropdown-header");
  link.classList.toggle("show");
}

function pagesController(destination) {
  switch (destination) {
    case "buynsell":
      window.location.href = "./src/pages/buy-page.html";
      break;
    case "lend":
      window.location.href = "./src/pages/lend-page.html";
      break;
    case "service":
      window.location.href = "./src/pages/service-page.html";
      break;
    case "sell":
      window.location.href = "./sell-page.html";
      break;
    case "buy":
      window.location.href = "./buy-page.html";
      break;
    default:
      console.log("Destination tidak valid");
      break;
  }
}
