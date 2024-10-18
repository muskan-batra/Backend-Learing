import React, { useState } from 'react';
import axios from 'axios';

const StarsWars = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/people/');
  const [error, setError] = useState('');

  const fetchData = () => {
    setLoading(true);
    setError('');
    
    axios.get(apiUrl)
      .then(response => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Star Wars characters:', error);
        setError('Failed to fetch data. Please check the URL.');
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading Star Wars characters...</p>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#3F51B5' }}>Star Wars Characters</h1>

     
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          placeholder="Enter API URL"
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            marginRight: '10px',
            fontSize: '16px',
          }}
        />
        <button
          onClick={fetchData}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3F51B5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Fetch Data
        </button>
      </div>

 
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

   
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {characters.map((character, index) => (
          <li key={index} style={{
            marginBottom: '20px', 
            padding: '15px', 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            backgroundColor: '#f9f9f9'
          }}>
            <h2>{character.name}</h2>
            <p><strong>Height:</strong> {character.height} cm</p>
            <p><strong>Mass:</strong> {character.mass} kg</p>
            <p><strong>Hair Color:</strong> {character.hair_color}</p>
            <p><strong>Eye Color:</strong> {character.eye_color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarsWars;
