// Question 1

var outOfStock = "false";

var message;

if (outOfStock === "true") {
    message = "Out of stock"
} else {
    message = "In stock"
}

console.log(message);

// Question 2

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
    18,19,20,21,22,23,24,25]

for (var i = 15; i <= 25; i++) {
    if (numbers[i] === 17 || numbers[i] === 20) {
        console.log(numbers[i])
    } 
}

// Question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var productContainer = document.querySelector("ul");

for (var i = 0; i < games.length; i++){

    var rating = games[i].rating;
    var max = 3.5

    if (rating < parseFloat(max))
     productContainer.innerHTML += "<li>" + games[i].title + ": " + games[i].rating+ "</li>";
}

// Question 4

// Question 5

// Question 6

// Question 7

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];