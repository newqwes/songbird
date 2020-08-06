import React from "react";
import styles from "./question.module.scss";
import { Route } from "react-router-dom";
import Player from "../Player/Player";

const DescriptonQuestion = (props) => {
  return (
    <>
      {" "}
      {props.dataLanguage[props.level].map((n) => (
        <Route key={n.id} path={`/${n.id}`}>
          <div className={styles.description__img}>
            <img src={n.flag} alt='' />
          </div>
          <div className={styles.description__player}>
            <h3>{n.language}</h3>
            <p>{n.titleDesc}</p>
            <div>
            <Player url={n.audio} isGuessed={false} />
            </div>
          </div>
          <p>{n.textDesc}</p>
        </Route>
      ))}{" "}
    </>
  );
};
export default DescriptonQuestion;
