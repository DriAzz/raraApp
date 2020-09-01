//  Left hand Navigation
$(document).ready(function () {
    $("#profile-content").hide();
    $(".profile-button-global").click(function () {
        $(".far").toggleClass("far-activated")
        $("#profile-content").toggle("slow", function () {

        });
    });
});


//Button focus classes
$(document).ready(function () {
    $(".profile-links").click(function () {
        $(".profile-links").removeClass("profileLink-active");
        $(this).addClass("profileLink-active");
    });
});


// Button Slide down toggle MAIN

$(document).ready(function () {
    const editButton = document.getElementById("buttonEdit");

    $(".tablerow-adminEdit-td2").hide();
    $(".whiteTop").hide();
    $(".addButtonGlobal").click(function () {
        if (editButton.innerHTML == "Edit Table") {
            editButton.innerHTML = "Discard";
            $("#buttonSubmit").addClass("submitButtonRev");
            $(".addButtonGlobal").addClass("addPizzaButtonAct")
        } else if (editButton.innerHTML == "Discard") {
            editButton.innerHTML = "Edit Table";
            $("#buttonSubmit").removeClass("submitButtonRev")
            $(".addButtonGlobal").removeClass("addPizzaButtonAct");
        }

        $(".tablerow-adminEdit-td2").toggle();
        $(".whiteTop").slideToggle("slow", function () {

        });
    });
});




//  Add pizza button
// $(document).ready(function () {
//     $(".tablerow-adminEdit-td2").hide();
//     $(".whiteTop").hide();

//     $(".addPizzaButton").click(function () {
//         $(".tablerow-adminEdit-td2").toggle();
//         $(".whiteTop").slideToggle("slow", function () {

//         });
//     });
// });




//Button Change UPDATED CODE
// $(document).ready(function () {
//     var editButton = document.getElementById("buttonEdit");
//     var submitButton = document.getElementById("buttonSubmit");

//     $(".addPizzaButton").click(function () {
//         if (editButton.innerHTML == "Edit Table") {
//             editButton.innerHTML = "Discard";
//             $(".submitButton").addClass("submitButtonRev");
//             $(".addPizzaButton").addClass("addPizzaButtonAct");

//         } else if (editButton.innerHTML == "Discard") {
//             editButton.innerHTML = "Edit Table";
//             $(".submitButton").removeClass("submitButtonRev");
//             $(".addPizzaButton").removeClass("addPizzaButtonAct");
//         }
//     });
// });

//Button Change
// function changeButton() {
//     var button = document.getElementById("buttonEdit");
//     var submitButton = document.getElementById("submitButtonC");

//     if (button.innerHTML == "Edit Table") {
//         button.innerHTML = "Discard"
//         button.style.backgroundColor = "red";
//         submitButton.innerHTML = "<button type='submit' class='submitButton'>Submit</button>";


//     } else if (button.innerHTML = "Discard") {
//         button.innerHTML = "Edit Table";
//         button.style.backgroundColor = "#45BDEE";
//         submitButton.innerHTML = "";

//         $(".submitButton").removeClass("submitButtonRev");
//     }
// }

//Sauces Button
$(document).ready(function () {
    $(".saucesContainer").hide();
    $(".sauceButton").click(function () {
        $(".saucesContainer").slideToggle(function () {

        });
    });
});


//Animation button for sauces
$(document).ready(function () {
    $(".sauceButton").hover(function () {
        $(this).css("box-shadow", "0px 0px 6px 1px gold");
        $(this).css("color", "blue");
    }, function () {
        $(this).css("box-shadow", "none");
        $(this).css("color", "white");
    });
});


//Meats Button
$(document).ready(function () {
    $(".meatsContainer").hide();
    $(".meatButton").click(function () {
        $(".meatsContainer").slideToggle(function () {

        });
    });
});

//Animation button for meats
$(document).ready(function () {
    $(".meatButton").hover(function () {
        $(this).css("box-shadow", "0px 0px 6px 1px gold");
        $(this).css("color", "blue");
    }, function () {
        $(this).css("box-shadow", "none");
        $(this).css("color", "white");
    });
})

//Veg Button
$(document).ready(function () {
    $(".vegContainer").hide();
    $(".vegButton").click(function () {
        $(".vegContainer").slideToggle(function () {

        });
    });
});

//Veg Animation
$(document).ready(function () {
    $(".vegButton").hover(function () {
        $(this).css("box-shadow", "0px 0px 6px 1px gold");
        $(this).css("color", "blue");
    }, function () {
        $(this).css("box-shadow", "none");
        $(this).css("color", "white");
    });
})

//Cheese Button
$(document).ready(function () {
    $(".cheeseContainer").hide();
    $(".cheeseButton").click(function () {
        $(".cheeseContainer").slideToggle(function () {

        });
    });
});

$(document).ready(function () {
    $(".cheeseButton").hover(function () {
        $(this).css("box-shadow", "0px 0px 6px 1px gold");
        $(this).css("color", "blue");
    }, function () {
        $(this).css("box-shadow", "none");
        $(this).css("color", "white");
    });
});

//Info Button- EXPAND

$(document).ready(function () {
    var getDataClass = $(".pizza-ID-data").html();
    getDataClass = toString(getDataClass);


});

// Button Controls Edit and Remove
// $(document).ready(function () {
//     $(".pizzaData-td").hide();
//     $(".").hover(function () {
//         $(".pizzaData-td").toggle();
//     });
// });