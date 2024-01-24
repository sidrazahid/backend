const mongoose = require('mongoose');

const connectToDatabase = async function () {
    try {
        await mongoose.connect('mongodb+srv://sidra:sidra000@cluster0.szi3ocm.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase