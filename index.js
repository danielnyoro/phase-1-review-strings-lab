// Write your code in this file!
let currentUser = 'Daniel Nyoro';

let welcome= 'Welcome to Flatbook,';
console.log (welcome)


let exclamation = '!';

console.log (exclamation);

let welcomeMessage =` ${welcome} ${currentUser} ${exclamation}`;


console.log(welcomeMessage);

let excitedWelcomeMessage1 = '"WELCOME TO FLATBOOK, "'

console.log (excitedWelcomeMessage1)


 const upperCaseCurrentUser = currentUser.toUpperCase();

console.log(upperCaseCurrentUser)

let excitedWelcomeMessage = `${excitedWelcomeMessage1} ${upperCaseCurrentUser} ${exclamation}`;

console.log(excitedWelcomeMessage);


let shortGreeting1 = 'Welcome, ';
console.log(shortGreeting1)


const firstInitial = currentUser.slice(0,1)
const restOfName = currentUser.slice(1);
console.log(firstInitial)
console.log(restOfName)

let shortGreeting = ` ${shortGreeting1} ${firstInitial} ${exclamation}`;
console.log(shortGreeting)
