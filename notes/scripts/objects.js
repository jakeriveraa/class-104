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
    name: "zane",
    email: "okjajaja@ok.com",
    course: "mdi",
    unit: 101
};

//print the array
console.log(student1);

// print the name of the second student (remmember, in objects we dont have an index)
console.log(student2.name); //dot notation
console.log(student2[`name`]) //bracket notation

//print the email of student 1
console.log(student1.email);

//print the student 1 name and unit
console.log(student1.name, student1.unit);

let name = "fer"
//interpolations
   console.log(`the student 1 name is ${student1.name} and the unit is ${student1.unit} and the nickname is ${name}`);

   let studentList = [student1, student2];
   studentList.push(student1);
   studentList.pop();
   console.log(studentList);
   console.log(studentList[0].age);

   for (let i=0;i<studentList.length;i++){
    console.log(`the names are: ${studentList[i].name}`)
   }

   function Student(age, name, email, course, unit){
        this.age = age;
        this.name = name;
        this.email = email;
        this.course = course;
        this.unit = unit;
   }

   let student3 = new student("24", "luis", "doodoo@gmail.com", "FSDI", 104);
   let student4 = new student("19", "carlos", "carlo@jaja.com", "FSDI", 104);

   console.log(student3);
   console.log(student4);

   console.log(student3.name);
   console.log(student3[`name`]);