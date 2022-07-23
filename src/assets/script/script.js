$("#dashboard").css("display", "none");
$("#admin").css("display", "none");

$("#dashboardlink").click(function () {
    $("#dashboard").css("display", "");
    $("#admin").css("display", "none");
});

$("#adminlink").click(function () {
    $("#dashboard").css("display", "none");
    $("#admin").css("display", "block");
});
