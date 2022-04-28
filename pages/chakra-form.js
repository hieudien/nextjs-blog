import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react'

export default function ChakaraForm() {
  return (
    <Container maxW='container.md' p={0}>
      <Flex h='100vh' py={20}>
        <VStack w='full' h='full' p={5} spacing={5} alignItems='flex-start'>
          <VStack spacing={3} alignItems='flex-start'>
            <Heading size='xl'>Your details</Heading>
            <Text fontSize='sm'>This is a demo text</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={3}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder='John'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder='Doe'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Hanoi, Vietnam'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder='hanoi'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value='vn'>Vietnam</option>
                  <option value='us'>USA</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>Ship to billing address</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button size='md' w='full'>Place Order</Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <VStack w='full' h='full' p={5} spacing={5} alignItems='flex-start' bg='gray.50'>
          <VStack alignItems='flex-start'>
            <Heading size='xl'>Your cart</Heading>
            <Text fontSize='sm'>
              This is another demo text {' '}
              <Button variant='link' colorScheme='black'>
                 and a text buton
              
              </Button>
            </Text>
          </VStack>
          <HStack spacing={1} alignItems='center' w='full'>
            <AspectRatio ratio={1} w={20}>
              <Image src='https://hieudien.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=384&q=75'></Image>
            </AspectRatio>
            <Stack spacing={0} w='full' direction='row' justifyContent='space-between' alignItems='center'>
              <VStack w='full' spacing={0} alignItems='flex-start'>
                <Heading size='sm'>Penny board</Heading>
                <Text fontSize='xs'>PUSNGNCVYS</Text>
              </VStack>
            </Stack>
            <Heading size='sm' textAlign='end'>$119.00</Heading>
          </HStack>
          <VStack align='stretch' w='full' spacing={2}>
            <HStack justifyContent='space-between'>
              <Text fontSize='sm'>Shipping</Text>
              <Heading size='xs'>$10.00</Heading>
            </HStack>
            <HStack justifyContent='space-between'>
              <Text fontSize='sm'>Tax</Text>
              <Heading size='xs'>$10.00</Heading>
            </HStack>
            <HStack justifyContent='space-between'>
              <Text fontSize='sm'>Discount</Text>
              <Heading size='xs' color='red.400'>-$10.00</Heading>
            </HStack>
            <Divider></Divider>
            <HStack justifyContent='space-between'>
              <Text fontSize='sm'>Total</Text>
              <Heading size='md'>$10.00</Heading>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  )
}