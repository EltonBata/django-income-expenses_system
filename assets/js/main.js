$(document).ready(function () {

    $(".sidebar-open").on("click", function () {
        $(".sidebar").animate({ left: "0%" });
    });

    $(".sidebar-close").on("click", function () {
        $(".sidebar").animate({ left: "-100%" });
    });

    feather.replace({ width: "16px" });
});
