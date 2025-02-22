$(document).ready(function () {

    $(".sidebar-open").on("click", function () {
        $(".sidebar").animate({ left: "0%" });
    });

    $(".sidebar-close").on("click", function () {
        $(".sidebar").animate({ left: "-100%" });
    });

    $(".layer").animate({ borderRadius: "25% 25% 25% 25% / 0% 0% 80% 80%" }, 1000);

    feather.replace({ width: "16px" });
});
