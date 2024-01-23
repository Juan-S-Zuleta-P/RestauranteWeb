$(document).ready(function () {
    $("#menuComida").click(function () {
        $(".menu-categorias").hide();
        $(".menu-comida").show();
    });
    
    $("#menuBebidas").click(function () {
        $(".menu-categorias").hide();
        $(".menu-bebidas").show();
    });
});
