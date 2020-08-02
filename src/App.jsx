import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import QuestionContainer from './components/Question/QuestionContainer';

export default (props) => {
  return (
    <>
      <HeaderContainer score={props.state.score} level={props.state.level} levelName={props.state.levelName} />
      <AnswerContainer state={props.state}/>
      <QuestionContainer {...props} />
    </>
  )
}
