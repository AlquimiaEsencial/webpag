document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Cambiar el estado del menú (mostrar/ocultar) cuando se haga clic en el ícono
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active"); // Alternar la clase 'active' para mostrar/ocultar el menú
    });
});
