function createUser(name, lastName, age) {
    // return {
    //     userName: name,
    //     userLastName: lastName,
    //     userAge: age
    // }
    // short description - is common practice // короткая запись
    return {
        name,
        lastName,
        age,
        signIn: false
    }
}

createUser('Olha', 'Last', '17');