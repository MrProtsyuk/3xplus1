let user_input = document.getElementById("user_input");
let num_list = [];
let num_array = document.getElementById("num_array");
let user_message = document.getElementById("user_message");

// // Checks for duplicates outside the 4,2,1. if there is a loop then you have beaten the conjecture
// function checkForDuplicates(num_list) {
//   return new Set(num_list).size !== num_list.length;
// }

function even_check(user_input) {
  // checks if the number is 1; if one then it breaks the 4,2,1 loop and ends the conditional loop
  if (user_input == 1) {
    num_list.push(user_input);
    document.getElementById("num_array").innerHTML = num_list;
    document.getElementById("user_message").innerHTML =
      "Unfortunalty you hit 1! That means that the formula will continue to spit out 4, 2, 1 forever. For the Purposes of this program I made sure to cut it off at 1 ;)";
  }

  // checks if the number is even; if even then it is divided by 2 and thrown back into the conditional
  else if (user_input % 2 == 0) {
    user_input = user_input / 2;
    num_list.push(user_input);
    even_check(user_input);
  }
  // checks if there are any repeated numbers; repeated numbers create loops outside the 4,2,1 loop
  //   else if ((checkForDuplicates = true)) {
  //     document.getElementById("num_array").innerHTML = num_list;
  //     document.getElementById("user_message").innerHTML =
  //       "Hey! You have found a loop outside of the 4,2,1 loop! Congratulations, you might possibly be the first person in history to do so.";
  //   }
  // checks if the number is odd; if odd it *3 and adds one then is thrown back into the conditional
  else if (user_input % 2 != 0) {
    user_input = user_input * 3 + 1;
    num_list.push(user_input);
    even_check(user_input);
  }
}
