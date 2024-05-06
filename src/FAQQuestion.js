
import React, { useState } from 'react';
import './home.css';

function FAQQuestion({question, answer}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className='FQA-question'>
      <div className='question-wrapper'>
        <div className='question'>{question}</div>
        <button className='answer-btn' onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? '-' : '+'}
        </button>
      </div>
      {showAnswer && (
        <div className='answer'>
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQQuestion;