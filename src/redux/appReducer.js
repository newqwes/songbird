const CLICK_LINK_LANGUAGE = "CLICK_LINK_LANGUAGE";
const CLICK_NEXT_LEVEL = "CLICK_NEXT_LEVEL";
const NEW_GAME = "NEW_GAME";

let initialState = {
  dataLanguage: [
    [
      {
        language: "Китайский",
        id: 0,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Trener/China.mp3"),
        flag: require("../assets/img/Trener/China.svg"),
        titleDesc: "Путунхуа (общепринятое название)",
        textDesc:
          "Общепринятый нормативный китайский, или общенациональный язык путунхуа, основан на диалекте Пекина (иначе Бейцзина, как по настоянию китайцев стало воспроизводиться на Западе название столицы Китая).",
      },
      {
        language: "Русский",
        id: 1,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Trener/Russian.mp3"),
        flag: require("../assets/img/Trener/Russian.png"),
        titleDesc: "Русский (общепринятое название)",
        textDesc:
          "Ру́сский язы́к — один из восточнославянских языков, национальный язык русского народа. Является одним из наиболее распространённых языков мира — шестым среди всех языков мира по общей численности говорящих и восьмым по численности владеющих им как родным. Русский является также самым распространённым славянским языком и самым распространённым языком в Европе",
      },
      {
        language: "Английский",
        id: 2,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Trener/English.mp3"),
        flag: require("../assets/img/Trener/English.png"),
        titleDesc: "Английский (общепринятое название)",
        textDesc:
          "Англи́йский язы́к — язык англо-фризской подгруппы западной группы германской ветви индоевропейской языковой семьи. Английский язык — важнейший международный язык, что является следствием колониальной политики Британской империи в XIX веке и мирового влияния США в XX—XXI веках. Существует значительное разнообразие диалектов и говоров английского языка.",
      },
      {
        language: "Французский",
        id: 3,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Trener/Franch.mp3"),
        flag: require("../assets/img/Trener/Fran.png"),
        titleDesc: "Францу́зский (общепринятое название)",
        textDesc:
          "Францу́зский язы́к (фр. le français, la langue française) — язык французов (официальный язык Франции). Один из официальных языков франкоязычного населения Бельгии, Швейцарии (главным образом в Романдии) и Канады (главным образом в Квебеке). Французским языком пользуется население многих государств Африки, Карибского бассейна (Гаити и другие)ю.",
      },
      {
        language: "Испанский",
        id: 4,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Trener/Spanish.mp3"),
        flag: require("../assets/img/Trener/spanish.png"),
        titleDesc: "Испа́нский (общепринятое название)",
        textDesc:
          "Испа́нский, или касти́льский язык (исп. el español, el castellano) — плюрицентрический иберо-романский язык, зародившийся в средневековом королевстве Кастилия, которое включало в себя современную территорию провинции Бургос и автономных областей Ла-Риоха и Кантабрия, и широко распространившийся в других регионах мира.",
      },
      {
        language: "Немецкий",
        id: 5,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Trener/Dutch.mp3"),
        flag: require("../assets/img/Trener/Ger.png"),
        titleDesc: "Немецкий (общепринятое название)",
        textDesc:
          "Неме́цкий язык (нем. Deutsch (инф.), произносится: [ˈdɔʏ̯tʃ]; deutsche Sprache, произносится: [ˈdɔʏ̯tʃə ˈʃpʁaːχə]) — язык немцев, австрийцев, лихтенштейнцев и большей части швейцарцев, официальный язык Германии, Австрии, Лихтенштейна, один из официальных языков Швейцарии, Люксембурга и Бельгии. Является одним из самых распространённых языков в мире. Является самым распространённым языком в Западной Европе (более 90 миллионов носителей).",
      },
    ],
    [
      {
        language: "Белору́сский",
        id: 0,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Slavic/Belarus.mp3"),
        flag: require("../assets/img/Slavic/Belarus.png"),
        titleDesc: "самоназвание — беларуская мова",
        textDesc:
          "Белорусский язык — государственный язык Республики Беларусь (наравне с русским), вспомогательный язык некоторых муниципалитетов Польши, официальный язык Союзного Государства.",
      },
      {
        language: "По́льский",
        id: 1,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Slavic/Poland.mp3"),
        flag: require("../assets/img/Slavic/Poland.png"),
        titleDesc: "język polski, polszczyzna",
        textDesc:
          "По́льский язы́к — язык поляков, относящийся к лехитской подгруппе западнославянской группы славянской ветви индоевропейской языковой семьи[3][4]. Является официальным языком Польши ",
      },
      {
        language: "Ру́сский",
        id: 2,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Slavic/Russian.mp3"),
        flag: require("../assets/img/Slavic/Russian.png"),
        titleDesc: "Ру́сский язы́к",
        textDesc:
          "Ру́сский язы́к — один из восточнославянских языков, национальный язык русского народа. Является одним из наиболее распространённых языков мира — шестым среди всех языков мира",
      },
      {
        language: "Сербохорватский",
        id: 3,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Slavic/Serbo-Croatian.mp3"),
        flag: require("../assets/img/Slavic/Serbo-Croatian.png"),
        titleDesc: "srpskohrvatski",
        textDesc:
          "В бывшей Югославии рассматривался как литературный язык после распада Югославии является надъязыковым койне. Опирается на совокупность диалектов на территории бывшей Югославии.",
      },
      {
        language: "Украи́нский",
        id: 4,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Slavic/Ukrain.mp3"),
        flag: require("../assets/img/Slavic/Ukrain.png"),
        titleDesc: "українська мова",
        textDesc:
          "Общее число говорящих в мире на украинском языке, по разным оценкам, составляет от 36 до 45 млн человек. Один из славянских языков, национальный язык украинцев.",
      },
      {
        language: "Хорва́тский",
        id: 5,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Slavic/Croatian.mp3"),
        flag: require("../assets/img/Slavic/Croatian.svg"),
        titleDesc: "hrvatski jezik",
        textDesc:
          "Официальный язык Хорватии, Боснии и Герцеговины и один из шести официальных языков автономного края Воеводины в составе Сербии. Кроме того, он является официальным в некоторых муниципалитетах австрийской федеральной земли Бургенланд. Является одним из 24 официальных языков Европейского союза.",
      },
    ],
    [
      {
        language: "Норвежский",
        id: 0,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/European/Bokmal Norwegian.mp3"),
        flag: require("../assets/img/European/Norweg.png"),
        titleDesc: "norsk [nɔʂːk]",
        textDesc:
          "Язык германской ветви, на котором говорят в Норвегии. Исторически норвежский наиболее близок фарерскому и исландскому языкам, однако благодаря значительному влиянию датского языка и некоторому влиянию шведского, норвежский в общем близок также и этим языкам.",
      },
      {
        language: "Нидерландский",
        id: 1,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/European/Dutch.mp3"),
        flag: require("../assets/img/European/Niderland.png"),
        titleDesc:
          "голландский язык (немецкий), de Nederlandse taal, het Nederlands",
        textDesc:
          "Нидерландский язык часто называют голландским или фламандским. Правильнее говорить, что данные названия относятся к соответствующим группам диалектов",
      },
      {
        language: "Английский",
        id: 2,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/European/English.mp3"),
        flag: require("../assets/img/European/English.png"),
        titleDesc: " English, the English language",
        textDesc:
          "язык англо-фризской подгруппы западной группы германской ветви индоевропейской языковой семьи. Английский язык — важнейший международный язык[5], что является следствием колониальной политики Британской империи в XIX веке и мирового влияния США в XX—XXI веках.",
      },
      {
        language: "Венгерский ",
        id: 3,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/European/Hungarian.mp3"),
        flag: require("../assets/img/European/Vengriya.png"),
        titleDesc:
          "magyar, magyar nyelv, устаревшее название — мадья́рский язык",
        textDesc:
          "Язык венгров, принадлежащий к финно-угорской семье языков (уральские языки), внутри которой он, вместе с мансийским и хантыйским языками, составляет угорскую группу.",
      },
      {
        language: "Итальянский ",
        id: 4,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/European/Italian.mp3"),
        flag: require("../assets/img/European/Italian.png"),
        titleDesc: "italiano, lingua italiana",
        textDesc:
          "Официальный язык Италии, Ватикана (наряду с латинским), Сан-Марино и Швейцарии (наряду с немецким, французским и ретороманским). Признан вторым официальным языком в нескольких округах Хорватии и Словении.",
      },
      {
        language: "Шведский",
        id: 5,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/European/Swedish.mp3"),
        flag: require("../assets/img/European/Sweden.png"),
        titleDesc: "svenska",
        textDesc:
          "Язык восточной подгруппы скандинавской группы, на котором говорят в Швеции, части Финляндии и на автономных Аландских островах. Самый распространённый язык Скандинавии с числом носителей, превосходящим девять миллионов.",
      },
    ],
    [
      {
        language: "Бенгальский ",
        id: 0,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Asian/Bengali.mp3"),
        flag: require("../assets/img/Asian/Bengali.png"),
        titleDesc: "বাংলা",
        textDesc:
          "язык бенгальцев, один из языков индоарийской ветви индоевропейской языковой семьи. Распространён в Бангладеш и индийском штате Западная Бенгалия, кроме того, носители языка живут в индийских штатах Трипура, Ассам и Андаманские и Никобарские острова. Общее число говорящих на бенгали — около 250 млн человек (2009).",
      },
      {
        language: "Кантонский",
        id: 1,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Asian/Cantonese.mp3"),
        flag: require("../assets/img/Asian/Cantonese.png"),
        titleDesc: "Кантонский диалект, гуанчжоуский диалект",
        textDesc:
          "Один из китайских диалектов; один из юэских говоров, появившийся в Кантоне (французское название Гуанчжоу). Является престижным наречием юэского языка.",
      },
      {
        language: "Китайский",
        id: 2,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Asian/China.mp3"),
        flag: require("../assets/img/Asian/China.png"),
        titleDesc: "漢語",
        textDesc:
          "Кита́йский язы́к; устная речь: кит. трад. 漢語, упр. 汉语, пиньинь hànyǔ, палл. ханьюй; письменная речь: кит. 中文, пиньинь zhōngwén, палл. чжунвэнь) — язык или языковая ветвь сино-тибетской языковой семьи, состоящая из разновидностей, взаимопонятных в различной степени. Китайский язык является наиболее распространённым современным языком с общим числом говорящих более 1,3 млрд человек.",
      },
      {
        language: "Урду",
        id: 3,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Asian/Hindi-Urdu.mp3"),
        flag: require("../assets/img/Asian/Hindi-Urdu.png"),
        titleDesc: "اردو",
        textDesc:
          "Язык индоевропейской семьи индоарийской группы; функциональный стиль языка хиндустани, на разговорном уровне взаимопонятный с хинди, возникший в XIII веке.",
      },
      {
        language: "Малайский",
        id: 4,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Asian/Malay.mp3"),
        flag: require("../assets/img/Asian/Malay.png"),
        titleDesc: "Bahasa Melayu",
        textDesc:
          "Один из австронезийских языков (малайско-полинезийская ветвь, западная «подветвь»). В 1970—1990 годах в Малайзии использовалось также название малайзи́йский язы́к.",
      },
      {
        language: "Туркме́нский",
        id: 5,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Asian/Turkmen.mp3"),
        flag: require("../assets/img/Asian/Turkmen.png"),
        titleDesc: "Türkmen dili",
        textDesc:
          "Язык туркмен, относящийся к огузской группе тюркских языков. Территориально сосредоточен в Туркмении, а также в Иране, Афганистане, Турции, Таджикистане, Казахстане, Узбекистане и России.",
      },
    ],
    [
      {
        language: "Африкаанс",
        id: 0,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/African/Afrikaans.mp3"),
        flag: require("../assets/img/African/Afrikaans.png"),
        titleDesc: "die Afrikaanse taal",
        textDesc:
          "Один из германских языков (до начала XX века считался диалектом нидерландского), один из 11 официальных языков Южно-Африканской Республики, также распространён в Намибии.",
      },
      {
        language: "Ара́бский",
        id: 1,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/African/Arabic.mp3"),
        flag: require("../assets/img/African/Arabic.png"),
        titleDesc: "اللغة العربية",
        textDesc:
          "язык семитской семьи афразийской макросемьи языков. Число говорящих на арабском языке и его вариантах составляет около 240 миллионов (родной язык), и ещё около 50 миллионов человек использует арабский в качестве второго языка.",
      },
      {
        language: "Французский",
        id: 2,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/African/Franch.mp3"),
        flag: require("../assets/img/African/Franch.png"),
        titleDesc: "le français, la langue française",
        textDesc:
          "Один из официальных языков франкоязычного населения Бельгии, Швейцарии (главным образом в Романдии) и Канады (главным образом в Квебеке). Французским языком пользуется население многих государств Африки, Карибского бассейна (Гаити и другие), Французской Гвианы, в том числе и в качестве официального языка.",
      },
      {
        language: "Иракский диалект арабского языка",
        id: 3,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/African/Mesopotamian Arabic.mp3"),
        flag: require("../assets/img/African/Mesopotamian Arabic.png"),
        titleDesc: "لهجة عراقية, عراقي",
        textDesc:
          "Континуум взаимопонятных разновидностей арабского языка, сложившихся на основе бедуинского диалекта и распространённых в Ираке, а также в Сирии, Иране, Юго-Восточной Турции и среди представителей иракской диаспоры за рубежом. Общее число носителей — 15,1 млн человек (из них 11,5 млн в Ираке).",
      },
      {
        language: "Португа́льский",
        id: 4,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/African/Portuguese.mp3"),
        flag: require("../assets/img/African/Portuguese.png"),
        titleDesc: "língua portuguesa",
        textDesc:
          "Язык романской группы индоевропейской семьи языков, иберо-романская подгруппа. Развился из средневекового галисийско-португальского языка.",
      },
      {
        language: "Испанский",
        id: 5,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/African/Spanish.mp3"),
        flag: require("../assets/img/African/Spanish.png"),
        titleDesc: "el español, el castellano",
        textDesc:
          "Плюрицентрический иберо-романский язык, зародившийся в средневековом королевстве Кастилия, которое включало в себя современную территорию провинции Бургос и автономных областей Ла-Риоха и Кантабрия, и широко распространившийся в других регионах мира в эпоху Великих географических открытий.",
      },
    ],
    [
      {
        language: "Дотракийский",
        id: 0,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Fantastic/Datracish.mp3"),
        flag: require("../assets/img/Fantastic/Datracish.jpg"),
        titleDesc: "dothraki",
        textDesc:
          "Дотракин — искусственный язык, разработанный специально для дотракийских реплик в сериале «Игра престолов». Хотя язык дотракийцев постоянно упоминается в книгах Джорджа Мартина из цикла «Песнь Льда и Огня» и многие диалоги в главах Дейенерис Таргариен на самом деле ведутся именно на нём, никакого разработанного дотракийского языка до создания сериала не существовало.",
      },
      {
        language: "Эльфийский (Кве́нья)",
        id: 1,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Fantastic/Elvish.mp3"),
        flag: require("../assets/img/Fantastic/Elvish.jpg"),
        titleDesc: "Quenya",
        textDesc:
          " искусственный язык, разработанный Дж. Р. Р. Толкином. В легендариуме представляет собой один из эльфийских языков — речь нолдор и ваньяр. Слово «квенья» переводится как «наречие, язык» или, в противоположность другим языкам, «эльфийское наречие, эльфийский язык».",
      },
      {
        language: "Клингонский",
        id: 2,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Fantastic/Klingon.m4a"),
        flag: require("../assets/img/Fantastic/Klingon.jpg"),
        titleDesc: "Клингонский язык",
        textDesc:
          "Искусственный язык, разработанный лингвистом Марком Окрандом по заказу Paramount Studios для одной из инопланетных рас в вымышленной вселенной сериала «Звёздный путь». В отличие от многих языков, созданных для кинематографа, клингонский язык имеет детально разработанную грамматику, синтаксис и словарь,",
      },
      {
        language: "Валирийский",
        id: 3,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Fantastic/Valerish.mp3"),
        flag: require("../assets/img/Fantastic/Valerish.jpg"),
        titleDesc: "Valyrian",
        textDesc:
          "Являются вымышленными языковая семья в Песнь Льда и Огня серии фэнтезийных романов Джорджа Р. Р. Мартина , и в их телевизионной адаптации Игра престолов. В романах, High Valyrian и его языки - потомки часто упоминаются , но не проявленные за несколько слов. Для сериала, лингвист Дэвид Дж Петерсон создал язык высокого Valyrian",
      },
      {
        language: "R2D2",
        id: 4,
        isSelected: false,
        pinColorWin: false,
        audio: require("../assets/saundLanguage/Fantastic/r2d2.mp3"),
        flag: require("../assets/img/Fantastic/r2d2.jpg"),
        titleDesc: "Двоичный",
        textDesc:
          "Также известный как язык дроидов — компьютерный язык дроидов, состоявший из электронных биканий, трелей, писков и свистков. Все дроиды могли «говорить» или понимать двоичный.",
      },
    ],
  ],
  levelName: [
    "Разминка",
    "Словянские",
    "Европейские",
    "Азиатские",
    "Африканские",
    "Фантастические",
  ],
  isGuessed: false,
  score: 0,
  level: 0,
  newLevel: 0,
  cleanDescQues: true,
  youAreWin: 0,
  winGif: require("../assets/win.gif"),
  winGifMax: require("../assets/winMax.gif"),
  randomQuestionNumber: Math.floor(Math.random() * 6),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_LINK_LANGUAGE:
      state.cleanDescQues = false;

      if (state.isGuessed) {
        return state;
      }
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
      if (state.newLevel > 5) {
        if (state.score > 29) {
          state.youAreWin = 2;
          state.isGuessed = false;
          return state;
        }
        state.youAreWin = 1;
        state.isGuessed = false;
        return state;
      }
      state.cleanDescQues = true;
      state.isGuessed = false;
      state.level = state.newLevel;
      state.randomQuestionNumber = Math.floor(
        Math.random() * state.dataLanguage[state.level].length
      );
      return state;
    case NEW_GAME:
      state.isGuessed = false;
      state.score = 5;
      state.level = 0;
      state.newLevel = 0;
      state.cleanDescQues = true;
      state.youAreWin = 0;
      state.randomQuestionNumber = Math.floor(Math.random() * 6);
      state.dataLanguage.map((n) =>
        n.map((s) => {
          s.isSelected = false;
          s.pinColorWin = false;
          return s;
        })
      );
      return state;

    default:
      return state;
  }
};

export const clickLinkLanguageAC = (id) => ({ type: CLICK_LINK_LANGUAGE, id });
export const clickNextLevelAC = () => ({ type: CLICK_NEXT_LEVEL });
export const newGameAC = () => ({ type: NEW_GAME });
