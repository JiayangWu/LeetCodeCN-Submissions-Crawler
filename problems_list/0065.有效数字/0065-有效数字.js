var isNumber = function(s) {
    const State = {
        STATE_INITIAL : "STATE_INITIAL",
        STATE_INT_SIGN : "STATE_INT_SIGN",
        STATE_INTEGER : "STATE_INTEGER",
        STATE_POINT : "STATE_POINT",
        STATE_POINT_WITHOUT_INT : "STATE_POINT_WITHOUT_INT",
        STATE_FRACTION : "STATE_FRACTION",
        STATE_EXP : "STATE_EXP",
        STATE_EXP_SIGN : "STATE_EXP_SIGN",
        STATE_EXP_NUMBER : "STATE_EXP_NUMBER",
        STATE_END : "STATE_END"
    }

    const CharType = {
        CHAR_NUMBER : "CHAR_NUMBER",
        CHAR_EXP : "CHAR_EXP",
        CHAR_POINT : "CHAR_POINT",
        CHAR_SIGN : "CHAR_SIGN",
        CHAR_ILLEGAL : "CHAR_ILLEGAL"
    }

    const toCharType = (ch) => {
        if (!isNaN(ch)) {
            return CharType.CHAR_NUMBER;
        } else if (ch.toLowerCase() === 'e') {
            return CharType.CHAR_EXP;
        } else if (ch === '.') {
            return CharType.CHAR_POINT;
        } else if (ch === '+' || ch === '-') {
            return CharType.CHAR_SIGN;
        } else {
            return CharType.CHAR_ILLEGAL;
        }
    }   

    const transfer = new Map();
    const initialMap = new Map();
    initialMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER);
    initialMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT);
    initialMap.set(CharType.CHAR_SIGN, State.STATE_INT_SIGN);
    transfer.set(State.STATE_INITIAL, initialMap);
    const intSignMap = new Map();
    intSignMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER);
    intSignMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT);
    transfer.set(State.STATE_INT_SIGN, intSignMap);
    const integerMap = new Map();
    integerMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER);
    integerMap.set(CharType.CHAR_EXP, State.STATE_EXP);
    integerMap.set(CharType.CHAR_POINT, State.STATE_POINT);
    transfer.set(State.STATE_INTEGER, integerMap);
    const pointMap = new Map() 
    pointMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION);
    pointMap.set(CharType.CHAR_EXP, State.STATE_EXP);
    transfer.set(State.STATE_POINT, pointMap);
    const pointWithoutIntMap = new Map();
    pointWithoutIntMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION);
    transfer.set(State.STATE_POINT_WITHOUT_INT, pointWithoutIntMap);
    const fractionMap = new Map();
    fractionMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION);
    fractionMap.set(CharType.CHAR_EXP, State.STATE_EXP);
    transfer.set(State.STATE_FRACTION, fractionMap);
    const expMap = new Map(); 
    expMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
    expMap.set(CharType.CHAR_SIGN, State.STATE_EXP_SIGN);
    transfer.set(State.STATE_EXP, expMap);
    const expSignMap = new Map();
    expSignMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
    transfer.set(State.STATE_EXP_SIGN, expSignMap);
    const expNumberMap = new Map();
    expNumberMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
    transfer.set(State.STATE_EXP_NUMBER, expNumberMap);

    const length = s.length;
    let state = State.STATE_INITIAL;

    for (let i = 0; i < length; i++) {
        const type = toCharType(s[i]);
        if (!transfer.get(state).has(type)) {
            return false;
        } else {
            state = transfer.get(state).get(type);
        }
    }
    return state === State.STATE_INTEGER || state === State.STATE_POINT || state === State.STATE_FRACTION || state === State.STATE_EXP_NUMBER || state === State.STATE_END;
};