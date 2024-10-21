const express = require('express');
const lodgify = require('@api/lodgify'); 
require('dotenv').config({ path: './lodgify.env' }); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Authentication for Lodgify API
lodgify.auth('ty3966SrmJHdhGQFNtO1QYPr3JFlkoNHkyivBtvevflTSei7/lYnZbute2hMm5cs');

// Route to get property details
app.get('/api/property', async (req, res) => {
  const { id } = req.query; // Property ID passed in the query
  try {
    const response = await lodgify.getPropertyByIdV2({ includeInOut: 'false', id });
    res.json(response.data); // Send the property data as the response
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).send('Error fetching property');
  }
});

// Route to handle webhook events from Lodgify
app.post('/api/webhook', (req, res) => {
  const event = req.body; // Assuming the webhook sends a JSON payload
  console.log('Received webhook event:', event);
  res.status(200).send('Webhook received');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
