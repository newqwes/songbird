import React from 'react';
//import styles from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import AnswerContainer from './components/Answers/AnswerContainer';
import QuestionContainer from './components/Question/QuestionContainer';

const App: React.FC = () => {
  return <>
    <HeaderContainer />
    <AnswerContainer />
    <QuestionContainer />
  </>;
}

export default App;
