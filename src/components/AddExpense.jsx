import { useState } from "react";
import {
  Button,
  Input,
  Select,
  Box,
  FormControl,
  FormLabel,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expenseSlice";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddExpense = () => {
    dispatch(addExpense({ description, amount: parseFloat(amount), category }));
    setDescription("");
    setAmount("");
    setCategory("");
    navigate("/", { replace: true });
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={5}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Add Expense
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Enter a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Amount</FormLabel>
          <Input
            placeholder="Enter amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            variant="filled"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="filled"
          >
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="shopping">Shopping</option>
          </Select>
        </FormControl>

        <Button colorScheme="teal" onClick={handleAddExpense} mt={4}>
          Add Expense
        </Button>
      </VStack>
    </Box>
  );
};

export default AddExpense;
