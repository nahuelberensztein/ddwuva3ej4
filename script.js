$(document).ready(function() {
    $("#modo-claro").click(function() {
        $("body").removeClass("dark-mode").addClass("light-mode");
        $("#dark-theme").prop("disabled", true);
    });

    $("#modo-oscuro").click(function() {
        $("body").removeClass("light-mode").addClass("dark-mode");
        $("#dark-theme").prop("disabled", false);
    });
});
