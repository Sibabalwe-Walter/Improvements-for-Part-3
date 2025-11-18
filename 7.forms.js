// Enquiry Form
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(e) {
        e.preventDefault();

        document.getElementById("enquiryResponse").innerHTML =
            <p>Thank you! Your enquiry has been processed. We will contact you soon.</p>;
    });
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        document.getElementById("contactResponse").innerHTML =
            <p>Your message has been sent successfully!</p>;
    });
}