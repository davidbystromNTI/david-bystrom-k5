export default class Account {
    constructor(accountName = new String(), email = new String(), password = new String(), firstName = new String(), lastName = new String()) {
        this.accountName = accountName;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}