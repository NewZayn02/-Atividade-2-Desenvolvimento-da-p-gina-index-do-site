$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("hide");
        $("#section-jogos").slideToggle("slow");
        $("#botao-cadastrar").hide();
})

});