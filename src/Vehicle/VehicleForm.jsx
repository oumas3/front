import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';

export default function VehicleForm() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Box
                maxW={'2xl'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add vehicle</Heading>
                </Stack>
                <Stack spacing={4} mt={10}>
                    <FormControl id="VEHICLE_MODEL">
                        <FormLabel>Vehicle Model</FormLabel>
                        <Input type="text" placeholder="Enter vehicle model" />
                    </FormControl>
                    <FormControl id="VEHICLE_BRAND">
                        <FormLabel>Vehicle Brand</FormLabel>
                        <Input type="text" placeholder="Enter vehicle brand" />
                    </FormControl>
                    <FormControl id="VEHICLE_MANUFACTURING_YEAR">
                        <FormLabel>Vehicle Manufacturing Year</FormLabel>
                        <Input type="text" placeholder="Enter vehicle manufacturing year" />
                    </FormControl>
                    <FormControl id="VEHICLE_REGISTRATION">
                        <FormLabel>Vehicle Registration</FormLabel>
                        <Input type="text" placeholder="Enter vehicle registration" />
                    </FormControl>
                    <FormControl id="CHASSIS_NUMBER">
                        <FormLabel>Chassis Number</FormLabel>
                        <Input type="text" placeholder="Enter chassis number" />
                    </FormControl>
                    <FormControl id="VEHICLE_MILEAGE">
                        <FormLabel>Vehicle Mileage</FormLabel>
                        <Input type="text" placeholder="Enter vehicle mileage" />
                    </FormControl>
                    <Stack
                        spacing={10}
                        direction={{ base: 'column', sm: 'row' }}
                        align={'center'}
                        justify={'center'}
                        mt={6}
                    >
                        <Button
                            w={{ base: 'full', sm: 'auto' }}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Flex>
    );
}
