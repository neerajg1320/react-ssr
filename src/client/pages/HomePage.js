import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>I am the best home component</div>
      <button onClick={() => console.log("Hi There!")}>Press me!</button>
    </div>
  );
};

export default HomePage;