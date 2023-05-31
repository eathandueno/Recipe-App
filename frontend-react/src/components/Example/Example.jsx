import React, {useState} from 'react';
import butter from './icons/butterIcon.png';
import milk from './icons/Milk.jpg';
import pasta from './icons/pasta.png';
import bread from './icons/bread.jpg';
import flour from './icons/flour.png';
import cheese from './icons/cheese.png';
import carrot from './icons/carrot.jpg';
import rice from './icons/rice.png';
import Broccoli from './icons/broccoli.jpg';
import lettuce from './icons/lettuce.jpg';
import eggs from './icons/eggs.jpg';
import beans from './icons/beans.png';
import tofu from './icons/tofu.png';
import chicken from './icons/chcikenIcon.png';
import peppers from './icons/peppers.jpg';
import avacado from './icons/avacado.png';
import beef from './icons/beef.jpg';
import yogurt from './icons/yogurt.png'
import './example.css'
const Example = () => {
    const [ingredients, setIngredients] = useState([])
    
    const toggleIngredient = (selectedIngredient) => {
        const isAlreadySelected = ingredients.some(
            (ingredient) => ingredient.name === selectedIngredient.name
        );
    
        if (isAlreadySelected) {
            const updatedIngredients = ingredients.filter(
            (ingredient) => ingredient.name !== selectedIngredient.name
            );
            setIngredients(updatedIngredients);
        } else {
            const updatedIngredients = [...ingredients, selectedIngredient];
            setIngredients(updatedIngredients);
        }
    };

    const handleClick = (event) => {
        const name = event.currentTarget.getAttribute('alt');
        const src = event.currentTarget.getAttribute('src');
        const itemsToAdd = [{src, name}];
        console.log(itemsToAdd)
        toggleIngredient(itemsToAdd);
    };
    const ingredientData = {
        grains: [
            { name: 'Flour', src: flour },
            { name: 'Pasta', src: pasta },
            { name: 'Rice', src: rice },
            { name: 'Bread', src: bread },
        ],
        dairy: [
            { name: 'Butter', src: butter },
            { name: 'Milk', src: milk },
            { name: 'Cheese', src: cheese },
            { name: 'Yogurt', src: yogurt },
        ],
        veggies: [
            {name: 'Broccoli', src: Broccoli},
            {name: 'Lettuce', src: lettuce},
            {name: 'Carrot', src: carrot},
            {name: 'Peppers', src: peppers},
            {name: 'Avacado', src: avacado}
        ],
        protein : [
            {name: 'Chicken', src: chicken},
            {name: 'Tofu', src: tofu},
            {name: 'Eggs', src: eggs},
            {name: 'Beef', src: beef},
            {name: 'Beans', src: beans}
        ]
    };
    

    return (
    <div className='container'>
        
        <div className='table'>
         <h1>TBD</h1>
        {ingredients.map((ingredient, index) => (
            <div className='table-item' key={index}>
                <img src={ingredient.src} alt={ingredient.name} />
                <p>{ingredient.name}</p>
            </div>
        ))}
        </div>
        <div className='icon-container'>
        {Object.entries(ingredientData).map(([category, items]) => (
            <div className={category + ' foods'} key={category}>
                {items.map((item, index) => (
                <div
                    onClick={handleClick}
                    className={`icons ${ingredients.some(
                    (ingredient) => ingredient.name === item.name) ? 'selected' : ''}`}
                    key={index}
                    data-src={item.src}
                    data-name={item.name}
                    >
                    <img className='icon' src={item.src} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            ))}
            </div>
        ))}
        </div>
    </div>
    )
}

export default Example