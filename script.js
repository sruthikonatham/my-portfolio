document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const texts = [
    "HELLO SRUTHI HERE!! ",
    "FRONT END DEVELOPER",
    
];

let index = 0;

function changeText() {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.style.opacity = 0; 

    setTimeout(() => {
        dynamicText.innerText = texts[index]; 
        dynamicText.style.opacity = 1; 
    }, 500); 

    index = (index + 1) % texts.length; 
}
document.addEventListener('DOMContentLoaded', () => {
    const elementsToShow = document.querySelectorAll('.fade-in');
  
    const showElements = () => {
      const triggerBottom = window.innerHeight / 5 * 4; // Adjust this for when the animation triggers
  
      elementsToShow.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < triggerBottom) {
          element.classList.add('visible');
          element.classList.remove('hidden');
        } else {
          element.classList.remove('visible');
          element.classList.add('hidden');
        }
      });
    };
  
    window.addEventListener('scroll', showElements);
    showElements(); // Initial check
  });
  

// Change text every second
setInterval(changeText, 2000);
// Function to reveal sections with animation
function revealSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.classList.add('visible');
  });
}
   // Dark Mode Toggle Script
   function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

// Trigger reveal on page load
window.onload = revealSections;

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.innerText = "Sending...";
  responseMessage.style.opacity = 1;

  // Simulate form submission
  setTimeout(() => {
    responseMessage.innerText = "Message sent successfully!";
    responseMessage.style.opacity = 1;

    // Fade out after a few seconds
    setTimeout(() => {
      responseMessage.style.opacity = 0;
    }, 3000);
  }, 2000);
});
function redirectToInstagram() {
  window.open("https://www.instagram.com/the_crazy_coder_7/", "_blank");
}


  // Add event listener to the form
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById('responseMessage');

    // Simple Validation
    if (name === "" || email === "" || message === "") {
        responseMessage.textContent = "⚠️ Please fill out all fields!";
        responseMessage.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        responseMessage.textContent = "⚠️ Please enter a valid email address!";
        responseMessage.style.color = "red";
        return;
    }

    // Show success message (simulating submission)
    responseMessage.textContent = "✅ Thank you! Your message has been sent.";
    responseMessage.style.color = "green";

    // Clear form fields after submission
    document.getElementById('contactForm').reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
