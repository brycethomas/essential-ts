enum Feature { Waterproof, Insulated }

type Product = {
    id: number
    name: string,
    price?: number
};

type Person = {
    id: string,
    name: string,
    city: string
};

type Employee = {
    id: string,
    company: string,
    dept: string
}

type UnionType = {
    id: number | string,
    name: string
};

type EmployedPerson = Person & Employee;

function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[] {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p => ({
        ...p,
        ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id }
    }));
}

let people: Person[] =
    [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }];
let employees: Employee[] =
    [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" }];
let dataItems: EmployedPerson[] = correlateData(people, employees);

// function correlateData(peopleData: Person[], staff: Employee[]):
//     EmployeePerson[] {
//     const defaults = { company: "None", dept: "None" };
//     return peopleData.map(p => ({
//         ...p,
//         ...staff.find(e => e.id === p.id) || {
//             ...defaults, id: p.id
//         }
//     }));
// }

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };

let bob = {
    id: "bsmith", name: "Bob", city: "London",
    company: "Acme Co", dept: "Sales"
};

// let dataItems: (Person & Employee)[] = [bob];

dataItems.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
});

function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined;
}
