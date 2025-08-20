//Задача 1
const profile = {
    name: "Egor",
    age: "19",

    sayHello: function(name) {
        return "Hello " + name
    }
}

console.log(profile.sayHello(profile.name))

//Здача 2 
const users = [
    {
        name: "Noah",
        age: 43,
        isAdmin: false,
    },
    {
        name: "Nate",
        age: 32,
        isAdmin: false,
    },
    {
        name: "alex",
        age: 24,
        isAdmin: true,
    },
    {
        name: "john",
        age: 25,
        isAdmin: false,
    },
]

const usersCount = usersArray => {
    let simpleUsersCount = 0;

    for(let i = 0; i < usersArray.length; i++) {
        if(usersArray[i].isAdmin === false) {
            simpleUsersCount += 1
        }
    }
    return simpleUsersCount;
}

console.log(usersCount(users))