
// Change background color on hover for #band section
var bandSection = document.getElementById("band");
if (bandSection) {
    bandSection.addEventListener("mouseover", function() {
        this.style.backgroundColor = "gray";
    });

    bandSection.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    });
}

// Alert on button click in ticket modal when "PAY" is clicked
var payButton = document.querySelector("#ticketModal .w3-button.w3-teal.w3-right");
if (payButton) {
    payButton.addEventListener("click", function() {
        alert("Thank you for purchasing a ticket!");
    });
}

// Animate "buy tickets" buttons to bounce when hovered
var buyTicketsButtons = document.querySelectorAll("#tour button");
buyTicketsButtons.forEach(function(button) {
    button.addEventListener("mouseover", function() {
        this.style.transition = "transform 0.3s ease-out";
        this.style.transform = "translateY(-10px)";
    });

    button.addEventListener("mouseout", function() {
        setTimeout(() => {
            this.style.transition = "transform 0.3s ease-out";
            this.style.transform = "translateY(0)";
        }, 50);
    });
});

// Fade-in effect after the page is loaded
window.addEventListener("load", function() {
    var body = document.body;
    body.style.opacity = 0;
    body.style.visibility = "visible";
    setTimeout(function() {
        body.style.transition = "opacity 1.5s ease-in-out";
        body.style.opacity = 1;
    }, 100);
});
