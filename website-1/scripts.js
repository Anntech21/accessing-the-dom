// ********************** Exercise 1 ********************** //

// Select and then log the first <p> element on the page.

let paragraphVariable = document.querySelector("p");
console.log("paragraphVariable");

// ********************** Exercise 2 ********************** //

// Select and then log all of the list items on the website.

let listItems = document.getElementsByTagName("li");
console.log(listItems);

// ********************** Exercise 3 ********************** //

// Select and then log only the first list item on the website.

let listFirstItem = document.querySelector("li");
console.log(listFirstItem);

// ********************** Exercise 4 ********************** //

// Give a class name to each of the paragraphs on the website. Select all of the paragraphs with the class name.

let para = document.querySelectorAll(".para");
console.log(para);

// ********************** Exercise 4 ********************** //

// Select and then log the element with the id of 'heading'

let heading = document.getElementById("heading");
console.log("heading");
