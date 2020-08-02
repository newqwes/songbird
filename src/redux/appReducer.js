const CLICK_LINK_LANGUAGE = 'CLICK_LINK_LANGUAGE';
const CLICK_NEXT_LEVEL = 'CLICK_NEXT_LEVEL';

export default (state, action) => {
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