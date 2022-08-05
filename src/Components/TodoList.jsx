import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.AppReducer.todos);

  return (
    <Box mt="2rem">
      {todos.map((item) => (
        <Box p='1px' key={item.id}>
          <Text>{item.title}</Text>
        </Box >
      ))}
    </Box>
  );
}
