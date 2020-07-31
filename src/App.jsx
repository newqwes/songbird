import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import QuestionContainer from './components/Question/QuestionContainer';

const App = () => {
  const chinaAudio = require('./assets/saundLanguage/China.mp3');
  let stateTrener = [
      {
        language: 'Китайский',
        id: 0,
        isSelected: true,
        audio: chinaAudio,
        flag: '../../assets/img/defFlag.jpg',
        titleDesc: 'Путунхуа (общепринятое название)',
        textDesc: 'Общепринятый нормативный китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).'
      },
      {
        language: 'Русский',
        id: 1,
        isSelected: false,
        audio: '../../assets/saundLanguage/italian.mp3',
        flag: '../../assets/img/defFlag.jpg',
        titleDesc: 'Русский (общепринятое название)',
        textDesc: 'Общепринятый Русский китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).'
      }
    ]

  return (
    <>
      <HeaderContainer />
      <AnswerContainer  />
      <QuestionContainer stateTrener={stateTrener}/>
    </>
  )
}

export default App;
