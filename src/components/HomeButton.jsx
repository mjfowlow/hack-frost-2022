import { Box, Button, Text, Icon } from "@chakra-ui/react";

const HomeButton = ({ icon, text, color }) => {
  return (
    <Button
      bg="white"
      d="flex"
      h="100%"
      w="100%"
      filter="drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.25))"
      p="0"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap="20px"
        h="100%"
        w="100%"
      >
        <Box pb="30px">
          <Icon as={icon} fontSize="2.5rem" />
          <Text fontSize="1.5rem" fontWeight="bold">
            {text}
          </Text>
        </Box>
        <Box
          h="35px"
          w="100%"
          bg={color}
          borderRadius="0 0 6px 6px"
          position="absolute"
          bottom="0"
        ></Box>
      </Box>
    </Button>
  );
};

export default HomeButton;
