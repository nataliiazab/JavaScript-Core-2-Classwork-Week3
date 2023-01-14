/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const pElements = document.querySelectorAll("p");
// console.log(pElements);

const theFirstDivEl = document.querySelector("div");
// console.log(theFirstDivEl);

const idEl = document.querySelector("#jumbotronText");
// console.log(idEl);

const pElInsideEl = document.querySelectorAll(".primary-content p");
// console.log(pElInsideEl);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector("#alertBtn");

alertButton.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", () => {
  let bodySelector = document.querySelector("body");
  bodySelector.classList.add("background--red");
  // bodySelector.style.backgroundColor = "red";
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

let largerLinksButton = document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click", () => {
  let aTags = document.querySelectorAll("a");

  //solution with for loop:
  // for (let i = 0; i < aTags.length; i++) {
  //   aTags[i].style.fontSize = "2rem";
  // }

  aTags.forEach((aTag) => (aTag.style.fontSize = "2rem"));
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const addSomeTextBtn = document.querySelector("#addArticleBtn");

addSomeTextBtn.addEventListener("click", () => {
  let articleInputField = document.querySelector("#addArticleInput").value;
  let myNewPar = document.createElement("p");
  myNewPar.innerText = articleInputField;
  let existEl = document.querySelector("#addArticle");
  existEl.appendChild(myNewPar);
});

// const contentDiv = document.querySelector("#content"); //id
// const articles = document.querySelector("article"); //class
// const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);
