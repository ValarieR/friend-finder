// var friends = require("../app/data/friends.js");
//
// $(document).ready(function () {
//
//     console.log("JS is linked");
//
//     // initializes Meterialize
//     $('select').material_select();
//
//     // inits parallax
//     $('.parallax').parallax();
//
//     // inits collapsible answer selections
//     $('.collapsible').collapsible();
//
//     // inits and modifies the new friend modal
//     $('.modal').modal({
//             dismissible: true, // Modal can be dismissed by clicking outside of the modal
//             opacity: .5, // Opacity of modal background
//             inDuration: 300, // Transition in duration
//             outDuration: 200, // Transition out duration
//             startingTop: '4%', // Starting top style attribute
//             endingTop: '10%', // Ending top style attribute
//             ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
//                 alert("Ready");
//                 console.log(modal, trigger);
//             },
//             complete: function() { alert('Closed'); } // Callback for Modal close
//         }
//     );
//
//     // main on click that calls all the things
//     $("#submitInfo").on("click", function (event) {
//         event.preventDefault();
//
//     // validate that everything was filled out
//     function formValidation() {
//         var valid = true;
//         $('.form-control').each(function () {
//             if ( $(this).val() === '')
//                 valid = false;
//                 alert("Please complete the form to continue.")
//         });
//         $('.chosen').each(function () {
//             if ( $(this).val() === '')
//                 valid = false;
//                 alert("Please select a level of agreement for each statement.")
//         });
//         return valid;
//     };
//
//
//     // make a new foodie
//     function makeFriend() {
//         var newFriend = null;
//
//         if (formValidation() == true) {
//              newFriend = {
//                 name: $("#name").val(),
//                 photo: $("#img").val(),
//                 scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(),]
//             }
//         }
//         return newFriend;
//     };
//
//     // add new person to the friends API
//     function addToApi() {
//         $.post("/api/friends", newFriend, function (data) {
//             if (data) {
//                 console.log("new friend added")
//             } else {
//                 console.log("new friend NOT added")
//             }
//         });
//     };
//
//
//
//
//     // function to match the new person and display it
//     function bestMatch() {
//
//
//         // activate the modal with best match
//         $("#modal1").modal('open');
//     };
//
//     // $("#submitInfo").on("click", function (event) {
//     //     event.preventDefault();
//
//         formValidation();
//         makeFriend();
//         bestMatch();
//         addToApi();
//     // close of on click
//     })
//
//
//
// // Close of doc ready
// });