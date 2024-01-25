import { 
    Text,
    ButtonGroup,
    Button,
    Box,
    VStack,
    chakra,
} from '@chakra-ui/react';
import { css } from '@chakra-ui/react';

const filterStyle = {
  filter: 'brightness(80%) saturate(60%)',
}

const Header = () => {
    return(
        <Box
        style={filterStyle}
        backgroundImage={`url('./img011.jpg')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={{ base: "100%", md: "100%" }}
        >
        <VStack spacing={4}>
        <Text fontSize={{ base: "2em", md: "5xl", sm: "4xl" }}
        color="white"
        >
          DOMINA EL TERRENO
        </Text>
        <ButtonGroup 
        spacing={{ base: '0', sm: '5'}}
        flexDirection={{ base: "column", sm: "row" }}
        >
          <Button
          color="white" 
          variant="outline" 
          variantColor="white" 
          width={{ base: '15em', sm: '100%', md: '13em'}}
          _hover={{ bg: "white", color:"black" }}
          marginBottom="1em"
          >VER DETALLES</Button>
          <Button 
          color="white" 
          variant="outline" 
          variantColor="white"
          width={{ base: '15em', sm: '100%', md: '13em'}}
          _hover={{ bg: "white", color:"black" }}>VER VIDEO</Button>
        </ButtonGroup>
        </VStack>
    </Box>
    )
}

export default Header;