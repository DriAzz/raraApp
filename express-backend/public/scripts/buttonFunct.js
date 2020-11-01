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




//Pizza Editor Buttons
$(document).ready(function () {
    document.getElementById("selected").disabled = true;
    var selectedData = document.getElementById("selected");

    $("#sauceSelector1").click(function () {
        var marinara = document.getElementById("sauceLabel1").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $("#sauceSelector2").removeClass("sauceSelectorActive");
        $("#sauceSelector3").removeClass("sauceSelectorActive");
        $("#sauceSelector4").removeClass("sauceSelectorActive");
        $("#sauceSelector5").removeClass("sauceSelectorActive");
        $("#sauceSelector6").removeClass("sauceSelectorActive");

        if (selectedData.value == "") {
            selectedData.value = marinara;
            if (selectedData.value == "Marinara") {
                selectedData.setAttribute("name", "ingRedSauce");
                if (selectedData.getAttribute("name") == "ingRedSauce") {
                    selectedData.setAttribute("value", "Marinara");
                }
            };
        } else if (selectedData.value != "Marinara") {
            selectedData.value = marinara;
        };
    });

    $("#sauceSelector2").click(function () {
        var alfredo = document.getElementById("sauceLabel2").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $("#sauceSelector1").removeClass("sauceSelectorActive");
        $("#sauceSelector3").removeClass("sauceSelectorActive");
        $("#sauceSelector4").removeClass("sauceSelectorActive");
        $("#sauceSelector5").removeClass("sauceSelectorActive");
        $("#sauceSelector6").removeClass("sauceSelectorActive");

        if (selectedData.value == "") {
            selectedData.value = alfredo;
            if (selectedData.value == "Alfredo") {
                selectedData.setAttribute("name", "pizzaingredientwhitesauce");
            };
        } else if (selectedData.value != "Alfredo") {
            selectedData.value = alfredo;
        };
    });

    $("#sauceSelector3").click(function () {
        var bbq = document.getElementById("sauceLabel3").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $("#sauceSelector1").removeClass("sauceSelectorActive");
        $("#sauceSelector2").removeClass("sauceSelectorActive");
        $("#sauceSelector4").removeClass("sauceSelectorActive");
        $("#sauceSelector5").removeClass("sauceSelectorActive");
        $("#sauceSelector6").removeClass("sauceSelectorActive");


        if (selectedData.value == "") {
            selectedData.value = bbq;
            if (selectedData.value == "BBQ") {
                selectedData.setAttribute("name", "pizzaingredientbbqsauce");
            };
        } else if (selectedData.value != "BBQ") {
            selectedData.value = bbq;
        };
    });

    $("#sauceSelector4").click(function () {
        var ranch = document.getElementById("sauceLabel4").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $("#sauceSelector1").removeClass("sauceSelectorActive");
        $("#sauceSelector2").removeClass("sauceSelectorActive");
        $("#sauceSelector3").removeClass("sauceSelectorActive");
        $("#sauceSelector5").removeClass("sauceSelectorActive");
        $("#sauceSelector6").removeClass("sauceSelectorActive");


        if (selectedData.value == "") {
            selectedData.value = ranch;
            if (selectedData.value == "Ranch") {
                selectedData.setAttribute("name", "pizzaingredientranch");
            };
        } else if (selectedData.value != "Ranch") {
            selectedData.value = ranch;
        };
    });

    $("#sauceSelector5").click(function () {
        var bean = document.getElementById("sauceLabel5").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $("#sauceSelector1").removeClass("sauceSelectorActive");
        $("#sauceSelector2").removeClass("sauceSelectorActive");
        $("#sauceSelector3").removeClass("sauceSelectorActive");
        $("#sauceSelector4").removeClass("sauceSelectorActive");
        $("#sauceSelector6").removeClass("sauceSelectorActive");


        if (selectedData.value == "") {
            selectedData.value = bean;
            if (selectedData.value = "Bean") {
                selectedData.setAttribute("name", "pizzaingredientbeansauce");
            };
        } else if (selectedData.value != "Bean") {
            selectedData.value = bean;
        };
    });

    $("#sauceSelector6").click(function () {
        var bufallo = document.getElementById("sauceLabel6").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $("#sauceSelector1").removeClass("sauceSelectorActive");
        $("#sauceSelector2").removeClass("sauceSelectorActive");
        $("#sauceSelector3").removeClass("sauceSelectorActive");
        $("#sauceSelector4").removeClass("sauceSelectorActive");
        $("#sauceSelector5").removeClass("sauceSelectorActive");


        if (selectedData.value == "") {
            selectedData.value = buffalo;
            if (selectedData.value = "Buffalo") {
                selectedData.setAttribute("name", "pizzaingredientbuffalosauce");
            };
        } else if (selectedData.value != "Buffalo") {
            selectedData.value = buffalo;
        };
    });
});







