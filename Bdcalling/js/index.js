// JavaScript to manage active list item color change

function setActive(clickedItem) {
    // Select all sidebar list items
    const listItems = document.querySelectorAll('.sidebar-item');
  
    // Remove active class and reset color for all items
    listItems.forEach(item => {
      item.style.backgroundColor = '';  // Reset background color
      item.style.color = '';            // Reset text color
    });
  
    // Apply active styles to the clicked item
    clickedItem.style.backgroundColor = '#007bff';  // Set active background color
    clickedItem.style.color = 'white';               // Set active text color
  }
  