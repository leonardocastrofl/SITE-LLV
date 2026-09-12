/* =========================================================
   LOGIC LAYER VISION — LLV
   JavaScript
   ========================================================= */


/* ==================== HEADER / SCROLL ==================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.background = "rgba(5, 5, 5, 0.92)";
        header.style.borderBottomColor = "rgba(255, 255, 255, 0.10)";
    } else {
        header.style.background = "rgba(5, 5, 5, 0.75)";
        header.style.borderBottomColor = "transparent";
    }
});


/* ==================== ANIMAÇÕES AO APARECER ==================== */

const animatedElements = document.querySelectorAll(
    ".section-title, .about-content, .service-card, .project-card, .process-step, .contact-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});


/* ==================== LINK ATIVO DO MENU ==================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* ==================== EFEITO NOS CARDS ==================== */

const cards = document.querySelectorAll(
    ".service-card, .project-card"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        card.style.transform = `
            translateY(-8px)
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ==================== FORMULÁRIO ==================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const company = document.querySelector("#company").value.trim();
        const message = document.querySelector("#message").value.trim();


        if (!name || !email || !message) {

            alert("Preencha os campos obrigatórios.");

            return;
        }


        console.log("Mensagem recebida:");

        console.log({
            name,
            email,
            company,
            message
        });


        alert(
            `Obrigado, ${name}! Sua mensagem foi preparada para a equipe LLV.`
        );


        contactForm.reset();

    });

}


/* ==================== SCROLL SUAVE ==================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ==================== ANO AUTOMÁTICO ==================== */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} Logic Layer Vision. Todos os direitos reservados.`;

}


/* ==================== CONSOLE ==================== */

console.log(
    "%cLLV — Logic Layer Vision",
    "font-size: 20px; font-weight: bold;"
);

console.log(
    "%cTransformando ideias em experiências digitais.",
    "font-size: 13px;"
);