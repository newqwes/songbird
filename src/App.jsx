import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import AnswerContainer from "./components/Answer/AnswerContainer";
import QuestionContainer from "./components/Question/QuestionContainer";
import { newGameAC } from "./redux/appReducer";
import styles from "./app.module.scss";

export default (props) => {
  if (props.state.youAreWin === 1) {
    return (
      <div className={styles.winWrapper}>
        <h1>Победа!!! Вы набрали {props.state.score} очков из возможных 35!</h1>
        <img src={props.state.winGif} alt='Mark' />
        <button onClick={() => props.dispatch(newGameAC())}>
          Сыграть еще!
        </button>
      </div>
    );
  }
  if (props.state.youAreWin === 2) {
    return (
      <div className={styles.winWrapper}>
        <h1>
          Обсалютная победа!!! Максимальное число баллов! {props.state.score}{" "}
          очков!
        </h1>
        <img src={props.state.winGifMax} alt='Mark' />
        <button onClick={() => props.dispatch(newGameAC())}>Снова!</button>
      </div>
    );
  }
  console.log(
    props.state.level < 6 &&
      props.state.dataLanguage[props.state.level][
        props.state.randomQuestionNumber
      ].language
  );
  return (
    <>
      <HeaderContainer
        score={props.state.score}
        level={props.state.level}
        levelName={props.state.levelName}
      />
      <AnswerContainer state={props.state} />
      <QuestionContainer {...props} />
    </>
  );
};
