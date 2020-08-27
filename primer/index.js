import calcTaxAndSum, { calculateTax } from "./tax";
import { printDetails, applyDiscount } from "./utils";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2) {
     super(name, price);
     this.taxRate = taxRate;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate;
    }

    toString() {
        let chainResult = super.toString();
        return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
    }

    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }
}

TaxedProduct.process(new TaxedProduct("Hat", 100, 1.2),
                     new TaxedProduct("Boots", 100));


// let hat = new TaxedProduct("Hat", 100);
// let boots = new TaxedProduct("Boots", 100);

// console.log(hat.toString());
// console.log(boots.toString());


function* createProductIterator() {
    yield new Product("Hat", 100);
    yield new Product("Boots", 100);
    yield new Product("Umbrella", 23);
}

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}

let product = new Product("Hat", 100);
applyDiscount(product, 10);
let taxedPrice = calculateTax(product.price);
printDetails(product);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);

let products = [new Product("Gloves", 23), new Product("Boots", 100)];
let totalPrice = calcTaxAndSum(...products.map(p => p.price));
console.log(`Total Price: ${totalPrice.toFixed(2)}`);
