import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import QuestionContainer from './components/Question/QuestionContainer';

const App: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <AnswerContainer />
      <QuestionContainer />
    </>
  )
}

export default App;
