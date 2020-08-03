const CLICK_LINK_LANGUAGE = 'CLICK_LINK_LANGUAGE';
const CLICK_NEXT_LEVEL = 'CLICK_NEXT_LEVEL';

let initialState = {
    dataLanguage: [
        [
            {
                language: 'Китайский',
                id: 0,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Trener/China.mp3'),
                flag: require('../assets/img/Trener/China.svg'),
                titleDesc: 'Путунхуа (общепринятое название)',
                textDesc: 'Общепринятый нормативный китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).'
            },
            {
                language: 'Русский',
                id: 1,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Trener/Russian.mp3'),
                flag: require('../assets/img/Trener/Russian.png'),
                titleDesc: 'Русский (общепринятое название)',
                textDesc: 'Ру́сский язы́к — один из восточнославянских языков, национальный язык русского народа. Является одним из наиболее распространённых языков мира — шестым среди всех языков мира по общей численности говорящих и восьмым по численности владеющих им как родным. Русский является также самым распространённым славянским языком и самым распространённым языком в Европе'
            },
            {
                language: 'Английский',
                id: 2,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Trener/English.mp3'),
                flag: require('../assets/img/Trener/English.png'),
                titleDesc: 'Английский (общепринятое название)',
                textDesc: 'Англи́йский язы́к — язык англо-фризской подгруппы западной группы германской ветви индоевропейской языковой семьи. Английский язык — важнейший международный язык, что является следствием колониальной политики Британской империи в XIX веке и мирового влияния США в XX—XXI веках. Существует значительное разнообразие диалектов и говоров английского языка.'
            },
            {
                language: 'Французский',
                id: 3,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Trener/Franch.mp3'),
                flag: require('../assets/img/Trener/Fran.png'),
                titleDesc: 'Францу́зский (общепринятое название)',
                textDesc: 'Францу́зский язы́к (фр. le français, la langue française) — язык французов (официальный язык Франции). Один из официальных языков франкоязычного населения Бельгии, Швейцарии (главным образом в Романдии) и Канады (главным образом в Квебеке). Французским языком пользуется население многих государств Африки, Карибского бассейна (Гаити и другие)ю.'
            },
            {
                language: 'Испанский',
                id: 4,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Trener/Spanish.mp3'),
                flag: require('../assets/img/Trener/spanish.png'),
                titleDesc: 'Испа́нский (общепринятое название)',
                textDesc: 'Испа́нский, или касти́льский язык (исп. el español, el castellano) — плюрицентрический иберо-романский язык, зародившийся в средневековом королевстве Кастилия, которое включало в себя современную территорию провинции Бургос и автономных областей Ла-Риоха и Кантабрия, и широко распространившийся в других регионах мира.'
            },
            {
                language: 'Немецкий',
                id: 5,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Trener/Dutch.mp3'),
                flag: require('../assets/img/Trener/Ger.png'),
                titleDesc: 'Немецкий (общепринятое название)',
                textDesc: 'Неме́цкий язык (нем. Deutsch (инф.), произносится: [ˈdɔʏ̯tʃ]; deutsche Sprache, произносится: [ˈdɔʏ̯tʃə ˈʃpʁaːχə]) — язык немцев, австрийцев, лихтенштейнцев и большей части швейцарцев, официальный язык Германии, Австрии, Лихтенштейна, один из официальных языков Швейцарии, Люксембурга и Бельгии. Является одним из самых распространённых языков в мире. Является самым распространённым языком в Западной Европе (более 90 миллионов носителей).'
            },
        ],
        [
            {
                language: 'Белору́сский',
                id: 0,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Slavic/Belarus.mp3'),
                flag: require('../assets/img/Slavic/Belarus.png'),
                titleDesc: 'самоназвание — беларуская мова',
                textDesc: 'Белорусский язык — государственный язык Республики Беларусь (наравне с русским), вспомогательный язык некоторых муниципалитетов Польши, официальный язык Союзного Государства.'
            },
            {
                language: 'По́льский',
                id: 1,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Slavic/Poland.mp3'),
                flag: require('../assets/img/Slavic/Poland.png'),
                titleDesc: 'język polski, polszczyzna',
                textDesc: 'По́льский язы́к — язык поляков, относящийся к лехитской подгруппе западнославянской группы славянской ветви индоевропейской языковой семьи[3][4]. Является официальным языком Польши '
            },
            {
                language: 'Ру́сский',
                id: 2,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Slavic/Russian.mp3'),
                flag: require('../assets/img/Slavic/Russian.png'),
                titleDesc: 'Ру́сский язы́к',
                textDesc: 'Ру́сский язы́к — один из восточнославянских языков, национальный язык русского народа. Является одним из наиболее распространённых языков мира — шестым среди всех языков мира'
            },
            {
                language: 'Сербохорватский',
                id: 3,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Slavic/Serbo-Croatian.mp3'),
                flag: require('../assets/img/Slavic/Serbo-Croatian.png'),
                titleDesc: 'srpskohrvatski',
                textDesc: 'В бывшей Югославии рассматривался как литературный язык после распада Югославии является надъязыковым койне. Опирается на совокупность диалектов на территории бывшей Югославии.'
            },
            {
                language: 'Украи́нский',
                id: 4,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Slavic/Ukrain.mp3'),
                flag: require('../assets/img/Slavic/Ukrain.png'),
                titleDesc: 'українська мова',
                textDesc: 'Общее число говорящих в мире на украинском языке, по разным оценкам, составляет от 36 до 45 млн человек. Один из славянских языков, национальный язык украинцев.'
            },
            {
                language: 'Хорва́тский',
                id: 5,
                isSelected: false,
                pinColorWin: false,
                audio: require('../assets/saundLanguage/Slavic/Croatian.mp3'),
                flag: require('../assets/img/Slavic/Croatian.svg'),
                titleDesc: 'hrvatski jezik',
                textDesc: 'Официальный язык Хорватии, Боснии и Герцеговины и один из шести официальных языков автономного края Воеводины в составе Сербии. Кроме того, он является официальным в некоторых муниципалитетах австрийской федеральной земли Бургенланд. Является одним из 24 официальных языков Европейского союза.'
            },
        ]
    ],
    levelName: ['Разминка', 'Словянские', 'Европейские', 'Азиатские', 'Африканские', 'Фантастические'],
    isGuessed: false,
    score: 5,
    level: 0,
    newLevel: 0,
    cleanDescQues: true,
    randomQuestionNumber: Math.floor(Math.random() * 6)
}

export default (state = initialState, action) => {
    let randomGenerator = Math.floor(Math.random() * state.dataLanguage[state.level].length);
    switch (action.type) {
        case CLICK_LINK_LANGUAGE:
            state.cleanDescQues = false;
            if (state.isGuessed) return state;
            if (state.randomQuestionNumber === action.id) {
                state.score += 5;
                state.isGuessed = true;
                state.dataLanguage[state.level][action.id].pinColorWin = true;
                state.newLevel += 1;
                return state;
            } else {
                state.score -= 1;
                state.dataLanguage[state.level][action.id].isSelected = true;
                return state;
            }

        case CLICK_NEXT_LEVEL:
            state.cleanDescQues = true;
            state.isGuessed = false;
            state.level = state.newLevel;
            state.randomQuestionNumber = randomGenerator;
            return state;
        default: return state;
    }
}

export const clickLinkLanguageAC = (id) => ({ type: CLICK_LINK_LANGUAGE, id });
export const clickNextLevelAC = () => ({ type: CLICK_NEXT_LEVEL });