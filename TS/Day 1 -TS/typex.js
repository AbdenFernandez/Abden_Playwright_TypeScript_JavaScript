var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, role) {
        this.name = name; // similar java
        this.id = id;
        this.role = role;
    }
    return UserAccount;
}());
function main() {
    var user = new UserAccount("Aaryan", 1, "Trainer"); // User user = new UserAccount("Aaryan", 1);
    var user2 = new UserAccount("Kirti", 2, "Tester");
    console.log(user.role, user2.role);
}
main();
