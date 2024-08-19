import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import './App.css';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="App">
      <h1>Marvel Characters</h1>
      <CharacterList onSelectCharacter={setSelectedCharacter} />
      <CharacterDetail character={selectedCharacter} />
    </div>
  );
};

export default App;
