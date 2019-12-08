$(document).ready(function () {

    // Data of Events
    var events = [
        {
            "Name": "Christmas Dinner",
            "Desc": "We all gather to have dinner.",
            "Date": new Date(2019, 11, 25, 19, 30),
            "Confirmed": 1
        },
        {
            "Name": "New Year Party",
            "Desc": "Let's welcome 2020 all together!",
            "Date": new Date(2019, 11, 31, 22, 00),
            "Confirmed": 1
        },
        {
            "Name": "JS Networking",
            "Desc": "JS developers meet and discuss JS updates.",
            "Date": new Date(2020, 0, 10, 16, 30),
            "Confirmed": 1
        }
    ];

    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // List the events
    events.forEach(function (item) {
        var day = item["Date"].getDate();
        var monthIndex = item["Date"].getMonth();
        var year = item["Date"].getFullYear();
        var hour = item["Date"].getHours();
        if (hour < 10) hour += "" + hour;
        var mins = item["Date"].getMinutes();
        if (mins < 10) mins += "" + mins;
        var date = day + ' ' + monthNames[monthIndex] + ' ' + year + ", " + hour + ":" + mins;

        $("#eventlist").append('<h3 class="eventtitle">' + item["Name"] + '</h3>');
        $("#eventlist").append(
            '<div class="eventdetails">'
            + '<p class="eventdesc">' + item["Desc"] + '</p>'
            + '<p class="eventdate">' + date + '</p>'
            + '</div>'
        );
    });

    // Click events
    $(".eventtitle").click(toggleEvent);

    function toggleEvent() {
        $(".eventdetails").not($(this).next('.eventdetails')).hide();
        $(this).next(".eventdetails").fadeToggle(1000);
    }

    // Form submit
    $("#bookingform").submit(function (e) {
        e.preventDefault();
        var inputs = "Your reservation is received. We will contact you soon. <br/>"
            + "Reservation Details as follows...<br/>"
            + "Name: " + $("#eventname").val() + "<br/>"
            + "Participants: " + $("#eventpeople").val() + " person(s)<br/>"
            + "Date: " + $("#eventdate").val() + "<br/>"
            + "Time: " + $("#eventtime").val() + "<br/>"
            + "Email: " + $("#eventemail").val() + "<br/>"
            + "Description: " + $("#eventdesc").val() + "<br/>";
        $("#bookingdetails").html(inputs);
    });

    // Event Counter
    var today = new Date();
    var dayDifference = (events[0]["Date"] - today) / (1000 * 3600 * 24);
    $("#timerCounter").text(dayDifference.toFixed());

});
