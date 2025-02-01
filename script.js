 // Initialize counter variable
 let count = 0;

 // Function to update the counter display
 function updateCounterDisplay() {
     document.getElementById('counter').textContent = count;
 }

 // Function to increment the counter
 function incrementCounter() {
     count++;
    
     updateCounterDisplay();
 }
 function decrementCounter() {
    count--;
    updateCounterDisplay();
}



