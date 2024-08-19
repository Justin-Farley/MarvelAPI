import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PUBLIC_KEY = 'b0f4687287ea9697af0ef1a1eeb9f6fe';
const HASH = 'f66a6cce13a15feb6f2324e888b1dbc8';
const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${b0f4687287ea9697af0ef1a1eeb9f6fe}&hash=${f66a6cce13a15feb6f2324e888b1dbc8}`;

const CharacterList = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(API_URL);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-grid">
      {characters.map(character => (
        <div key={character.id} className="character-card" onClick={() => onSelectCharacter(character)}>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
