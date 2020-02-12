//recieves the friend names from user, holding them in variables
let firstFriend = prompt("Enter the name of your first of three friends.")
let secondFriend = prompt("Enter the name of your second of three friends.")
let thirdFriend = prompt("Enter the name of your third of three friends.")

//recieves which friend was the best friend from the user storing information as a number
let bestFriend =  Number(prompt('Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third.'))

//creates a variable to hold array of friends names and displays them
var friendNames = [`${firstFriend}`,`${secondFriend}`,`${thirdFriend}`]
  alert(friendNames[0])
  alert(friendNames[1])
  alert(friendNames[2])
  
//deciphers the value stored in bestfriend variable, relating it to a friend variable
//alerts which friend is your best friend
//Decides whether the name starts with an A or a B and displays an appropriate message
if (bestFriend == 1) {
   alert(`Your best friend is: ${friendNames[0]}`);
       if (friendNames[0].charAt(0) == 'A' || friendNames[0].charAt(0) == 'a') {
       alert(`Your best friends name starts with A.`);
       } else if (friendNames[0].charAt(0) == 'B' || friendNames[0].charAt(0) == 'b') {
       alert(`Your best friends name starts with B.`);
       } else {
       alert(`Your best friends name starts with something other than A or B.`);
       }
  } else if (bestFriend == 2) {
   alert(`Your best friend is:  ${friendNames[1]}`);
       if (friendNames[1].charAt(0) == 'A' || friendNames[1].charAt(0) == 'a') {
       alert(`Your best friends name starts with A.`);
       } else if (friendNames[1].charAt(0) == 'B' || friendNames[1].charAt(0) == 'b') {
       alert(`Your best friends name starts with B.`);
       } else {
       alert(`Your best friends name starts with something other than A or B.`);
       }
  } else if (bestFriend == 3) {
   alert(`Your best friend is:  ${friendNames[2]}`);
        if (friendNames[2].charAt(0) == 'A' || friendNames[2].charAt(0) == 'a') {
       alert(`Your best friends name starts with A.`);
       } else if (friendNames[2].charAt(0) == 'B' || friendNames[2].charAt(0) == 'b') {
       alert(`Your best friends name starts with B.`);
       } else {
       alert(`Your best friends name starts with something other than A or B.`);
       }
 } 