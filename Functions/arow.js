let student={
    firstname: "Muhammad",
    lastname: "Saqlain",
    fullname: () => {return  this.firstname + this.lastname}
}
console.log(student.fullname());
console.log(student.firstname);