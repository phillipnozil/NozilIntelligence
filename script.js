let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("header, section, .footer");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Prevent re-triggering
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold for when to trigger fade-in
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("header, section, .footer");
  
    let activeSection = null;
  
const handleFadeEffect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      
      entry.target.classList.remove("fade-out");
      entry.target.classList.add("fade-in");
    } else {
   
      entry.target.classList.remove("fade-in");
      entry.target.classList.add("fade-out");
    }
  });
};

const observer = new IntersectionObserver(handleFadeEffect, {
  threshold: 0.4,
});

sections.forEach((section) => observer.observe(section));

  
