import React, { useState } from "react";
import UserMethods from "../services/userService";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";
export default function SignUp() {
    const [state, setState] = useState({
        fullname: "",
        age: "",
        city: "",
        email: "",
        phone: "",
    });
    const dispatch = useDispatch();
    const submit = async (e) => {
        e.preventDefault();
        try {
            debugger;
            const { data } = await UserMethods.CreateUser(state);
            dispatch(actions.addUser(data.user));
            debugger;
        } catch (e) {}
    };

    return (
        <form onSubmit={(e) => submit(e)}>
            <div className="form-group">
                <label htmlFor="fullname">userName</label>
                <input
                    name="fullname"
                    type="string"
                    className="form-control"
                    id="fullname"
                    aria-describedby="emailHelp"
                    placeholder="Enter fullname"
                    onChange={(e) =>
                        setState({ ...state, fullname: e.target.value })
                    }
                />
                <label htmlFor="age">age</label>
                <input
                    name="age"
                    type="string"
                    className="form-control"
                    id="age"
                    aria-describedby="emailHelp"
                    placeholder="Enter age"
                    onChange={(e) =>
                        setState({ ...state, age: e.target.value })
                    }
                />
                <label htmlFor="city">city</label>
                <input
                    name="city"
                    type="string"
                    className="form-control"
                    id="city"
                    aria-describedby="emailHelp"
                    placeholder="Enter city"
                    onChange={(e) =>
                        setState({ ...state, city: e.target.value })
                    }
                />
                <label htmlFor="email">Email address</label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                    }
                />
                <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
                <label htmlFor="phone">phone</label>
                <input
                    name="phone"
                    type="string"
                    className="form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                    placeholder="Enter phone"
                    onChange={(e) =>
                        setState({ ...state, phone: e.target.value })
                    }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}
