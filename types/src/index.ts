import { City, Person, Product, Employee } from "./dataTypes";

let products = [new Product("Running Shoes", 100),
new Product("Hat", 25)];

type shapeType = { name: string };

class Collection<T extends shapeType> {
    private items: Map<string, T>;

    constructor(initialItems: T[] = []) {
        this.items = new Map<string, T>();
        this.add(...initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
    }

    get(name: string): T {
        return this.items.get(name);
    }

    get count(): number {
        return this.items.size;
    }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }


}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);

[...productCollection].forEach(p =>
    console.log(`Product: ${p.name}, ${p.price}`));

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

let P = new Product("Running Shoes", 100);
getValue(P, "name");
getValue(P, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");
