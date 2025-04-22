export function multiply(a: number, b: number): number {
    return a * b;
}

export function getHomeDetails(name: string, age: number): string {
    return `Name: ${name}, Age: ${age}`;
}
export function getCarDetails(name: string, price: number): string {
    return `Car Name: ${name}, Price: ${price}`;
}
//function to check num is prime or not
export function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export async function getFacts(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
}

