import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Flex, Grid, HStack, Icon, Stack, Text } from '@chakra-ui/react'

import { AiFillDollarCircle } from "react-icons/ai";
const Transactions = () => {
    const transaction = [
        {
            id: 1,
            logo: AiFillDollarCircle,
            transName: "INR Deposit",
            date: "2022-06-09 7:06 PM",
            amount: "+ ₹81,123.10"
        },
        {
            id: 2,
            logo: AiFillDollarCircle,
            transName: "BTC Sell",
            date: "2022-05-27 12:32 PM",
            amount: "- 12.48513391 BTC"
        },
        {
            id: 3,
            logo: AiFillDollarCircle,
            transName: "INR Deposit",
            date: "2022-06-09 7:06 PM",
            amount: "+ ₹81,123.10"
        },

    ]
    return (
        <CustomCard h="full">
            <Text fontSize="sm" mb={6} color="black.80">Recent Transactions</Text>
            {transaction.map((trans) => (
                <HStack key={trans.id} mb={4}>
                    <Grid placeItems="center"
                        bg="black.5"
                        boxSize={10}
                        borderRadius="full"
                    >
                        <Icon as={trans.logo} />
                    </Grid>
                    <Flex justify="space-between" w="full">
                        <Stack spacing={0}>
                            <Text>{trans.transName}</Text>
                            <Text fontSize="sm" color="black.40">{trans.date}</Text>
                        </Stack>
                        <Text>{trans.amount}</Text>
                    </Flex>
                </HStack>
            ))}
            <Button w="full" colorScheme='gray' >View All</Button>

        </CustomCard >

    )
}

export default Transactions