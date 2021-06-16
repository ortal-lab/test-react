import produce from "immer";
import createReducer from "./utilsReducer";
const initialState = {
    user: {},
    users: [],
};
const user = {
    addUser(state, action) {
        console.log("addUser");
        state.user = action.payload;
    },
    setUsers(state, action) {
        state.users = action.payload;
    },
};

export default produce(
    (state, action) => createReducer(state, action, user),
    initialState
);
