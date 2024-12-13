{
    interface User {
        id: number;
        name: string;
        email: string;
    }

    class User implements User {
        constructor(id: number, name: string, email: string){

        }
    
        get getUserInfo(){
            return `${this.id} ${this.name} ${this.email}`
        }
    }

    const user = new User(1, 'bongjin', 'sketchband@naver.com')
    console.log(user.getUserInfo)

    interface Admin extends User{
        role: string[];
        permissions: string[];
    }

    class Admin implements Admin{
        constructor(id: number, name: string, email:string, role: string[], permission:string[]){

        }
        get getPermissions() {
            return `${this.id} ${this.name} ${this.email} ${this.role} ${this.permissions}`
        }
    }

    const admin = new Admin(2, 'Alice Admin', 'alice@example.com', ['admin'], ['read', 'write', 'delete']);
    console.log(admin.getPermissions)
    
}
