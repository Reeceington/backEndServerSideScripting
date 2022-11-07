const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("../views/pages/index", {
        title: "Home"
    });
});

app.get("/about", (request, response) => {
    response.render("../views/pages/about", {
        title: "About"
    });
});

app.get('/animals', (request, response) => {
	let animals = [
		{name: 'Liz', breed: 'Weasel', birthYear: 2020, hasFleas: !true},
		{name: 'Maclean', breed: 'Wolf', birthYear: 2019, hasFleas: true},
		{name: 'Dave', breed: 'Dog', birthYear:2018, hasFleas: true} 
	];
	let motto = 'Good software requires robust testing';

	response.render('../views/pages/animals', {
		animals: animals,
		motto: motto
	})
}); 

// Start the server
const server = app.listen(port, (error) => {
    if (error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Server listening on port ${server.address().port}`);
});