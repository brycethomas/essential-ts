abstract class Person {
    constructor(public id: string, public name: string,
        public city: string) { }

    getDetails(): string {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }

    abstract getSpecificDetails(): string;
}

class Employee extends Person {
    constructor(public readonly id: string, public name: string,
        public dept: string, public city: string) {
        // No statements required for plain old assignments
        super(id, name, city);
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }

    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}

class Customer extends Person {
    constructor(public readonly id: string, public name: string,
        public city: string, public creditLimit: number) {
        super(id, name, city);
    }

    getSpecificDetails() {
        return `has ${this.creditLimit} limit`;
    }
}

class Supplier extends Person {
    constructor(public readonly id: string, public name: string,
        public city: string, public companyName: string) {
        super(id, name, city);
    }

    getSpecificDetails() {
        return `works for ${this.companyName}`;
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
console.log(`Dept value: ${salesEmployee.dept}`);
// salesEmployee.id = "fidel";

let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
new Customer("ajones", "Alice Jones", "London", 500)];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    } else if (item instanceof Customer) {
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
    } else if (item instanceof Supplier) {
        console.log(`Supplier ${item.name} works for ${item.companyName}`);
    }
});

data.forEach(item => console.log(item.getDetails()));
