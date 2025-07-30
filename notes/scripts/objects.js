// defining an object literal

let student1 = {
    age: 33,
    name: "fernanda",
    email: "blablabla@oklol.com",
    course: "fsdi",
    unit: 103
};

let student2 = {
    age: 32,
    email: "okjajaja@ok.com",
    course: "mdi",
    unit: 101
};

//print the array
console.log(student1);

// print the name of the second student (remmember, in objects we dont have an index)
console.log(student2.name);

//print the email of student 1
console.log(student1.email);

//print the student 1 name and unit
console.log(student1.name, student1.unit);

let name = "fer"
//interpolations
   console.log(`the student 1 name is ${student1.name} and the unit is ${student1.unit} and the nickname is ${name}`);