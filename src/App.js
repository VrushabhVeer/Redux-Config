import "./App.css";
import { Container } from "@chakra-ui/react";
import Todo from "./Components/Todo";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  return (
    <Container p="5" mt="2rem" w="500px" border="1px solid" borderRadius="10">
      {isAuth ? <Todo /> : <Login />}
    </Container>
  );
}

export default App;
