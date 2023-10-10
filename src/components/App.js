import React, { useEffect, useState } from 'react';

function App() {
  const [getImage, setGetImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setGetImage(data.message))
      .catch((error) => console.error('Error fetching dog image:', error));
  }, []);

  return (
    <div>
      {getImage === '' ? <p>Loading...</p> : <img src={getImage} alt="random dog pic" />}
    </div>
  );
}

export default App;