
// Get the search button and input elements
const $searchButton = $('#searchButton');
const $searchInput = $('#searchInput');

// Add event listener to the search button
$searchButton.on('click', function() {
  // Toggle the visibility of the search input field
  if ($searchInput.css('display') === 'none') {
    $searchInput.css('display', 'block').focus();  // Optionally focus the input field when shown
  } else {
    $searchInput.css('display', 'none');
  }
});


// email validation ------------

$(document).ready(function(){
  $("#submit").click(function(){
    let email = $("#email").val();
    let phone = $("#phone").val();

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^[0-9]{10}$/; // Simple validation for 10-digit phone number

    let validEmail = emailRegex.test(email);
    let validPhone = phoneRegex.test(phone);

    // Email validation
    if(!validEmail) {
      $("#error").show();
    } else {
      $("#error").hide();
    }

    // Phone validation
    if(!validPhone) {
      $("#phoneError").show();
    } else {
      $("#phoneError").hide();
    }

    // If both are valid, proceed with submission
    if(validEmail && validPhone) {
      alert("Form is valid!");
    }
  });
});

// ---------------------------------------------------

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  const form = event.target;

  // Check if the form is valid
  if (!form.checkValidity()) {
    event.preventDefault(); // Prevent form submission
    event.stopPropagation();
    alert('Please fill in all required fields before submitting.');
  } else {
    alert('Form submitted successfully!');
  }

  form.classList.add('was-validated'); // Add Bootstrap validation styles
});



















// ---------------------------------------------

$(document).ready(function() {
  setTimeout(function() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3, // Display 3 images at a time
      slidesToScroll: 1, // Scroll 1 image at a time
      autoplay: true,    // Enable autoplay
      autoplaySpeed: 2000, // 2 seconds delay for autoplay
      arrows: true,     // Optional: Display next/prev arrows
      dots: false       // Optional: Hide navigation dots
    });
  }, 2000); // 2 seconds delay before initializing the slider
});

// -----------------------------------------



