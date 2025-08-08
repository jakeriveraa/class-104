const petRegistrationForm = document.getElementById("petRegistrationForm")

//object literal
let pet1 = {
    name: "Buddy",
    age: 3,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
}
// how to acess to the atributes?
// obeject.attribute
//console.log(pet1.service);

// object constructor
function pet(name, age, breed, gender, service){
    this.name = name,
    this.age = age,
    this.bree = breed,
    this.gender = gender,
    this.service = service
}

// creating a pet object with the conductor

const pet2 = new pet("Lala", 3, "Cat", "Female", "Daycare");

console.log(pet2.gender);

// interpolation
console.log(`the name of pet2 is ${pet2.name} and the age is ${pet2.age}`)

function registerPet(event){

    event.preventDefault();

console.log("Register pet Function")

const name = petRegistrationForm.elements["petName"].value;
const age = petRegistrationForm.elements["petAge"].value;
const gender = petRegistrationForm.elements["petGender"].value;
const breed = petRegistrationForm.elements["petBreed"].value;
const service = petRegistrationForm.elements["petService"].value;

const newPet = new pet[name, age, gender, breed, service];
displayRow(newPet)
petRegistrationForm.requestFullscreen();

}

function displayRow(pet) {
    const table = document.getElementById("petTable");
    const tableBody = table.tBodies[0];

    const newRow = document.createElement("tr");
    
    const name = document.createElement("td");
    const age = document.createElement("td");

    name.textContent = pet.name;
    age.textContent = pet.age;

    newRow.appendChild(name);
    newRow.appendChild(age)

    tableBody.appendChild(newRow);
}