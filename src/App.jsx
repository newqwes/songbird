import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import QuestionContainer from './components/Question/QuestionContainer';

const App = (props) => {
  return (
    <>
      <HeaderContainer score={props.score} level={props.level} levelName={props.levelName} />
      <AnswerContainer {...props}/>
      <QuestionContainer stateTrener={props.stateTrener} clickLinkLanguage={props.clickLinkLanguage} clickNextLevel={props.clickNextLevel} isGuessed={props.isGuessed} />
    </>
  )
}

export default App;
