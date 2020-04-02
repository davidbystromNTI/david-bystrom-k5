export default class Account {
    constructor(username= new String(), email = new String(), password = new String(), firstName = new String(), lastName = new String()) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}