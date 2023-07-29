import React from 'react';
import { useTranslationContext } from '../TranslationContext';

const Excellence = (props) => {

  const { h_excellence, excellence } = useTranslationContext();

  return (
    <div className="card">
      <h2> {h_excellence} </h2>
      <p>
        {excellence}
      </p>
      </div>
  );
};

export default Excellence;


