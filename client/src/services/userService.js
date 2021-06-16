import config from "../config.json";
import http from "./httpService";
export async function CreateUser(user) {
    debugger;
    return await http.post(`${config.apiUrl}/createUser`, user);
}

export async function GetAllUsers() {
    debugger;
    return await http.get(`${config.apiUrl}/getAllUsers`);
}
const UserMethods = { CreateUser, GetAllUsers };
export default UserMethods;
