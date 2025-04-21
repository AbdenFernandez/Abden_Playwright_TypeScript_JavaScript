type roles = "Trainer" | "Developer" | "Tester";

interface User {
  name: string; //String name;
  id: number; // int id;
  role: roles;
}

class UserAccount {
  name: string; // String name
  id: number; // int id
  role: roles;

  constructor(name: string, id: number, role: roles) { // UserAccount(String name, int id) {}
    this.name = name; // similar java
    this.id = id;
    this.role = role;
  }
}

function main() {
    const user: User = new UserAccount("Aaryan", 1, "Trainer"); // User user = new UserAccount("Aaryan", 1);
    const user2: User = new UserAccount("Kirti", 2, "Tester");
    
    console.log(user.role, user2.role);
}

main();

