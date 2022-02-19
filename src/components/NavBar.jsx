import { Box, Heading, Icon } from "@chakra-ui/react";
import {FiMenu} from "react-icons/fi";
import {BsFillQuestionCircleFill} from "react-icons/bs";

const NavBar = () => {
  return (
    <Box
      filter="drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.25))"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#868FC6"
      p="15px"
    >
      <Icon as={FiMenu} fontSize="1.5rem" />
      <Heading>App Name</Heading>
      <Icon as={BsFillQuestionCircleFill} fontSize="1.5rem" />
    </Box>
  );
};

export default NavBar;
