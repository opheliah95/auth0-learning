import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {
    const { isLoading, error } = useAuth0();

    return (
        <div>
            <h1>Auth0 Login</h1>
            {error && <p>There is something wrong with auth</p>}
            {!error && isLoading && <p>Getting your details...</p>}
            {!error && !isLoading && (
                <>
                    <LoginButton />
                    <LogoutButton />
                    <UserProfile />
                </>
            )}
        </div>
    )
};

export default App;