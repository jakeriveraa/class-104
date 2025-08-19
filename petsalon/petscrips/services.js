function Service(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
}

$(document).ready(function () {
  // Hide the form initially
  $("#serviceRegistration").hide();

  // When any "book now" button is clicked
  $(".service-container button").click(function () {
    // Hide main content, show form
    $("#mainContent").hide();
    $("#serviceRegistration").show();
  });

  // When cancel button is clicked
  $("#cancelButton").click(function () {
    // Hide form, show main content
    $("#serviceRegistration").hide();
    $("#mainContent").show();
  });

  // When the form is submitted
  $("#serviceRegistration").submit(function (event) {
    event.preventDefault();

    var serviceName = $("#serviceName").val();
    var serviceDescription = $("#serviceDescription").val();
    var servicePrice = parseFloat($("#servicePrice").val());

    if (serviceName === "" || serviceDescription === "" || servicePrice <= 0 || isNaN(servicePrice)) {
      alert("Please fill all the fields and enter a valid price more than 0!");
      return;
    }

    var newService = new Service(serviceName, serviceDescription, servicePrice);

    // Get old services from local storage or empty array
    var services = localStorage.getItem("services");
    if (services === null) {
      services = [];
    } else {
      services = JSON.parse(services);
    }

    // Add new service to services list
    services.push(newService);

    // Save back to local storage
    localStorage.setItem("services", JSON.stringify(services));

    alert("Service saved!");

    // Clear form
    $("#serviceRegistration")[0].reset();

    // Hide form and show main content
    $("#serviceRegistration").hide();
    $("#mainContent").show();
  });
});
