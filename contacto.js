const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});


const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const servicio = document.getElementById("servicio");
    const presupuesto = document.getElementById("presupuesto");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    document.querySelectorAll(".input-group").forEach(g => g.classList.remove("error"));
    document.querySelectorAll(".error").forEach(e => e.classList.remove("show"));

    if(nombre.value.trim() === ""){
        showError(nombre, "Campo obligatorio");
        valid = false;
    }

    if(!emailRegex.test(email.value)){
        showError(email, "Email inválido");
        valid = false;
    }

    if(servicio.value === ""){
        showError(servicio, "Selecciona un servicio");
        valid = false;
    }

    if(presupuesto.value === ""){
        showError(presupuesto, "Selecciona presupuesto");
        valid = false;
    }

    if(mensaje.value.trim() === ""){
        showError(mensaje, "Escribe un mensaje");
        valid = false;
    }

    if(valid){
        const success = document.getElementById("success");
        success.innerText = "Mensaje enviado correctamente 🚀";
        success.classList.add("show");

        form.reset();
    }
});

function showError(input, message){
    const group = input.parentElement;
    const error = group.querySelector(".error");

    error.innerText = message;
    error.classList.add("show");

    group.classList.add("error");

    setTimeout(() => {
        group.classList.remove("error");
    }, 500);
}