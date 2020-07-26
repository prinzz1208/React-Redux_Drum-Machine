const { DISPLAY_CHANGE } = require("./displayType");

const initialState = {
    message: " "
}
const displayReducer = (state = initialState, action ) => {
    switch (action.type) {
        case DISPLAY_CHANGE:
            return {
                message: action.message
            }
        default: return state;
    }
}

export default displayReducer;