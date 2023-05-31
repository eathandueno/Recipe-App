const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,

    }, 
    instructions: {
        type: [String],
        required: true
    },
    ingredients: {
        type: [String],
        required: true,
    },
    calories: {
        type: Number,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;