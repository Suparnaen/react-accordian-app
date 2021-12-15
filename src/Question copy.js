import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>

      </header>
      <p>{info}</p>
    </article>

  );
  ;
};

export default Question;
/*
This class indicates the use of .question class which provides box like look to each array item
In order to display it import it in App.js
import SingleQuestion from './Question copy';
Revert back to fully functioning app once done
*/