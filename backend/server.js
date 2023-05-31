const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});
const openai = new OpenAIApi(configuration);



app.post('/generate-recipe', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
        { role: 'system', content: 'You are a recipe generator use whatever ingredient from the given list as needed but try to include the most. Provide the following: title, instructions, ingredients, calories, and cook time. When you get to cook time stop and put ====STOP====' },
        { role: 'user', content: prompt },
    ],
    max_tokens: 200,
    temperature: 0.1,
    top_p: 1.0,
    n: 1,
    stop: '====STOP===='
    });
    // const responseData = response.data.choices[0].data.message.content;
    // const { title, ingredients, instructions, cookTime, calories } = extractRecipeData(responseData);

    return res.status(200).json({
    success: true,
    data: response.data.choices[0].message.content,
    });
} catch (error) {
    return res.status(400).json({
    success: false,
    error: error.response ? error.response.data : 'There was an issue with the server',
    });
}
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
// Database Connection Function
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Establish API routing
const recipeRouter = require('./routes/recipes');
const userRouter = require('./routes/users');
const tokenRouter = require('./routes/tokens');

app.use('/tokens', tokenRouter);
app.use('/recipes', recipeRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
