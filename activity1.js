var createGreeting = function(message, name) {
    return message + ", " + name + '!';
};

var greet = greeting => console.log(greeting);

var greeting = createGreeting("hello", "Angie");

greet(greeting);

//console.log("hello");