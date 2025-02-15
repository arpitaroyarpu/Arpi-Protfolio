function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    }
    else {
        menuBth.className = "nav-menu";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active-link' from all links
            navLinks.forEach(nav => nav.classList.remove("active-link"));

            // Add 'active-link' to the clicked link
            this.classList.add("active-link");
        });
    });
});


/*----------Dark Mode ---------------- */
const body = document.querySelector("body");
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
            body.classList.toggle("dark");
});


/*-----------Typing Effect-------------------- */

var typingEffect = new Typed(".typedText",{
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})


/*-----------Scroll Animation------------- */

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});


sr.reveal(".featured-name", {delay:100});
sr.reveal(".text-info", {delay:200});
sr.reveal(".text-btn", {delay:200});
sr.reveal(".socical_icons", {delay:200});
sr.reveal(".featured-image", {delay:320});


sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", {delay: 100});
srRight.reveal(".skill-box", {delay: 100});



/*----------------------------active link------------------ */
const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getattributr("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        }
        else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    })
}


/*Email send code */

function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "amirmdhossain1974@gmail.com",
        Password : "EC6017B1DF7EE3A95641EEEDEC9ED7748C2B",
        To : 'arpitaroyarpu315@gmail.com',
        From : "amirmdhossain1974@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
