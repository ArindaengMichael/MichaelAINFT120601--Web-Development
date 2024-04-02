function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const eventData = {};
    formData.forEach((value, key) => {
        eventData[key] = value;
    });

    // Display submitted data
    console.log("Submitted Data:", eventData);

    // You can add further processing or send the data to a server using AJAX
}

// Attach event listener to form submission
const form = document.getElementById("eventForm");
form.addEventListener("submit", handleFormSubmit);
