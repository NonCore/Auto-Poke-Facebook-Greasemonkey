// ==UserScript==
// @name        Facebook Poke Back Bot
// @namespace   fb
// @description Poke Back 
// @match     https://www.facebook.com/pokes/?notif_t=poke
// @version     1
// @grant       none
// ==/UserScript==

// Initialize the total number of pokes
let totalPokes = 0;

// Function to perform the poke back action
function pokeBack() {
  // Get all elements on the page
  const allElements = document.getElementsByTagName("span");

  // Loop through all elements
  for (let i = 0; i < allElements.length; i++) {
    // Assign each element to the currentElement variable
    const currentElement = allElements[i];

    // Check if the element contains the text "Poke Back"
    if (currentElement.innerHTML.includes("Poke Back")) {
      // Perform the poke back action
      currentElement.click();

      // Increment the total number of pokes
      totalPokes++;

      // Log the total number of pokes to the console
      console.log(`Total pokes: ${totalPokes / 2}`);
    }
  }

  // Call the pokeBack function again after a delay of 1 second
  setTimeout(pokeBack, 1000);

  // Reload the page after a delay of 2 minutes
  setTimeout(reloadPage, 120000);
}

// Function to reload the page
function reloadPage() {
  location.reload();
}

// Call the pokeBack function to start the script
pokeBack();
