
export const Reducer = (State = [], action) => {

    if (action.type == "javascript") {
        return action.AnsWer
    } else {
        return State
    }

}