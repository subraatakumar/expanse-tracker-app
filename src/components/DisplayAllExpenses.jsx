import React from "react";
import { Box, Heading, Text, Stack, Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function DisplayAllExpenses() {
  const expenses = useSelector((state) => state.expenses.data);
  const filter = useSelector((state) => state.expenses.filter);

  const filteredExpenses = filter
    ? expenses.filter((expense) =>
        expense.description.toLowerCase().includes(filter.toLowerCase())
      )
    : expenses;

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
      {expenses.length > 0 && (
        <Heading as="h3" size="lg" mb={4}>
          Display All Expenses
        </Heading>
      )}
      {filteredExpenses.length > 0 ? (
        <Stack spacing={4}>
          {filteredExpenses.map((expense, index) => (
            <Box
              key={index}
              p={3}
              borderWidth={1}
              borderRadius="md"
              boxShadow="sm"
            >
              <Text fontWeight="bold">{expense.description}</Text>
              <Text>
                Amount: ${expense.amount.toFixed(2)} - Category:{" "}
                {expense.category}
              </Text>
              <Divider />
            </Box>
          ))}
        </Stack>
      ) : (
        <Text>No expenses found.</Text>
      )}
    </Box>
  );
}

export default DisplayAllExpenses;
