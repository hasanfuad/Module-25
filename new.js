
class Person{
    constructor(pId, pName, pSalary){
        this.id = pId;
        this.name = pName;
        this.salary = pSalary;
        
    }
         chargedBill(amount){
            this.salary = this.salary - amount;
            return this.salary;
        }
}

const person1 = new Person(27, "Fuad", 2000);
const person2 = new Person(47, "Hasan", 4000);

console.log(person1.chargedBill(500));
console.log(person2);