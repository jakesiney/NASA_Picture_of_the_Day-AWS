import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/apod', async (_, res) => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});