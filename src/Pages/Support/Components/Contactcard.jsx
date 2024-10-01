import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const Contactcard = () => {
    return (
        <Card p="6" borderRadius="1rem" flexGrow={1}>
            <Stack spacing={6}>
                <Text fontSize="sm" color="black.60">You will receive response within 24 hours of time of submit.</Text>
                <HStack flexDir={{
                    base: 'column',
                    xl: "row"
                }}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' placeholder="Enter your Name" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Surname</FormLabel>
                        <Input type='text' placeholder='Enter your Surname' />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Enter Your Email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Textarea type='text' placeholder='Your Message' />
                </FormControl>
                <Checkbox defaultChecked >
                    <Text fontSize="12px">
                        Agree With
                        <Box as="span" color="p.purple" >Terms & Conditions.</Box>
                    </Text>
                </Checkbox>
                <Stack fontSize="14px" fontWeight="medium">
                    <Button>Send Message</Button>
                    <Button colorScheme='gray'>Book a Meeting</Button>

                </Stack>
            </Stack>
        </Card>
    )
}

export default Contactcard