import React from 'react';

function Intro({ name }) {
  return (
    <div className='intro'>
      <h3>
        Hello! My name is <span id='name'>{name}</span>. Nice to meet you!
      </h3>
    </div>
  );
}

export default Intro;
