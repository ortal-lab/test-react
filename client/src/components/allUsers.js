import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserMethods from "../services/userService";
import actions from "../redux/actions";

const AllUsers = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getAllUsers());
    }, []);
    return users ? (
        users.map((user) => (
            <p>
                ` name: {user.fullname} email:{user.email} `
            </p>
        ))
    ) : (
        <h1>Loading </h1>
    );
};
export default AllUsers;
