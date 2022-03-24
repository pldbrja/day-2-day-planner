var todayDate = moment();
var informationEntry = $(".description");

$("#currentDay").text(todayDate.format("[The current date is] dddd, MMMM Do[.]"));

function entryColorCode() {
    var todayHour = moment().hour();
    var assignHour = informationEntry.attr("data-store");

    console.log(todayHour);
    console.log(assignHour);

    $(".time-block").children("textarea").each(function () {
            if(todayHour < assignHour) {
                $(this).addClass("future");
            } else if(todayHour == assignHour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            };
        getValues();
    });
};

function getValues(hour) {
    var savedDescription = localStorage.getItem(hour);
    


    console.log(savedDescription)
};

$(".saveBtn").on("click", function() {
    var loggedDescription = $(this).siblings(".description").val();
    var descriptionNo = $(this).siblings(".description").data("store");
    console.log($(this).siblings(".description").val());
    
    localStorage.setItem(descriptionNo, loggedDescription);

});

getValues();

entryColorCode();

console.log(localStorage);