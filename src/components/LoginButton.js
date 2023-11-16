import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const testLogin = () => {
    useAuth0().loginWithRedirect();
    console.log("login button pressed")
}

const LoginButton = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const testLogin = () => {
        loginWithRedirect();
        console.log("login button pressed")
    }

    return (
        !isAuthenticated && (
            <button onClick={() => testLogin()}>
                SignIn
            </button>
        )
    )
}

export default LoginButton