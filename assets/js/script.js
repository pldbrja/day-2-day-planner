var todayDate = moment();
var informationEntry = $(".description");

$("#currentDay").text(todayDate.format("[The current date is] dddd, MMMM Do[.]"));

function entryColorCode() {
    var todayHour = moment().hour();

    console.log(todayHour);

    $(".description").each(function () {
        var assignHour = $(this).attr("data-store");
            if(todayHour < assignHour) {
                $(this).addClass("future");
            } else if(todayHour == assignHour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            };
    });
};

function getValues() {
    $(".description").each(function() {
        for (i = 0; i < localStorage.length; i++) {
            $(this).val(localStorage.getItem(i));
        };
    });
};

$(".saveBtn").on("click", function() {
    var loggedDescription = $(this).siblings(".description").val();
    var descriptionNo = $(this).siblings(".description").attr("id");
    console.log($(this).siblings(".description").val());
    
    localStorage.setItem(descriptionNo, loggedDescription);

});

getValues();

entryColorCode();

console.log(localStorage);