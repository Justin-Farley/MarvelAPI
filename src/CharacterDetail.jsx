import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetail = ({ character }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (character) {
      const fetchDetails = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${character.id}?ts=1&apikey=b0f4687287ea9697af0ef1a1eeb9f6fe&hash=f66a6cce13a15feb6f2324e888b1dbc8`);
          setDetails(response.data.data.results[0]);
        } catch (error) {
          console.error('Error fetching character details:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchDetails();
    }
  }, [character]);

  if (loading) return <p>Loading...</p>;
  if (!details) return <p>Select a character to see details.</p>;

  return (
    <div className="character-detail">
      <h2>{details.name}</h2>
      <p>{details.description || 'No description available.'}</p>
      <h3>Comics:</h3>
      <ul>
        {details.comics.items.map(comic => (
          <li key={comic.name}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
