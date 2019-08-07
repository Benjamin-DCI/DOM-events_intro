// events and event listeners (event handlers)

// window.addEventListener("mousedown", function(e) {
//   alert("WINDOW");
//   console.log(e);
// })

// ---------------------------------

// Event.preventDefault()

// we use this method when we DO NOT want an HTML element to behave in its default manner

// let link = document.querySelector("a");
// This is the method to access the first matched element
//
// link.addEventListener("click", function(e) {
//   console.log("Redirecting Stopped");
//   e.preventDefault();
// })

// ------------------------------

// Event.stopPropagation()
// Events flow upwards

// document.getElementById("button12").addEventListener("mousedown", function(e) {
//   alert("Button clicked");
//   if(e.button === 2) {
//     e.stopPropagation();
//   }
// });
//
// // Event listener on the paragraph element with its logic
//
// document.getElementById("demo").addEventListener("mousedown", function(e) {
//   alert("paragraph clicked");
// });

//------------------------------------

// remove an event listener from an element
// In order to remove an event listener from an element, we need to call the removeEventListener method with the event name and the funtion name

//
// let heading = document.querySelector("h1");
//
// function listener(e) {
//   if(e.type === "mouseenter") {
//     heading.style.color = "orangered";
//   } else if(e.type === "mouseleave") {
//     heading.style.color = "chartreuse";
//     heading.removeEventListener("mouseleave", listener)
//   }
//   console.log(e);
// }
//
// heading.addEventListener("mouseenter", listener);
// heading.addEventListener("mouseleave", listener);

// DOMContentLoaded
// if you want to take some action once the HTML scripts have been loaded, you use DOMContentLoaded

// function onLoad(e) {
//   console.log(e);
//   alert("Page has loaded")
// };
//
// document.addEventListener("DOMContentLoaded", onLoad);


// keyup

// let input = document.querySelector("input");
//
// function onKeyUpEvent(e) {
//   console.log(e);
//   alert(e.key + " was pressed.")
// }
//
// input.addEventListener("keyup", onKeyUpEvent);

// Form Events
// submit

// function logSubmit(e) {
//   log.textContent = `Form Submitted! Time Stamp ${e.timeStamp}`;
//   e.preventDefault();
//   let formData = new FormData(e.target);
//   console.log(formData.get("name"));
// }
//
// const form = document.getElementById("form");
// const log = document.getElementById("log");
// form.addEventListener("submit", logSubmit);
//
//
// // reset
//
// function logReset(e) {
//   resetLog.textContent = `Form reset! Time stamp: ${e.timeStamp}`
// }
//
// const resetLog = document.getElementById("reset-log");
// document.getElementById("reset").addEventListener("reset", logReset);
