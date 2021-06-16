import UserMethods from "../services/userService";
import actions from "../redux/actions";

export default fetch = (store) => (next) => async (action) => {
    if (action.type === "GET_ALL_USERS") {
        const response = await UserMethods.GetAllUsers();
        console.log(response);
        console.log(response.data);
        store.dispatch(actions.setUsers(response.data.users));
    }
    return next(action);
};
