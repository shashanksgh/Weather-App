const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 8000;

// Public static path
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath));

// Handlebars
const templatePath = path.join(__dirname, "../templates/views")
app.set('view engine', "hbs");
app.set('views', templatePath);

const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath);

//Routing
app.get("/", (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.get("/weather", (req, res) => {
    res.render('weather')
});

app.get("*", (req, res) => {
    res.render('404error')
});

app.listen(port, () => {
    console.log(`Listning to port ${port}`);
});