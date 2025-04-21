var Vendor = /** @class */ (function () {
    function Vendor(id, name, location) {
        this.id = id;
        this.name = name;
        this.location = location;
    }
    return Vendor;
}());
function main() {
    var vendors = [
        new Vendor(3, 'Vendor C', 'Chicago'),
        new Vendor(1, 'Vendor A', 'New York'),
        new Vendor(2, 'Vendor B', 'Los Angeles'),
    ];
    var sorted = vendors.sort(function (a, b) { return a.id - b.id; });
    for (var _i = 0, sorted_1 = sorted; _i < sorted_1.length; _i++) {
        var vendor = sorted_1[_i];
        console.log("ID: ".concat(vendor.id, ", Name: ").concat(vendor.name, ", Location: ").concat(vendor.location));
    }
}
main();
