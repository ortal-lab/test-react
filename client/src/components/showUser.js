import React from "react";
import { useSelector } from "react-redux";
const ShowUser = () => {
    const user = useSelector((state) => state.user);
    return  (
        <h1>
        my name is {user.fullname?user.fullname:"fullname"} i
             am {user.age?user.age:"age"} years old and i am from {user.city?user.city:"city"}
            
        </h1>
    ) 
};
export default ShowUser;
