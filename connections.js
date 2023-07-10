const mongoose = require('mongoose');
const { databaseConfig } = require('./config/database');

// MongoDB connection function
async function createMongoDBConnection(callback) {
    try {
        await mongoose.connect(databaseConfig.serverURI, { useNewUrlParser: true });
        callback && callback();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Export the connections
module.exports = {
    createMongoDBConnection: createMongoDBConnection,
};