const express = require('express');
const app = express();
const path = require('node:path');

const PORT = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { message: 'Welcome to My Website', title: 'This is the home page.' });
});
 
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', message: 'Welcome to our website. We are dedicated to providing the best service possible.' });
});

app.get('/contact', (req, res) => {
    res.render('contact-me', { title: 'Contact Me', message: 'If you have any questions, feel free to reach out!' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Page Not Found', message: 'Sorry, the page you are looking for does not exist.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});