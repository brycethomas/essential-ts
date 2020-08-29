let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let price: number = 100;
let taxAmount: string | number = calculateTax(price, false);
let taxString: string | number = calculateTax(price, true);
// console.log(`Number Value: ${taxAmount.toFixed(2)}`);
// console.log(`String Value: ${taxString.charAt(0)}`);

// let halfShare: string | number = taxAmount / 2;

// console.log(`Full amount in tax: ${taxAmount}`);
// console.log(`Half share: ${halfShare}`);

// console.log(`${12} = ${calculateTax(12)}.`);
// console.log(`${"Hello"} = ${calculateTax("Hello")}`);
// console.log(`${true} = ${calculateTax(true)}`);
