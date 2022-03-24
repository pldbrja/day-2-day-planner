var todayDate = moment();
var informationEntry = $(".description");

$("#currentDay").text(todayDate.format("[The current date is] dddd, MMMM Do[.]"));

$(".saveBtn").on("click", function() {
    var loggedDescription = $(this).siblings(".description").val();
    var descriptionNo = $(this).siblings(".description").data("store");
    console.log($(this).siblings(".description").val());
    
    localStorage.setItem(descriptionNo, loggedDescription);

});

function entryColorCode() {
    var todayHour = moment().hours();
    var assignHour = informationEntry.map(function() {
        return $(this).data("store");
    })

    $(".time-block").children("textarea").each(function () {
        console.log(informationEntry.attr("data-store"));

    if(todayHour < assignHour) {
        informationEntry.addClass("future");
        informationEntry.removeClass("present");
    } else if(todayHour == assignHour) {
        informationEntry.addClass("present");
    } else {
        informationEntry.addClass("past");
    }
});
};

function init() {
    var savedDescription = function () {
        for (var i=0; i < localStorage.length; i++) {
        localStorage.getItem(key[i]);
        };
    };

    $(".time-block").each(function () {
         $(this).children(".description").val = savedDescription;
    });
};

init();

entryColorCode();