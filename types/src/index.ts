function calculateTax(amount: number): number;
function calculateTax(amount: null): null;

function calculateTax(amount: number | null): number | null {
    if (amount != null) {
        return amount * 1.2;
    }
    return null;
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

// writeValue("Tax value", calculateTax(100, 0));

// let taxValue = calculateTax(100, 0);
// console.log(`2 args: ${taxValue}`);

// taxValue = calculateTax(100);
// console.log(`1 arg: ${taxValue}`);

// taxValue = calculateTax(100, 10, 20);
// console.log(`3 args: ${taxValue}`);

// taxValue = calculateTax(100, 10, 20, 1, 30, 7);
// console.log(`6 args: ${taxValue}`);

// let tvNull = calculateTax(null, 0);
// console.log(`tvNull: ${tvNull}`);
