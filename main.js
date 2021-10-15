let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'oldman.jpeg') {
        myImage.setAttribute('src', 'oldman2.jpg');
    } else {
        myImage.setAttribute('src', 'oldman.jpeg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) { // Does the 'name' data exist in local storage?
    setUserName(); // Ask user for name.
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Old men are super lame, ' + storedName; // Get existing data and personalize heading.
}

myButton.onclick = function() { // Run setUserName(); if button is clicked.
    setUserName();
}