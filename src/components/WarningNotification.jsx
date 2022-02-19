import { Box, Text, Heading, Image } from "@chakra-ui/react";

import mapBackground from "../images/mapBackground.jpg";
import warningLabel from "../images/outline_warning_amber_black_36dp.png"


const WarningNotification = () => {

  return (  
    <Box bg="#D0D0D0" bg="rgba(255,0,0,0.1)" bgImage={mapBackground} bgPosition="center" bgSize="cover" h="896px">
      <Box
      display="flex" flexDir="column"
      alignItems="center" justifyContent="center"
      borderBottomRadius="15px"
      bg="#F94D1C"
      w="75%"
      mx="12.5%" py="2%"
      color="white" fontFamily="Arial" fontSize="25px" letterSpacing="3px"
      >
        <Image src={warningLabel}/>
        <Text>Warning</Text>
      </Box>

      {/* Warning box */}
      <Box 
        bg="White"
        display="flex" flexDir="column"
        border="solid" borderWidth="2px" borderColor="black" borderRadius="25px"  
        mt="60%" mx="50px"  
        alignItems="center" justifyContent="center">

        <Heading>Warning!</Heading>
        <Text mt="25px"> Entering a known danger zone! </Text>

        {/*Tip Box*/}
        <Box
        color="white"
        bg="#F94D1C"
        borderRadius="5px"
        px="80px"
        my="15px">
          <Text>Got a Tip?</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default WarningNotification;
