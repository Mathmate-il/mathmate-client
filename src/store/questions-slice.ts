import { StateCreator } from 'zustand';
import Question from '../typescript/entities/Question';

export interface QuestionsSlice {
  questions: Question[];
  selectedQuestion?: Question;
  addQuestion: (question: Question) => void;
}

export const createQuestionsSlice: StateCreator<QuestionsSlice> = (set) => ({
  questions: [
    {
      id: '1',
      question: `Mocked question Natus beatae eaque adipisci perspiciatis aliquam et enim sed et enim sed 
      aliquam et enim sed et enim sed jsfgku
      occaecati beatae eaque adipisc....`,
      title: 'Mocked Question Title',
      createdAt: new Date().toString(),
      owner: {
        id: '2',
        name: '333',
        createdAt: new Date().toString(),
        email: 'test@gmail.com',
        image: '',
      },
      tags: [],
      rating: 2,
    },
  ],
  selectedQuestion: undefined,
  addQuestion(question: Question) {
    set((state: QuestionsSlice) => ({
      ...state,
      selectedQuestion: question,
      questions: [...state.questions, question],
    }));
  },
});
