import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/TodoReducer/action";


export default function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    const addTodoAction = addTodo(payload);
    dispatch(addTodoAction);
  };

  return (
    <>
      <Heading fontSize="28px" color="grey" textAlign="center">
        TODOLIST
      </Heading>
      <Flex mt="1.5rem" gap="2">
        <Input
          value={title}
          onChange={handleChange}
          placeholder="write something..."
        />
        <Button variant="solid" colorScheme="twitter" onClick={handleAdd}>Add+</Button>
      </Flex>
    </>
  );
}
