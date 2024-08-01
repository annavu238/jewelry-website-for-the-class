// Set the date we're counting down to
const countDownDate = new Date("August 2, 2024").getTime();

// Get price elements
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");

// Function to update countdown and prices
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Check if countdown element exists
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.innerHTML = 
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
    
    // Check if sale-end element exists and creates a constant variable
    const saleEndElement = document.getElementById("sale-end"); 
    //Nested If statements
    if (saleEndElement) {
        // If the countdown is over, hide the sale-end section
        if (distance < 0) {
            clearInterval(x); // Stop the interval timer
            saleEndElement.style.display = "none"; // Hide the element

            // Revert to regular prices and remove sale class
            if (price1) {
                price1.innerText = "$199.99";
                price1.classList.remove("sale-price");
            }
            if (price2) {
                price2.innerText = "$89.99";
                price2.classList.remove("sale-price");
            }
            if (price3) {
                price3.innerText = "$299.99";
                price3.classList.remove("sale-price");
            }
        } else {
            // Sale is ongoing; show sale prices and add sale class
            if (price1) {
                price1.innerText = "$159.99, was $199.99"; // Sale price for Product 1
                price1.classList.add("sale-price");
            }
            if (price2) {
                price2.innerText = "$69.99, was $89.99";  // Sale price for Product 2
                price2.classList.add("sale-price");
            }
            if (price3) {
                price3.innerText = "$239.99, was $299.99"; // Sale price for Product 3
                price3.classList.add("sale-price");
            }
        }
    }
}

// Update countdown initially
updateCountdown();

// Update every 1 second
const x = setInterval(updateCountdown, 1000);
