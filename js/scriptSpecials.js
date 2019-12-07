$(document).ready(function () {
    
    // Data of Specials
    var specials = [
        {
            "Day": "Monday", 
            "Meal": "Caribbean Fish Stew", 
            "Details": "With two types of fish and a combination of delicious spices, this dish is a seafood lover's dream and total crowd-pleaser.",
            "img": "CaribbeanFishStew.jpg"
        },
        {
            "Day": "Tuesday",
            "Meal": "Caribbean Chicken Kebab",
            "Details": "Cook up the flavor of the islands by grilling chicken on skewers with pineapple, onion and bell pepper pieces, and topping with spicy lime butter.",
            "img": "CaribbeanChickenKebab.jpg"
        },
        {
            "Day": "Wednesday",
            "Meal": "Coconut French Toast",
            "Details": "Replacing some of the milk with canned coconut milk is the secret ingredient to making this island-style French toast.",
            "img": "CoconutFrenchToast.jpg"
        },
        {
            "Day": "Thursday",
            "Meal": "Cuban Sandwich",
            "Details": "A flavorful marinade makes this pork sandwich a winner.",
            "img": "CubanSandwich.jpg"
        },
        {
            "Day": "Friday",
            "Meal": "Mango-Pineapple Crab Salad",
            "Details": "This simple and beautiful salad also features creamy avocado.",
            "img": "MangoPineapple.jpg"
        },
        {
            "Day": "Saturday",
            "Meal": "Scallops with Mango Vinaigrette",
            "Details": "The key to great grilled scallops is a preheated grill. The grates must be hot when the scallops are placed on them, otherwise the scallops with stick and tear. If you are not a grill pro, you can broil in the oven for similar results.",
            "img": "Scallops.jpg"
        },
        {
            "Day": "Sunday",
            "Meal": "Tropical Fruit, Avocado, and Grilled Shrimp Salad",
            "Details": "We couldn’t stop eating this delicious blend of seafood and fruit. The interesting technique of salting the onions really does make a difference―they become mild enough to not overpower the fruit, but you can still taste their flavor.",
            "img": "TropicalFruit.jpg"
        }
    ];
    
    // List the days
    specials.forEach(function(item){
        $("#days").append('<li>' + item["Day"] + '</li>');
    });

    // Hover events
    $("#days li").hover(
        function(){
            var index = $(this).index();
            selectDay(index);
        }
    );

    // Select today's special
    var date = new Date();
    var day = date.getDay();
    selectDay(day-1);
    

    // Select Day
    function selectDay(index){
        $("#days li").removeClass("selectedDay");
        $("#special-image").attr("src", "images/specials/" + specials[index]["img"]);
        $("#special-text h1").text(specials[index]["Meal"]);
        $("#special-text p").text(specials[index]["Details"]);
        $("#days li:nth-child(" + (index+1) + ")").addClass("selectedDay");
    }
});