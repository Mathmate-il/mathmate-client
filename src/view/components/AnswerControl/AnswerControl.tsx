import React from 'react';
import BookmarkIcon from '@/assets/bookmark.svg';
import './AnswerControl.scss';
import mockProfilePic from '@/assets/mockProfilePic.png';
import RoundedImage from '../RoundedImage';
import Answer from '../../../model/entities/Answer';

interface AnswerControlProps {
  answer: Answer;
}

export default function AnswerControl({ answer }: AnswerControlProps) {
  return (
    <div className="answerControl">
      <div className="header">
        <RoundedImage
          src={mockProfilePic}
          alt="profile pic"
          width="40px"
          height="40px"
        />
        <span className="p2">{answer.owner.name}</span>
        <h1>{answer.answer}</h1>
        <img src={BookmarkIcon} alt="bookmark" className="bookmark" />
      </div>
      <p>{answer.answer}</p>
    </div>
  );
}
