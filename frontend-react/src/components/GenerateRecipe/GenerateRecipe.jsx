import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './generate.css';
import RecipeGenerator from './requestRecipe';

const GenerateRecipe = () => {
  const { username } = useParams();
  const [balance, setBalance] = useState(0);
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/tokens/${username}`)
      .then((response) => {
        const data = response.data;
        const balance = data[0].balance;
        setBalance(balance);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  const renderTokens = () => {
    const tokens = [];
    for (let i = 0; i < 5; i++) {
      if (i < balance) {
        // Filled circle for tokens
        tokens.push(<div key={i} className="token filled" />);
      } else {
        // Hollow circle for remaining slots
        tokens.push(<div key={i} className="token hollow" />);
      }
    }
    return tokens;
  };
    

  return (
    <div className='generate-container'>
      <div className='token-container'>
        {renderTokens()}
      </div>
      <RecipeGenerator  username={username}/>
    </div>
  );
};

export default GenerateRecipe;
