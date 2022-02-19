import { Box, Text } from "@chakra-ui/react";
import Banner from 'react-js-banner';
import { useState } from 'react';

const WarningNotification = () => {
  const [cssState] = useState({backgroundColor: "#F94D1C", color: "#FFF", borderRadius: "25px", padding: "25px", margin:"25px"});
  
  return (  
    <Box>
      <Banner 
	      title = "Warning!"
        css={cssState} 
      />

      <div style={{border: '2px solid black',  margin: "50px", borderRadius: "25px", justifyContent: "center"}}>
        <Text>Test</Text>
      </div>
    </Box>
  );
};

export default WarningNotification;
