import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/Profile"

const App = () => {
    return (
        <div>
            <h1>Auth0 Login</h1>
            <LoginButton />
            <LogoutButton />
            <UserProfile />
        </div>
    )
};

export default App;