function getName (firstName, lastName){
    return `${firstName} ${lastName}`;
}

function createGreeting (timeOfDay) {
    if (timeOfDay == 'morning') {
        return "Good Morning";
    } 
    if (timeOfDay == 'afternoon') {
        return "Good Afternoon";
    } 
    else return "Good Evening";
}

function name_greeting (firstName, lastName, timeOfDay) {
    const greeting =  createGreeting(timeOfDay);
    const name = getName (firstName, lastName);

    return `${greeting}, ${name}`;
}

console.log(name_greeting('Ava', 'Stone', 'morning'));
console.log(name_greeting('Noah', 'Kim', 'evening'));
console.log(name_greeting('Mina', 'Patel', 'afternoon'));
