import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import QuestionContainer from './components/Question/QuestionContainer';

const App: React.FC = () => {

  let warmUp = {
      global: 'Разминка',
      cn: {
        id: 0,
        languageName: 'Китайский',
        audio: '../../assets/saundLanguage/china.mp3',
        flag: '../../assets/img/defFlag.jpg',
        titleDesc: 'Путунхуа (общепринятое название)',
        textDesc: 'Общепринятый нормативный китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).'
      },
      ru: {
        id: 1,
        languageName: 'Русский',
        audio: '../../assets/saundLanguage/china.mp3',
        flag: '../../assets/img/defFlag.jpg',
        titleDesc: 'Русский мяу (общепринятое название)',
        textDesc: 'Общепринятый нормативный китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).'
      },
    }

  return (
    <>
      <HeaderContainer />
      <AnswerContainer />
      <QuestionContainer />
    </>
  )
}

export default App;
