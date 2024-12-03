// Get the elements
const searchInput = document.querySelector('.serach-box input[type="search"]');
const searchButton = document.querySelector('.serach-box button');

// Function to handle the search action
function handleSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        alert(`You searched for: ${searchTerm}`);
        // For a real search, you could redirect or fetch data based on the search term
        // window.location.href = `/search-results?query=${encodeURIComponent(searchTerm)}`;
    } else {
        alert('Please enter a search term');
    }
}

// Attach event listeners
searchButton.addEventListener('click', handleSearch);

// Optional: Allow pressing Enter to trigger the search
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Navbar interaction: Add active class to the clicked item
const navbarLinks = document.querySelectorAll('.navber ul li a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarLinks.forEach(link => link.classList.remove('active'));  // Remove active from all
        this.classList.add('active');  // Add active class to clicked item
    });
});
// pdf sections for resume
function goToResumePage() {
    window.open("Black Modern Professional Resume (1).pdf", "_blank");  // Opens the PDF in a new tab
}
// project 
function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    const toggleBtn = projectDetails.previousElementSibling.querySelector('.toggle-btn');

    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
        toggleBtn.textContent = "-";
    } else {
        projectDetails.style.display = "none";
        toggleBtn.textContent = "+";
    }
}
// contact 
document.addEventListener("DOMContentLoaded", function() {
    // Form element
    const contactForm = document.querySelector(".contact-form");
  
    // Submit event listener for form
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Simple form validation
      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }
  
      // Simulate form submission success
      showSuccessMessage();
  
      // Optionally, clear the form after submission
      contactForm.reset();
    });
  
    // Function to show success message
    function showSuccessMessage() {
      const successMessage = document.createElement("div");
      successMessage.classList.add("success-message");
      successMessage.textContent = "Thank you! Your message has been sent successfully.";
      
      // Append success message below the form
      contactForm.appendChild(successMessage);
  
      // Remove success message after 3 seconds
      setTimeout(function() {
        successMessage.remove();
      }, 3000);
    }
  
    // Add focus effect on inputs
    const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
  
    inputs.forEach(input => {
      input.addEventListener("focus", function() {
        input.style.borderColor = "#FF6347";
      });
  
      input.addEventListener("blur", function() {
        input.style.borderColor = "#ccc";
      });
    });
  });
  // serach 
  
  document.querySelector('.search-bar button').addEventListener('click', function() {
    let input = document.querySelector('.search-bar input').value.toLowerCase();
    let sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        let textContent = section.textContent || section.innerText;
        if (textContent.toLowerCase().includes(input)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
