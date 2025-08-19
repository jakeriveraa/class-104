function Service(name,description,price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

//let service1 = new Service("bath", "includes shampoo and towel dry", 100)

//console.log(Service)

$(document).ready(function (){

    // the user clicked register services
    // catch the click action to manipulate the information

    // select the form by id using jQuery
    $("#serviceRegistration").on("submit", function(e) {
        e.preventDefault();
        // get the values - using jQuery
        const serviceName = $("#serviceName").val();
        const serviceDescription = $("#serviceDescription").val();
        const servicePrice = $("#servicePrice").val();

        // conferm we are retrieving the values
        console.log(`${serviceName}, ${serviceDescription}, ${servicePrice}`)

        // validate the values
        if (!serviceName || !serviceDescription || servicePrice <=0) {
            // alert the user this is not valid data
            alert("All fields are required and price must be greater than 0");
            // assignment 1
            
            return;
        } else {
            // print/save the information
            // notify the user
            alert("information is being recieved");
        }

        // clear the form
        $("#serviceRegistration")[0].reset();
    });
});