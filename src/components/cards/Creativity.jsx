import React from 'react';
import { useTranslationContext } from '../TranslationContext';

const Creativity = (props) => {
  const { h_creativity, creativity } = useTranslationContext();

  return (
    <div className="card">
      <h2> {h_creativity} </h2>
      <p>
        {creativity}
      </p>
      </div>
  );
};

export default Creativity;