// // Button Slide down toggle MAIN

// $(document).ready(function () {
//     const editButton = document.getElementById("buttonEdit");

//     $(".tablerow-adminEdit-td2").hide();
//     $(".whiteTop").hide();
//     $(".addButtonGlobal").click(function () {
//         if (editButton.innerHTML == "Edit Table") {
//             editButton.innerHTML = "Discard";
//             $("#buttonSubmit").addClass("submitButtonRev");
//             $(".addButtonGlobal").addClass("addPizzaButtonAct")
//         } else if (editButton.innerHTML == "Discard") {
//             editButton.innerHTML = "Edit Table";
//             $("#buttonSubmit").removeClass("submitButtonRev")
//             $(".addButtonGlobal").removeClass("addPizzaButtonAct");
//         }

//         $(".tablerow-adminEdit-td2").toggle();
//         $(".whiteTop").slideToggle("slow", function () {

//         });
//     });
// });

// //Sauces Button
// $(document).ready(function () {
//     $(".saucesContainer").hide();
//     $(".sauceButton").click(function () {
//         $(".saucesContainer").slideToggle(function () {

//         });
//     });
// });


// //Animation button for sauces
// $(document).ready(function () {
//     $(".sauceButton").hover(function () {
//         $(this).css("box-shadow", "0px 0px 6px 1px gold");
//         $(this).css("color", "blue");
//     }, function () {
//         $(this).css("box-shadow", "none");
//         $(this).css("color", "white");
//     });
// });


// //Meats Button
// $(document).ready(function () {
//     $(".meatsContainer").hide();
//     $(".meatButton").click(function () {
//         $(".meatsContainer").slideToggle(function () {

//         });
//     });
// });

// //Animation button for meats
// $(document).ready(function () {
//     $(".meatButton").hover(function () {
//         $(this).css("box-shadow", "0px 0px 6px 1px gold");
//         $(this).css("color", "blue");
//     }, function () {
//         $(this).css("box-shadow", "none");
//         $(this).css("color", "white");
//     });
// })

// //Veg Button
// $(document).ready(function () {
//     $(".vegContainer").hide();
//     $(".vegButton").click(function () {
//         $(".vegContainer").slideToggle(function () {

//         });
//     });
// });

// //Veg Animation
// $(document).ready(function () {
//     $(".vegButton").hover(function () {
//         $(this).css("box-shadow", "0px 0px 6px 1px gold");
//         $(this).css("color", "blue");
//     }, function () {
//         $(this).css("box-shadow", "none");
//         $(this).css("color", "white");
//     });
// })

// //Cheese Button
// $(document).ready(function () {
//     $(".cheeseContainer").hide();
//     $(".cheeseButton").click(function () {
//         $(".cheeseContainer").slideToggle(function () {

//         });
//     });
// });

// $(document).ready(function () {
//     $(".cheeseButton").hover(function () {
//         $(this).css("box-shadow", "0px 0px 6px 1px gold");
//         $(this).css("color", "blue");
//     }, function () {
//         $(this).css("box-shadow", "none");
//         $(this).css("color", "white");
//     });
// });

// //Info Button- EXPAND

// $(document).ready(function () {
//     var getDataClass = $(".pizza-ID-data").html();
//     getDataClass = toString(getDataClass);


// });