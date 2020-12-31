
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

// create user
function createUser(data) {
    const newUser = {
        id: String(users.length + 1),
        ...data
    }

    users.push(newUser)
    return newUser
}

//update user
function updateUser(id, data) {
    const index = users.findIndex(user => {
        return user.id === id
    })

   users[index] = {
       ...users[index],
       ...data
   }
    
   return users[index]
}

//delete user
function deleteUser(id) {
    users = users.filter(user => {
        return user.id !== id
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}