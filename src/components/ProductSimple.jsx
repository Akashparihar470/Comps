


import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import {Link} from "react-router-dom"
  
  
  export default function ProductSimple({IMAGE,title,price,link}) {
    return (
      <Link to={link}  target="_blank">
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'250px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'200px'}
            
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={220}
              width={200}
              objectFit={'content'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              
            </Text> */}
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={400}>
                {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={700} fontSize={'xl'}>
                Rs{price}
              </Text>
              {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text> */}
            </Stack>
          </Stack>
        </Box>
      </Center>
      </Link>

    );
  }