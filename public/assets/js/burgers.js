$(function () {
    $(".smash-me").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"

        }).then(function () {
            location.reload();
        });
    });

    $(".addBurgerButton").on("click", function (event) {
        event.preventDefault();
        var newBurger = $("#newBurger").val().trim();
        let data = {
            name: newBurger
        }

        $.ajax("/burgers/create", {
            type: "POST",
            data: data
        }).then(function (res) {
            location.reload();
        });
    });

});

