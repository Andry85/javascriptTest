
const polulation = 152000;
console.log(polulation);

function leaveRecomendation(name, age) {
    if (age < 18) {
        console.log(`${name} it is better to sleap`);
    } else {
        console.log(`${name} you are old`);
    }
}

const showUser = (name = "Oleg", age=23) => {
    console.log(`Your name is ${name} and your age is ${age}`);
    leaveRecomendation(name, age);
}

showUser('Ivan', 55);