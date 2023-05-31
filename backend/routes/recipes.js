const router = require('express').Router();
let Recipe = require('../models/recipe.model');

// Get Recipes 
router.route('/').get((req,res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:username').get((req, res) => {
    const { username } = req.params;

    Recipe.find({ username:username })
        .then((recipes) => {
            if (recipes.length === 0) {
                return res.status(404).json({ message: 'Recipes not found' });
            }
            res.json(recipes);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        });
});

router.route('/:id').get((req, res)=>{
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const instructions = req.body.instructions;
    const ingredients = req.body.ingredients;
    const calories = Number(req.body.calories);
    const cookTime = Number(req.body.cookTime);

    const newRecipe = new Recipe({
        username,
        title,
        instructions,
        ingredients,
        calories,
        cookTime,
    });

    newRecipe.save()
        .then(()=> res.json('Recipe Added'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;