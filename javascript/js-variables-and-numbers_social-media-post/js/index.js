console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Jetzt NEU!";
const text = "Entdecke unsere erfrischende Limo und genieße den Sommer.";
let likes = 500;
const creator="Caro Daur";
const isReported=true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(title + "\n" + text + "\n" + likes + "\n" + creator + "\n" + isReported);

likes++;
console.log(likes);
// --^-- write your code here --^--
