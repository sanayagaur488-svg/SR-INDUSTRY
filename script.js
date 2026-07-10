const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = this.elements[0].value;
        const email = this.elements[1].value;
        const subject = this.elements[2].value;
        const message = this.elements[3].value;

        const whatsappMessage =
`📩 New Contact Message

👤 Name: ${name}

📧 Email: ${email}

📌 Subject: ${subject}

📝 Message:
${message}`;

        const whatsappURL =
`https://wa.me/919634835871?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

    });

}
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
    menu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}