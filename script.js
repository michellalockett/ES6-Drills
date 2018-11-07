//Template literals
/*function favMovie(movie = 'The Room', name = 'World') { //Declare a new function named favMovie
    console.log(`my name is ${name} and my favorite movie is ${movie}!`); 
}

favMovie('Something New, Michella'); // Call a function // Open your developer tools and view what is printed in the console. You should see your message and parameter is undefined.
favMovie();*/




// Arrow syntax (Need help with Questions 5-10)

let favMovie = (movie = 'The Room', name = 'World') => 
    console.log(`my name is ${name} and my favorite movie is ${movie}!`);

favMovie('Something New, Michella'); // Call a function // Open your developer tools and view what is printed in the console. You should see your message and parameter is undefined.
favMovie();


let getFirstName = name => {
	let firstName = name.split('Michella1');
	return firstName[0];

};

let getFirstName2 = (firstName, lastName) => {
    console.log(`${firstName}`);
}

getFirstName = ('Creamcheese', 'Cake');
getFirstName2 = ('Lemon', 'Poundcake');



//Spread Syntax

function places(name, location, favFood) { //function that takes 3 parameters
    console.log(name, location, favFood);
};

let array = ['Michella', 'Birmingham', 'Pizza']; //an array with 3 values
places(...array);

let name = 'Michella';

/*Write a function that takes a parameter, name the parameter whatever you’d like.
Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array.
Using a for loop, loop through the spread string and console log each value of the string.*/

function random(thing) {
    let cheese = [...thing];
    for (var i = 0; i < thing.length; i++) {
		console.log(cheese[i]);

    }
}
random('OKAY!');



