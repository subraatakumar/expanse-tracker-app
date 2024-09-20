import { Input, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/expenseSlice";

const ExpenseFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box>
      <Input
        placeholder="Filter by description"
        onChange={handleFilterChange}
      />
    </Box>
  );
};

export default ExpenseFilter;
