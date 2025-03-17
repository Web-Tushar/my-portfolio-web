// ===================navbar icon  toggle================ / /

let menuIcon = document.querySelector("#menu_icon")
let navbar = document.querySelector(".navbar")
// let menu_icon = document.querySelector(".menu_icon")
// let menu_icon = document.querySelector(".menu_icon")

menuIcon.onclick = () => {
     menuIcon.classList.toggle("fa-xmark")
     navbar.classList.toggle("active")
}

// ===================navbar icon  toggle================ / /

let section = document.querySelector("section")
let navLinks = document.querySelector("header nav a")

window.onscroll = () => {
     section.forEach(sec => {
          let top = window.scrollY
          let offset = sec.offsetTop - 150
          let height = sec.offsetHeight
          let id = sec.getAttribute("id")

          if (top >= offset && top < offset + height) {
               navLinks.forEach.apply(links => {
                    links.classList.remove("active")
                    document.querySelector("header nav a[href=" + id + "]").classList.add('active');

               });
          }

     });
     // ===================stickyn navbar================ / /
     let heading = document.querySelector("header")
     heading.classList.toggle('sticky', window.scrollY > 100);
     // ===================remove  toggle icon and navbar================ / /
     menuIcon.classList.remove("fa-xmark")
     navbar.classList.remove("active")
}

// ======acroll reveal========

ScrollReveal({
     distance: "80px",
     duration: 2000,
     delay: 200

});

ScrollReveal().reveal('.home_content,heading', { origin: "top" });
ScrollReveal().reveal('.home_img, services_container, .portfolio_box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home_content h1,about-img', { origin: "left" });
ScrollReveal().reveal('.home_content p ,about-content', { origin: "right " });
