import React from 'react';
import BookmarkIcon from '@/assets/bookmark.svg';
import mockProfilePic from '@/assets/mockProfilePic.jpg';
import Answer from '@/types/entities/Answer';
import RoundedImage from '@/components/RoundedImage';
import './AnswerControl.scss';

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
        <h1>{answer.title}</h1>
        <img src={BookmarkIcon} alt="bookmark" className="bookmark" />
      </div>
      <p>{answer.answer}</p>
    </div>
  );
}
