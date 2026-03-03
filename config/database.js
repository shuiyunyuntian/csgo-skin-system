const { MongoClient } = require('mongodb');

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        // Perform operations here
    } catch (err) {
        console.error('MongoDB connection error:', err);
    } finally {
        await client.close();
    }
}

module.exports = { connect };