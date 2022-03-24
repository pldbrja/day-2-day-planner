var todayDate = moment();
var informationEntry = $(".description");
var hourDescription = $(".description").val();

$("#currentDay").text(todayDate.format("[The current date is] dddd, MMMM Do[.]"));


$(".saveBtn").on("click", function() {
    console.log($(this).siblings(".description").val());
    $(this).siblings(".description").val();

    localStorage.setItem('descriptions', hourDescription);
});

function entryColorCode() {
    var todayHour = moment().hours();
    var assignHour = $(this).data();


    informationEntry.each(function () {
    if(todayHour < assignHour) {
        informationEntry.addClass("future");
    } else if(todayHour == assignHour) {
        informationEntry.addClass("present");
    } else {
        informationEntry.addClass("past");
    }
});
};

function init() {
    localStorage.getItem('descriptions', hourDescription)
}

init();

entryColorCode();