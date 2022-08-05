import React from "react";
import axios from "axios";
import { useState } from "react";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
    loginSuccess,
    loginFailure,
    loginRequest,
} from "../Redux/AuthReducer/action";

const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (userEmail && password) {
            const payload = {
                email: userEmail,
                password,
            };
            dispatch(loginRequest());
            axios
                .post("https://reqres.in/api/login", payload)
                .then((res) => dispatch(loginSuccess(res.data)))
                .catch((err) => dispatch(loginFailure(err)));
        }
    };

    return (
        <>
            <Heading fontSize="28px" color="grey" textAlign="center">
                LOGIN
            </Heading>
            <Box mt="1rem" textAlign="left" p="1rem">
                <Input
                    autoComplete="on"
                    placeholder="email address"
                    onChange={(e) => setUserEmail(e.target.value)}
                    type="email"
                    value={userEmail}
                />
                <br />
                <br />
                <Input
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    value={password}
                />
                <br />
                <br />
                <Button variant="solid" colorScheme="purple" onClick={handleLogin}>
                    Login
                </Button>
            </Box>
        </>
    );
};

export default Login;
