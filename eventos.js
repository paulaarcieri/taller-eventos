
function button() {
    return alert("Hola! Soy el div");
}

document.addEventListener("DOMContentLoaded", function() {
    let div = document.getElementById('boton');
    div.addEventListener("click", button {
        event.stopPropagation();
    });
});

