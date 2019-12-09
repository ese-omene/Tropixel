$(document).ready(function () {

    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Fake Data of Specials
    var specials = [
        {
            "Day": "Monday",
            "Meal": "Cucumber and water chestnut salad",
            "Details": "Fresh cucumber and water chestnut served on a bed of lettuce.",
            "img": "CucumberSalad.jpg"
        },
        {
            "Day": "Tuesday",
            "Meal": "Chickpea and spinach parcels",
            "Details": "Thin filo pastry cases stuffed with fresh chickpea and spinach.",
            "img": "Chickpeaparcels.jpg"
        },
        {
            "Day": "Wednesday",
            "Meal": "Tomato and gorgonzola risotto",
            "Details": "Creamy risotto rice with cherry tomatoes and gorgonzola.",
            "img": "Tomatorisotto.jpg"
        },
        {
            "Day": "Thursday",
            "Meal": "Strawberry and orange buns",
            "Details": "Crumbly buns made with fresh strawberries and blood orange.",
            "img": "Strawberrybuns.jpg"
        },
        {
            "Day": "Friday",
            "Meal": "Squash and peppercorn spaghetti",
            "Details": "Spagetti topped with a blend of fresh squash and szechuan peppercorn.",
            "img": "Squashspaghetti.jpg"
        },
        {
            "Day": "Saturday",
            "Meal": "Polenta and treacle muffins",
            "Details": "Fluffy muffins made with polenta and dark treacle.",
            "img": "Polentamuffins.jpg"
        },
        {
            "Day": "Sunday",
            "Meal": "Spinach and mustard crepes",
            "Details": "Fluffy crepes filled with baby spinach and dried mustard.",
            "img": "Spinachcrepes.jpg"
        }
    ];

    var monthlySpecial = {
        "Meal": "Squash and pumpkin seed lasagne",
        "Details": "Layers of egg-free pasta interspersed with pattypan squash and pumpkin seeds.",
        "img": ["lasagne1.jpg", "lasagne2.jpg"]
    }

    // List the days
    specials.forEach(function (item) {
        $("#days").append('<li>' + item["Day"] + '</li>');
    });

    // Hover events
    $("#days li").hover(
        function () {
            var index = $(this).index();
            selectDay(index);
        }
    );

    // Select today's special
    var date = new Date();
    var day = date.getDay();
    if(day == 0)
        day = 7;
    selectDay(day - 1);


    // Select Day
    function selectDay(index) {
        $("#days li").removeClass("selectedDay");
        $("#special-image").attr("src", "images/specials/" + specials[index]["img"]);
        $("#special-text h1").text(specials[index]["Meal"]);
        $("#special-text p").text(specials[index]["Details"]);
        $("#days li:nth-child(" + (index + 1) + ")").addClass("selectedDay");
    }

    // Monthly Special part
    $("#monthlyTitle").text(monthlySpecial.Meal);
    var monthIndex = date.getMonth();
    $("#month").text(monthNames[monthIndex]);
    $("#monthlyDesc").text(monthlySpecial.Details);

    var flag = 0;
    $("#monthlyImg").attr("src", "images/specials/" + monthlySpecial.img[1]);
    setInterval(function () {
        flag = 1 - flag;
        if (flag == 1)
            $("#monthlyImg").attr("src", "images/specials/" + monthlySpecial.img[0]);
        else
            $("#monthlyImg").attr("src", "images/specials/" + monthlySpecial.img[1]);
    }, 3000);
});