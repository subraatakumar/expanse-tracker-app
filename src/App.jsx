import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import AddExpense from "./components/AddExpense";
import Analytics from "./pages/Analytics";
import ThemeToggle from "./components/ThemeToggle";
import ExpenseFilter from "./components/ExpenseFilter";
import DisplayAllExpenses from "./components/DisplayAllExpenses";
import { useSelector } from "react-redux";
const App = () => {
  const expenses = useSelector((state) => state.expenses.data);
  return (
    <Router>
      <Box bg={useColorModeValue("gray.100", "gray.900")} p={4}>
        <Flex as="nav" justify="space-around" wrap="wrap">
          <NavLink to="/" exact>
            {({ isActive }) => (
              <Button
                colorScheme={isActive ? "teal" : "gray"}
                variant="outline"
              >
                Home
              </Button>
            )}
          </NavLink>
          <NavLink to="/add-expense">
            {({ isActive }) => (
              <Button
                colorScheme={isActive ? "teal" : "gray"}
                variant="outline"
              >
                Add Expense
              </Button>
            )}
          </NavLink>
          <NavLink to="/analytics">
            {({ isActive }) => (
              <Button
                colorScheme={isActive ? "teal" : "gray"}
                variant="outline"
              >
                Analytics
              </Button>
            )}
          </NavLink>
        </Flex>
      </Box>
      <ThemeToggle />
      {expenses.length > 0 && <ExpenseFilter />}{" "}
      <Routes>
        <Route path="/" element={<DisplayAllExpenses />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
};

export default App;
