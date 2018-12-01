$(function () {
    $(".smash-me").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("smash button is being hit");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"

        }).then(function () {
            location.reload();
        });
    });

    $(".addBurgerButton").on("click", function (event) {
        event.preventDefault();
        var newBurger = $("#newBurger").val().trim();

        if(newBurger === ""){
            console.log("flag");
            return;
        }

        let data = {
            name: newBurger
        }

        $.ajax("/burgers/create", {
            type: "POST",
            data: data
        }).then(function (res) {
            console.log("burger has been made with POST");
            location.reload();
        });
    });

});

