import React from 'react';
import BookmarkIcon from '@/assets/bookmark.svg';
import Answer from '@/typescript/entities/Answer';
import './AnswerControl.scss'

interface AnswerControlProps {
  answer: Answer;
}

export default function AnswerControl({ answer }: AnswerControlProps) {
  return (
    <div className="questioControl">
      <div className="header">
        <h1>{answer.title}</h1>
        <img src={BookmarkIcon} alt="bookmark" className="bookmark" />
      </div>
      <p>{answer.answer}</p>
    </div>
  );
}
