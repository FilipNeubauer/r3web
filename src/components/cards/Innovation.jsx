import React from 'react';
import { useTranslationContext } from '../TranslationContext';

const Innovation = (props) => {

  const { h_innovation, innovation } = useTranslationContext();

  return (
    <div className="card">
      <h2> {h_innovation} </h2>
      <p>
        {innovation}
      </p>
      </div>
  );
};

export default Innovation;