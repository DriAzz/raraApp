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

$(document).ready(function () {
    var buttonCheck = document.getElementById("addPizza");
    $("#addPizza").click(function () {
        if (buttonCheck.innerHTML == "Add Pizza +") {
            $("#dataContainerDisabled").addClass("pizzaForm-dataContainerActive");
            buttonCheck.innerHTML = "Stop Editing";
        } else if (buttonCheck.innerHTML == "Stop Editing") {
            $("#dataContainerDisabled").removeClass("pizzaForm-dataContainerActive");
            buttonCheck.innerHTML = "Add Pizza +";
        }
    });
});


















//Pizza Editor Buttons
$(document).ready(function () {
    // document.getElementById("selected").disabled = true;
    var selectedData = document.getElementById("selected");

    $("#sauceSelector1").click(function () {
        var marinara = document.getElementById("sauceLabel1").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $(this).addClass("fa-checkActive");
        $("#sauceSelector2").removeClass("sauceSelectorActive");
        $("#sauceSelector3").removeClass("sauceSelectorActive");
        $("#sauceSelector4").removeClass("sauceSelectorActive");
        $("#sauceSelector5").removeClass("sauceSelectorActive");
        $("#sauceSelector6").removeClass("sauceSelectorActive");

        $("#sauceCheck1").addClass("fa-checkActive");

        $("#sauceCheck2").removeClass("fa-checkActive");
        $("#sauceCheck3").removeClass("fa-checkActive");
        $("#sauceCheck4").removeClass("fa-checkActive");
        $("#sauceCheck5").removeClass("fa-checkActive");
        $("#sauceCheck6").removeClass("fa-checkActive");

        if (selectedData.value == "") {
            selectedData.value = marinara;
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

        $("#sauceCheck2").addClass("fa-checkActive");

        $("#sauceCheck1").removeClass("fa-checkActive");
        $("#sauceCheck3").removeClass("fa-checkActive");
        $("#sauceCheck4").removeClass("fa-checkActive");
        $("#sauceCheck5").removeClass("fa-checkActive");
        $("#sauceCheck6").removeClass("fa-checkActive");

        if (selectedData.value == "") {
            selectedData.value = alfredo;
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

        $("#sauceCheck3").addClass("fa-checkActive");

        $("#sauceCheck1").removeClass("fa-checkActive");
        $("#sauceCheck2").removeClass("fa-checkActive");
        $("#sauceCheck4").removeClass("fa-checkActive");
        $("#sauceCheck5").removeClass("fa-checkActive");
        $("#sauceCheck6").removeClass("fa-checkActive");

        if (selectedData.value == "") {
            selectedData.value = bbq;
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

        $("#sauceCheck4").addClass("fa-checkActive");

        $("#sauceCheck1").removeClass("fa-checkActive");
        $("#sauceCheck2").removeClass("fa-checkActive");
        $("#sauceCheck3").removeClass("fa-checkActive");
        $("#sauceCheck5").removeClass("fa-checkActive");
        $("#sauceCheck6").removeClass("fa-checkActive");

        if (selectedData.value == "") {
            selectedData.value = ranch;
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

        $("#sauceCheck5").addClass("fa-checkActive");

        $("#sauceCheck1").removeClass("fa-checkActive");
        $("#sauceCheck2").removeClass("fa-checkActive");
        $("#sauceCheck3").removeClass("fa-checkActive");
        $("#sauceCheck4").removeClass("fa-checkActive");
        $("#sauceCheck6").removeClass("fa-checkActive");

        if (selectedData.value == "") {
            selectedData.value = bean;
        } else if (selectedData.value != "Bean") {
            selectedData.value = bean;
        };
    });

    $("#sauceSelector6").click(function () {
        var buffalo = document.getElementById("sauceLabel6").innerHTML;
        $(this).addClass("sauceSelectorActive");
        $("#sauceSelector1").removeClass("sauceSelectorActive");
        $("#sauceSelector2").removeClass("sauceSelectorActive");
        $("#sauceSelector3").removeClass("sauceSelectorActive");
        $("#sauceSelector4").removeClass("sauceSelectorActive");
        $("#sauceSelector5").removeClass("sauceSelectorActive");

        $("#sauceCheck6").addClass("fa-checkActive");

        $("#sauceCheck1").removeClass("fa-checkActive");
        $("#sauceCheck2").removeClass("fa-checkActive");
        $("#sauceCheck3").removeClass("fa-checkActive");
        $("#sauceCheck4").removeClass("fa-checkActive");
        $("#sauceCheck5").removeClass("fa-checkActive");

        if (selectedData.value == "") {
            selectedData.value = buffalo;
        } else if (selectedData.value != "Buffalo") {
            selectedData.value = buffalo;
        };
    });
});







//Sandwich Buttons
$(document).ready(function () {

    var cheeseData1 = document.getElementById("sandwichCheese1Option1");
    var cheeseData2 = document.getElementById("sandwichCheese2Option2");
    var sauceData1 = document.getElementById("sandwichSauce1Option1");
    var sauceData2 = document.getElementById("sandwichSauce2Option2");

    var vegRenderList = document.getElementById("sandwichVegSelect");
    var emptyVeg = [];

    $("#sandwichCheese1Selector1").click(function () {
        var pepJack1 = document.getElementById("sandwichCheese1Label1").innerHTML;

        if (cheeseData1.value == "") {
            cheeseData1.value = pepJack1;
        } else if (cheeseData1.value != "Pep Jack.") {
            cheeseData1.value = pepJack1;
        }
    });

    $("#sandwichCheese1Selector2").click(function () {
        var cheddar = document.getElementById("sandwichCheese1Label2").innerHTML;

        if (cheeseData1.value == "") {
            cheeseData1.value = cheddar;
        } else if (cheeseData1.value != "Cheddar") {
            cheeseData1.value = cheddar;
        }
    });

    $("#sandwichCheese1Selector3").click(function () {
        var colbyJack = document.getElementById("sandwichCheese1Label3").innerHTML;

        if (cheeseData1.value == "") {
            cheeseData1.value = colbyJack;
        } else if (cheeseData1.value != "Colby Jack") {
            cheeseData1.value = colbyJack;
        }
    });

    $("#sandwichCheese1Selector4").click(function () {
        var smokeGuda = document.getElementById("sandwichCheese1Label4").innerHTML;

        if (cheeseData1.value == "") {
            cheeseData1.value = smokeGuda;
        } else if (cheeseData1.value != "Smoke Guda") {
            cheeseData1.value = smokeGuda;
        }
    });

    $("#sandwichCheese1Selector5").click(function () {
        var american = document.getElementById("sandwichCheese1Label5").innerHTML;

        if (cheeseData1.value == "") {
            cheeseData1.value = american;
        } else if (cheeseData1.value != "American") {
            cheeseData1.value = american;
        }
    });

    $("#sandwichCheese1Selector6").click(function () {
        var swiss = document.getElementById("sandwichCheese1Label6").innerHTML;

        if (cheeseData1.value == "") {
            cheeseData1.value = swiss;
        } else if (cheeseData1.value != "Swiss") {
            cheeseData1.value = swiss;
        }
    });

    $("#sandwichCheese2Selector1").click(function () {
        var pepJack2 = document.getElementById("sandwichCheese2Label1").innerHTML;

        if (cheeseData2.value == "") {
            cheeseData2.value = pepJack2;
        } else if (cheeseData2.value != "Pep Jack.") {
            cheeseData2.value = pepJack2;
        }
    });

    $("#sandwichCheese2Selector2").click(function () {
        var cheddar = document.getElementById("sandwichCheese2Label2").innerHTML;

        if (cheeseData2.value == "") {
            cheeseData2.value = cheddar;
        } else if (cheeseData2.value != "Cheddar") {
            cheeseData2.value = cheddar;
        }
    });

    $("#sandwichCheese2Selector3").click(function () {
        var colbyJack = document.getElementById("sandwichCheese2Label3").innerHTML;

        if (cheeseData2.value == "") {
            cheeseData2.value = colbyJack;
        } else if (cheeseData2.value != "Colby Jack") {
            cheeseData2.value = colbyJack;
        }
    });

    $("#sandwichCheese2Selector4").click(function () {
        var smokeGuda = document.getElementById("sandwichCheese2Label4").innerHTML;

        if (cheeseData2.value == "") {
            cheeseData2.value = smokeGuda;
        } else if (cheeseData2.value != "Smoke Guda") {
            cheeseData2.value = smokeGuda;
        }
    });

    $("#sandwichCheese2Selector5").click(function () {
        var american = document.getElementById("sandwichCheese2Label5").innerHTML;

        if (cheeseData2.value == "") {
            cheeseData2.value = american;
        } else if (cheeseData2.value != "American") {
            cheeseData2.value = american;
        }
    });

    $("#sandwichCheese2Selector6").click(function () {
        var swiss = document.getElementById("sandwichCheese2Label6").innerHTML;

        if (cheeseData2.value == "") {
            cheeseData2.value = swiss;
        } else if (cheeseData2.value != "Swiss") {
            cheeseData2.value = swiss;
        }
    });

    $("#sandwichSauce1Selector1").click(function () {
        var mayo = document.getElementById("sandwichSauce1Label1").innerHTML;

        if (sauceData1.value == "") {
            sauceData1.value = mayo;
        } else if (sauceData1.value != "Mayo") {
            sauceData1.value = mayo;
        }
    });

    $("#sandwichSauce1Selector2").click(function () {
        var ranch = document.getElementById("sandwichSauce1Label2").innerHTML;

        if (sauceData1.value == "") {
            sauceData1.value = ranch;
        } else if (sauceData1.value != "Ranch") {
            sauceData1.value = ranch;
        }
    });

    $("#sandwichSauce1Selector3").click(function () {
        var honeyMustard = document.getElementById("sandwichSauce1Label3").innerHTML;

        if (sauceData1.value == "") {
            sauceData1.value = honeyMustard;
        } else if (sauceData1.value != "Honey Mustard") {
            sauceData1.value = honeyMustard;
        }
    });

    $("#sandwichSauce1Selector4").click(function () {
        var spicyMustard = document.getElementById("sandwichSauce1Label4").innerHTML;

        if (sauceData1.value == "") {
            sauceData1.value = spicyMustard;
        } else if (sauceData1.value != "Spicy Mustard") {
            sauceData1.value = spicyMustard;
        }
    });

    $("#sandwichSauce1Selector5").click(function () {
        var bbqSauce = document.getElementById("sandwichSauce1Label5").innerHTML;

        if (sauceData1.value == "") {
            sauceData1.value = bbqSauce;
        } else if (sauceData1.value != "BBQ Sauce") {
            sauceData1.value = bbqSauce;
        }
    });

    $("#sandwichSauce2Selector1").click(function () {
        var bbqSauce = document.getElementById("sandwichSauce2Label1").innerHTML;

        if (sauceData2.value == "") {
            sauceData2.value = bbqSauce;
        } else if (sauceData2.value != "Mayo") {
            sauceData2.value = bbqSauce;
        }
    });

    $("#sandwichSauce2Selector2").click(function () {
        var bbqSauce = document.getElementById("sandwichSauce2Label2").innerHTML;

        if (sauceData2.value == "") {
            sauceData2.value = bbqSauce;
        } else if (sauceData2.value != "Mayo") {
            sauceData2.value = bbqSauce;
        }
    });

    $("#sandwichSauce2Selector3").click(function () {
        var bbqSauce = document.getElementById("sandwichSauce2Label3").innerHTML;

        if (sauceData2.value == "") {
            sauceData2.value = bbqSauce;
        } else if (sauceData2.value != "Mayo") {
            sauceData2.value = bbqSauce;
        }
    });

    $("#sandwichSauce2Selector4").click(function () {
        var bbqSauce = document.getElementById("sandwichSauce2Label4").innerHTML;

        if (sauceData2.value == "") {
            sauceData2.value = bbqSauce;
        } else if (sauceData2.value != "Mayo") {
            sauceData2.value = bbqSauce;
        }
    });

    $("#sandwichSauce2Selector5").click(function () {
        var bbqSauce = document.getElementById("sandwichSauce2Label5").innerHTML;

        if (sauceData2.value == "") {
            sauceData2.value = bbqSauce;
        } else if (sauceData2.value != "Mayo") {
            sauceData2.value = bbqSauce;
        }
    });

    $("#sandMushInput").click(function () {
        if (emptyVeg.includes("Mushroom") == true) {
            delete emptyVeg[0];
            emptyVeg = emptyVeg.join(' ');
            vegRenderList.innerHTML = emptyVeg;
            console.log('No Mushroom: ' + emptyVeg);
        } else if (emptyVeg.includes("Mushroom") == false) {
            emptyVeg.push("Mushroom");
            emptyVeg = emptyVeg.join(' ');
            console.log("Added Mushroom: " + emptyVeg);
            vegRenderList.innerHTML = emptyVeg;
        }
    });

    $("#sandMixedPepInput").click(function () {
        if (emptyVeg.includes("Mixed Pepper") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[1];
        } else if (emptyVeg.includes("Mixed Pepper") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Mixed Pepper");
            console.log("Added Mixed Pepper: " + emptyVeg);
        }
    });

    $("#sandTomatoInput").click(function () {
        if (emptyVeg.includes("Tomato") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[2];
        } else if (emptyVeg.includes("Tomato") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Tomato");
            console.log("Added Tomato: " + emptyVeg);
        }
    });

    $("#sandOnionInput").click(function () {
        if (emptyVeg.includes("Onion") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[3];
        } else if (emptyVeg.includes("Onion") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Onion");
            console.log("Added Onion: " + emptyVeg);
        }
    });

    $("#sandJalapenoInput").click(function () {
        if (emptyVeg.includes("Jalapeno") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[4];
        } else if (emptyVeg.includes("Jalapeno") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Jalapeno");
            console.log("Added Jalapeno: " + emptyVeg);
        }
    });

    $("#sandPineappleInput").click(function () {
        if (emptyVeg.includes("Pineapple") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[5];
        } else if (emptyVeg.includes("Pineapple") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Pineapple");
            console.log("Added Pineapple: " + emptyVeg);
        }
    });

    $("#sandBananaPepInput").click(function () {
        if (emptyVeg.includes("Banana Pepper") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[6];
        } else if (emptyVeg.includes("Banana Pepper") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Banana Pepper");
            console.log("Added Banana Pepper: " + emptyVeg);
        }
    });

    $("#sandPickleInput").click(function () {
        if (emptyVeg.includes("Pickle") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[7];
        } else if (emptyVeg.includes("Pickle") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Pickle");
            console.log("Added Pickle: " + emptyVeg);
        }
    });

    $("#sandBlackOliveInput").click(function () {
        if (emptyVeg.includes("Black Olive") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[8];
        } else if (emptyVeg.includes("Black Olive") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Black Olive");
            console.log("Added Black Olive: " + emptyVeg);
        }
    });

    $("#sandCucumberInput").click(function () {
        if (emptyVeg.includes("Cucumber") == true) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            delete emptyVeg[9];
        } else if (emptyVeg.includes("Cucumber") == false) {
            // vegRenderList.innerHTML = emptyVeg.join(' ');
            emptyVeg.push("Cucumber");
            console.log("Added Cucumber: " + emptyVeg);
        }
    });
});

