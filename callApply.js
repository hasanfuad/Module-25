const student = {
    firstName : "Fuad",
    lastName : "Hasan",
    salary : 20000,
    totalCost : function(amount, tip, tax){
        this.salary = this.salary - amount - tip - tax;
        return this.salary;
    }
}

const anotherStudent = {
    firstName: "Fahad",
    salary: 25000
}

// Bind****

const anotherStudentCharge = student.totalCost.bind(anotherStudent);
anotherStudentCharge(2000);
console.log(anotherStudent.salary);


// Call****

student.totalCost.call(anotherStudent, 4000);
console.log(anotherStudent.salary);

//Apply***

student.totalCost.apply(anotherStudent, [5000, 500, 50]);
console.log(anotherStudent.salary);