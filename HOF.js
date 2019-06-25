const giveAccessTo = (person) => console.log('Access Granted to ' + person.name + ' as ' + person.level);

function authenticate(person) {
    let array = [];

    for (let i = 0; i < person.latency; i++)
        array.push(i)

    return giveAccessTo(person)
}

function letPerson(person, fn) {
    if (person.level === 'admin')
        return fn(person)
    else if (person.level === 'user')
        return fn(person)
}

function sing(person) {
    console.log('la la la my name is ' + person.name)
}

letPerson({level: 'user', name: 'Tim', latency : 100000}, authenticate)
letPerson({level: 'admin', name: 'Eva', latency : 500000}, authenticate)
letPerson({level: 'user', name: 'Tim'}, sing)

// Higher order functions, gets a fn as parameters or returns a function.
// so that's possible to write generic functions !
