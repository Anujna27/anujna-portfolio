/* ================================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    ".about-content, .project-card, .skills-content, .journey-content, .creative-inner, .contact-content"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

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

revealElements.forEach((element) => {
    observer.observe(element);
});


/* ================================
   PROJECT HOVER MOVEMENT
================================ */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    const image =
        card.querySelector(".project-image");

    card.addEventListener("mousemove", (event) => {

        if (!image) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width - 0.5) * 6;

        const y =
            ((event.clientY - rect.top) / rect.height - 0.5) * 6;

        image.style.transform =
            `translate(${x}px, ${y}px)`;

    });

    card.addEventListener("mouseleave", () => {

        if (!image) return;

        image.style.transform =
            "translate(0, 0)";

    });

});


/* ================================
   NAVBAR SHADOW
================================ */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(30,20,20,.06)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});


/* ================================
   ACTIVE NAV LINK
================================ */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top =
            section.offsetTop - 180;

        const bottom =
            top + section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================================
   PREVENT EMPTY PROJECT LINKS
================================ */

document.querySelectorAll('a[href="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

    });

});