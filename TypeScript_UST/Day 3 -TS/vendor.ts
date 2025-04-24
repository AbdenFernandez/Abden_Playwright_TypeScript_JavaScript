interface VendorInterface {
    id: number;
    name: string;
    location: string;
}
class Vendor implements VendorInterface {
    id: number;
    name: string;
    location: string;

    constructor(id: number, name: string, location: string) {
        this.id = id;
        this.name = name;
        this.location = location;
    }
}
function main() {

    const vendors: Vendor[] = [
        new Vendor(3, 'Vendor C', 'Chicago'),
        new Vendor(1, 'Vendor A', 'New York'),
        new Vendor(2, 'Vendor B', 'Los Angeles'),
    ];


    const sorted = vendors.sort((a, b) => a.id - b.id);

    for (const vendor of sorted) {
        console.log(`ID: ${vendor.id}, Name: ${vendor.name}, Location: ${vendor.location}`);
    }
}

main();