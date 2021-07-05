const person={
    firstName: "Fuad",
    lastName: "Hasan",
    getName: function(){
        return this.firstName, this.lastName;
    },
    salary: 25000,
    chargedBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPeople = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 20000
}

const villainPeople = {
    firstName: "Villain",
    lastName: "Alam",
    salary: 20000
}

const personCost = person.chargedBill(3000);
console.log("person:",personCost);

const heroBill = person.chargedBill.bind(heroPeople);
heroBill(2000);

console.log("Hero salary "+ heroPeople.salary);

const villainBill = person.chargedBill.bind(villainPeople);
villainBill(5000)
console.log("Villain salary: "+ villainPeople.salary);

