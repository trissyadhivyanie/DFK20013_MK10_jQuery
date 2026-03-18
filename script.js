function semak() {

    var user = $("#username").val();
    var pass = $("#password").val();

    // VALIDATION: check empty fields
    if (user === "" || pass === "") {

        // TOAST MESSAGE (jQuery Mobile style)
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

        return false; // stop form submit
    }

    // POPUP SUCCESS
    $("#popupSuccess").popup("open");

    // GO TO PAGE 2 (inside same HTML file)
    setTimeout(function () {
        $.mobile.changePage("#page2");
    }, 1500);

    return false;
}