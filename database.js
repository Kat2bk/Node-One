
let users = [
    {
        id: "1",
        name: "Aragorn",
        bio: "the king of Gondor"
    },
    {
        id: "2",
        name: "Legolas",
        bio: "son of Thranduil"
    }
]

// we need to get users
function getUsers() {
    return users
}

// find the user id by going through the users array matching it to the user id
function getUserById(id) {
    return users.find(user => {
        return user.id === id
    })
}



