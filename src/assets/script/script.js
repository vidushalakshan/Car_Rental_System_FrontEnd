$("#dashboard").css("display", "none");
$("#drivers").css("display", "none");

$("#dashboardlink").click(function () {
    $("#dashboard").css("display", "");
    $("#drivers").css("display", "none");
});

$("#adminlink").click(function () {
    $("#dashboard").css("display", "none");
    $("#drivers").css("display", "block");
});
