const pets = [
  {
    name: "Buddy",
    age: 3,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
  },
  {
    name: "Milo",
    age: 2,
    gender: "Male",
    service: "Bath",
    breed: "Beagle"
  },
  {
    name: "Lucy",
    age: 4,
    gender: "Female",
    service: "Check-up",
    breed: "Bulldog"
  }
];

function showPets() {
  document.getElementById("petCount").textContent = pets.length;

  const list = document.getElementById("petList");
  list.innerHTML = ""; // clear list first

  for (let i = 0; i < pets.length; i++) {
    const li = document.createElement("li");
    li.textContent = pets[i].name;
    list.appendChild(li);
  }
}
