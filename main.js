// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

    function max (a, b) {
    	let solution;
    	if (a > b) {
    		solution = a
    	} else {
    		solution = b 
    	}

    	return solution

    } 

   max(5,6)
   max(100, 1000)
   max(2,1)
   max(0.3823828, 3.13848)


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z) {
	let solution = Math.max(x, y, z);
	document.write(solution);
}
	maxOfThree (4,566666,19);
    // function maxOfThree (x, y, z) {if (x>y>z) maxOfThree = x;} let answer = maxOfThree (10, 5, 1); console.log(10);


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {

	if(char === 'a' || char=== 'e' || char ==='i' || char === 'o' || char ==='u') {
		//return alert("righty-o");
	}

	else {
		//return alert('no, no');
	}
}

//isVowel('a');
    // function isVowel ('a', 'e', 'i', 'o', 'u', 'y') {if (''='a', 'e', 'i', 'o', 'u', 'y') isVowel=true;} let answer = true


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
	function sum (num1, num2) {
		return console.log(num1 + num2);
	}
	sum(5,6);



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(nu1, nu2, nu3) {
	return console.log((nu1 + nu2 +nu3)/3);	// body...
}

	avg(4, 3, 9);



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(argument) {
	let joe = console.log(argument.length);
	return joe; 	// body...
}

getLength('46346456346465436543');



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (c, d) {

	let solution;

	if (d > c) {
	console.log(true);
	}//end if

	else {
	console.log(false);
	}//end else

}//end if
	



	greaterThan(8,9)


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet (supertrooper) {
	console.log("Hello," + supertrooper);
}
	greet ("Tom");


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(person, noun, item, verb) {

	console.log(person + " " + "bring me a" + " " + noun + " " + item  + " " + "and" + " " + verb + " " + "on it!");

}

	madLib("Lois", "sled", "elephant", "step");










