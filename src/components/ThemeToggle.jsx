import { useColorMode, Button } from "@chakra-ui/react";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeToggle;
