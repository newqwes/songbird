import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import QuestionContainer from './components/Question/QuestionContainer';

const App = (props) => {
  return (
    <>
      <HeaderContainer />
      <AnswerContainer  />
      <QuestionContainer stateTrener={props.stateTrener} clickLinkLanguage={props.clickLinkLanguage}/>
    </>
  )
}

export default App;
