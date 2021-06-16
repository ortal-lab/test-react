import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import ShowUser from "./components/showUser";
import AllUsers from "./components/allUsers";

function App() {
    return (
        <div>
            <header>
                <Navbar />
                <Switch>
                    <Route path="/step1" component={SignUp} />
                    <Route path="/step2" component={ShowUser} />
                    <Route path="/step3" component={AllUsers} />
                </Switch>
            </header>
        </div>
    );
}

export default App;
