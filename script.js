// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var textArea = $(".textarea")
var todayDate = $("#currentDay")
var presentTimeBlock = $(".present")
var pastTimeBlock = $(".past")
var futureTimeBlock = $(".future")
var saveBtn = $(".saveBtn")
var hour = $(".hour")
var inputDescription = $(".description")
var containerEl = $(".row")
var timeBlock = $(".time-block")
var hour9 = $("#hour-9")
var hour10 = $("#hour-10")
var hour11 = $("#hour-11")
var hour12 = $("#hour-12")
var hour1 = $("#hour-1")
var hour2 = $("#hour-2")
var hour3 = $("#hour-3")
var hour4 = $("#hour-4")
var hour5 = $("#hour-5")
//assighning values to strings
var hour9N = 9
var hour10N = 10
var hour11N = 11
var hour12N = 12
var hour1N = 1
var hour2N = 2
var hour3N = 3
var hour4N = 4
var hour5N = 5




  $(function () {
    //display time with dayjs
    displayTime()

    function displayTime() {
      var currentTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

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
      if (currentTime < timeBlock) {
        console.log("past")
        timeBlock.addClass("past")
      } else if (currentTime == timeBlock) {
        console.log("present")
        timeBlock.addClass("present")
        timeBlock.removeClass("past")
      } else {
        console.log("future")
        timeBlock.addClass("future")
        timeBlock.removeClass("past", "present")
      }





      saveBtn.on("click", function () {
        var sum = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, sum);
        console.log(time)
        console.log(sum)

      });


      // TODO: Add a listener for click events on the save button. This code should
      // use the id in the containing time-block as a key to save the user input in
      // local storage. HINT: What does `this` reference in the click listener
      // function? How can DOM traversal be used to get the "hour-x" id of the
      // time-block containing the button that was clicked? How might the id be
      // useful when saving the description in local storage?
      //
      // TODO: Add code to apply the past, present, or future class to each time
      // block by comparing the id to the current hour. HINTS: How can the id
      // attribute of each time-block be used to conditionally add or remove the
      // past, present, and future classes? How can Day.js be used to get the
      // current hour in 24-hour time?
      //
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      //
      // X TODO: Add code to display the current date in the header of the page.
    })
