// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn"t run until the browser has finished rendering all the elements
// in the html.
var textArea = $(".textarea")
var todayDate = $("#currentDay")
var presentTimeBlock = $(".present")
var pastTimeBlock = $(".past")
var futureTimeBlock = $(".future")
var saveBtn = $(".saveBtn")
var inputDescription = $(".description")
var containerEl = $(".row")
var timeBlock = $(".time-block")
//old logic
var hour9 = $("#hour-9")
var hour10 = $("#hour-10")
var hour11 = $("#hour-11")
var hour12 = $("#hour-12")
var hour1 = $("#hour-1")
var hour2 = $("#hour-2")
var hour3 = $("#hour-3")
var hour4 = $("#hour-4")
var hour5 = $("#hour-5")
//assighning values to strings (old logic(diffrent logic used))
var hour9N = 9
var hour10N = 10
var hour11N = 11
var hour12N = 12
var hour1N = 13
var hour2N = 14
var hour3N = 15
var hour4N = 16
var hour5N = 17
//targeting text input of getItem
var textArea9 = $("#hour-9 .description")
var textArea10 = $("#hour-10 .description")
var textArea11 = $("#hour-11 .description")
var textArea12 = $("#hour-12 .description")
var textArea1 = $("#hour-13 .description")
var textArea2 = $("#hour-14 .description")
var textArea3 = $("#hour-15 .description")
var textArea4 = $("#hour-16 .description")
var textArea5 = $("#hour-17 .description")





$(function () {
  //display time with dayjs
    displayTime()

     function displayTime() {
    var currentTime = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    //insert dayjs. into current time
    todayDate.text(currentTime);
    console.log(currentTime)

    //Use class for "past", "present", and "future" to apply styles to the
    //time-block divs accordingly. The javascript will need to do this by
    //adding/removing these classes on each div by comparing the hour in the
    //id to the current hour. The html provided below is meant to be an example
    //demonstrating how the css provided can be leveraged to create the
    //desired layout and colors. The html below should be removed or updated
    //in the finished product. Remember to delete this comment once the
    //code is implemented.

    saveBtn.on("click", function () {
      //adding event listener to trigger local storage
      //this represents the possibility of any save buttons being clicked and still having the same event
      var sum = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, sum);
      console.log(time)
      console.log(sum)
      //console log to ensure that data is properly stored
    });


    function PastPresentFuture() {
      var hourX = dayjs().hour();
      //new logic on adding a numerical value to the time
      console.log(hourX)
      timeBlock.each(function () {
        //The parseInt() function parses a string and returns an integer
        //must use this because we had to refer to all hours and split them individually
        var sectionHour = parseInt($(this).attr("id").split("-")[1]);
        console.log($(this))
        if (sectionHour < hourX) {
          //if the hour on the to-do list is in the past the add class"past"
          //cannot use timeBlock beacuse it causes a bug. had to use $(this) to give the possibility for all hours to be assighned a value
          console.log("egg")
          $(this).addClass("past");
        } else if (sectionHour === hourX) {
          console.log("bacon")
          //then if hour is the same as hourX change class to present
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          console.log("toast")
          //if hour x does not equal either than change class to future
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    PastPresentFuture();

  //using getItem to call keys out of localStorage
  //console logging to view localstorage data in console
    textArea9.val(localStorage.getItem("hour-9"));
    console.log(localStorage.getItem("hour-9"))
    textArea10.val(localStorage.getItem("hour-10"));
    console.log(localStorage.getItem("hour-10"))
    textArea11.val(localStorage.getItem("hour-11"));
    console.log(localStorage.getItem("hour-11"))
    textArea12.val(localStorage.getItem("hour-12"));
    console.log(localStorage.getItem("hour-12"))
    textArea1.val(localStorage.getItem("hour-13"));
    console.log(localStorage.getItem("hour-13"))
    textArea2.val(localStorage.getItem("hour-14"));
    console.log(localStorage.getItem("hour-14"))
    textArea3.val(localStorage.getItem("hour-15"));
    console.log(localStorage.getItem("hour-15"))
    textArea4.val(localStorage.getItem("hour-16"));
    console.log(localStorage.getItem("hour-16"))
    textArea5.val(localStorage.getItem("hour-17"));
    console.log(localStorage.getItem("hour-17"))
  


    // X TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "value" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // X TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // X TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // X TODO: Add code to display the current date in the header of the page.
  }
})
