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


function whatIdontLike(things) {
	var typeofThings = typeof things;

	if (typeofThings !== "string"){
		console.log("Please send in a string")
	} else {
		console.log("I don't like" + " " + things)
	}
}

whatIdontLike("apes")

// Question 5

function question5(num1, num2){
    var convertNum1 = parseFloat(num1);
    var convertNum2 = parseFloat(num2);

    if (isNaN(convertNum1) || isNaN(convertNum2)) {
        return "Invalid argumet"
    }

	return convertNum1 - convertNum2;
}

var result = document.querySelector("#subtraction");
var sum = question5 (80, 20);
subtraction.innerHTML = sum;

// Question 6

var button = document.querySelector(".page");

function changeEverything(){
	document.title = "Updated title";
	document.body.style.backgroundColor = "yellow";
	document.querySelector("h1").style.color = "green";
	document.querySelector("h1").style.fontFamily = "impact";
	document.querySelector("ul").style.paddingInlineStart = "0px";
	document.querySelector("ul").style.listStyle = "none";
	document.querySelector("h1").innerHTML = "<a href='#'>Programming foundations Course Assignment</a>";

button.onclick = changeEverything



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

var price1 = parseFloat(toys[0].price);
var price2 = parseFloat(toys[1].price);
var price3 = parseFloat(toys[2].price);
var price4 = parseFloat(toys[3].price);

var totalPrice = price1 + price2 + price4;

var button = document.querySelector(".price");
var total = document.querySelector("#total")

button.onclick = clicked;

function clicked() {
    for (var i = 0; i < toys.length; i++) {
        var price = toys[i].price;
    }

    total.innerHTML = totalPrice;
}