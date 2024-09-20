import { useSelector } from "react-redux";
import { Box, Heading, Text } from "@chakra-ui/react";

const Analytics = () => {
  const expenses = useSelector((state) => state.expenses.data);
  const filter = useSelector((state) => state.expenses.filter);
  console.log("expenses", expenses);
  console.log("filter", filter);
  // Apply filtering based on the description if the filter is not empty
  const filteredExpenses = filter
    ? expenses.filter((expense) =>
        expense.description.toLowerCase().includes(filter.toLowerCase())
      )
    : expenses;

  // Reduce the filtered expenses to calculate category totals
  const categoryTotals = filteredExpenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <Box>
      <Heading>Analytics</Heading>
      {Object.entries(categoryTotals).map(([category, total]) => (
        <Text key={category}>
          {category}: ${total.toFixed(2)}
        </Text>
      ))}
    </Box>
  );
};

export default Analytics;
