
    // Perform validation
    if (validateForm()) {
        // AJAX form submission using jQuery
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(response) {
                // Display success message and clear form
                formMessages.innerHTML = "<p class='success'>Message sent successfully!</p>";
                form.reset();
            },
            error: function(xhr, textStatus, errorThrown) {
                // Display error message
                formMessages.innerHTML = "<p class='error'>Error: " + xhr.responseText + "</p>";
            }
        });
    }

function validateForm() {
    // Perform form validation
    let isValid = true;
    // Validate name
    if (nameInput.value.trim() === '') {
        isValid = false;
        displayError('Name is required.');
    }
    // Validate email
    if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        displayError('Invalid email address.');
    }
    // Validate message
    if (messageInput.value.trim() === '') {
        isValid = false;
        displayError('Message is required.');
    }
    return isValid;
}

function isValidEmail(email) {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayError(message) {
    // Display error message
    formMessages.innerHTML = "<p class='error'>" + message + "</p>";
}

// jQuery for Animated Feedback Messages
$(document).ready(function() {
    // Fade out form messages after a certain time
    $('#form-messages').delay(5000).fadeOut('slow');
});
