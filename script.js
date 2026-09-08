document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (toggle) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => nav.classList.remove("open"));
    });

    // Pequeño efecto de consola para la estética 2000s.
    const messages = [
        ">> connection secure",
        ">> scanning modules...",
        ">> no unauthorized access",
        ">> security mode: ON"
    ];

    console.log("%cNULL//BYTE", "color:#39ff14;font-size:24px;font-weight:bold;");
    messages.forEach((message, i) => {
        setTimeout(() => console.log(message), i * 350);
    });
});
