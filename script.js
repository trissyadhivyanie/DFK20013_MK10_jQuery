function semak() {

    var user = $("#username").val();
    var pass = $("#password").val();

    // VALIDATION
    if (user === "" || pass === "") {

        // TOAST MESSAGE
        $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'>" +
          "<h3>Sila isi username dan password</h3></div>")
        .css({
            display: "block",
            opacity: 0.9,
            top: $(window).scrollTop() + 100
        })
        .appendTo($.mobile.pageContainer)
        .delay(2000)
        .fadeOut(400, function () {
            $(this).remove();
        });

        return false;
    }

    // POPUP SUCCESS
    $("#popupSuccess").popup("open");

    // REDIRECT TO PAGE 2
    setTimeout(function () {
        window.location.href = "page2.html";
    }, 2000);

    return false;
}