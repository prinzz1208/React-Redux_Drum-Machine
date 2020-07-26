import { DISPLAY_CHANGE } from "./displayType";

const displayAction = (message) => {
    return {
        type: DISPLAY_CHANGE,
        message
    }
}
export default displayAction;