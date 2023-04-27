

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  Center,
  Text,
  Heading
} from '@chakra-ui/react';
import {FaMobile} from "react-icons/fa";
import {RiShoppingCartFill} from "react-icons/ri";
import {ImProfile} from "react-icons/im";
import {GiClothes} from "react-icons/gi";




export default function Navbar() {
 

  
 
  return (
    <Stack minWidth={"100%"} >
      <Box display={"flex"} justifyContent={"space-around"} className='' bg={useColorModeValue('white', 'white')} padding={6}  borderBottom={"1px solid grey"}>
          <Box>
            <Heading fontSize={{base:"30px", md:"30px",lg:"35px"}} color={"Gray.400"}>Comps</Heading>
          </Box>
             <Input border={"none"} placeholder='Search by Product code' size='md' w={"300px"}/>
          <Box display={"flex"} justifyContent={"space-around"} width={"300px"}>
          <Box  cursor={"pointer"}>
            {/* <Cartcounter/> */}
            <Box marginLeft={2}><GiClothes size={"25px"} color={"gray"}/></Box>
          <Text fontFamily={"Fredoka One,cursive"}>Products</Text>
          </Box>
          <Box  cursor={"pointer"} >
            {/* <Cartcounter/> */}
            <Box marginLeft={2}><RiShoppingCartFill size={"25px"} color={"gray"}/></Box>
          <Text fontFamily={"Fredoka One,cursive"}>Cart</Text>
          </Box>
          

            <Stack direction={'row'} spacing={7}>
              <Menu >
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                   <ImProfile size={"24px"}/> 
                  <Text fontFamily={"Fredoka One,cursive"}>Profile</Text>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <MenuDivider />
                   
                </MenuList>
              </Menu>
            </Stack>
            </Box>
      </Box>
    </Stack>
  );
}