$(document).ready(function () {
    $("#register_username").on("input", function () {
        var username = $(this).val();

        if (username.length > 0) {
            $.post({
                url: "/auth/validate-username/",
                data: JSON.stringify({
                    username: username,
                }),
                beforeSend: function () {
                    $("#username_checking").text(`Checking ${username}...`);
                },
                success: function (res) {
                    $("#username_checking").text("");

                    if (res.error) {
                        $("#username_error").text(res.error);
                        $("#register_username")[0].setCustomValidity(res.error);
                    } else {
                        $("#username_error").text("");

                        $("#register_username")[0].setCustomValidity("");
                    }
                },
            });
        } else {
            $("#username_error").text("");

            $("#register_username")[0].setCustomValidity("");
        }
    });

    $("#register_email").on("input", function () {
        var email = $(this).val();

        if (email.length > 0) {
            $.post({
                url: "/auth/validate-email/",
                data: JSON.stringify({
                    email: email,
                }),
                beforeSend: function () {
                    $("#email_checking").text(`Checking ${username}...`);
                },
                success: function (res) {
                    $("#email_checking").text("");

                    if (res.error) {
                        $("#email_error").text(res.error);
                        $("#register_email")[0].setCustomValidity(res.error);
                    } else {
                        $("#email_error").text("");

                        $("#register_email")[0].setCustomValidity("");
                    }
                },
            });
        } else {
            $("#email_error").text("");

            $("#register_email")[0].setCustomValidity("");
        }
    });

    $(".password-toggler").on("click", function () {
        if ($(this).data("show") === false) {
            $(this).data("show", true);

            $(this).html('<i data-feather="eye-off"></i>');

            $("#register_password").attr("type", "text");
        } else {
            $(this).data("show", false);

            $(this).html('<i data-feather="eye"></i>');

            $("#register_password").attr("type", "password");
        }

        feather.replace({ width: "16px" });
    });
});
