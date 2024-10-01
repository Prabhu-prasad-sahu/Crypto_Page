import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import { PiHandDepositDuotone } from "react-icons/pi";
import { PiHandWithdrawDuotone } from "react-icons/pi";
const Portfolio = () => {
    return (
        <HStack bg="white" justify="space-between" borderRadius="xl" p="36px"
            flexDir={{
                base: 'column',
                lg: "row"
            }}
            align={{
                base: "flex-start",
                xl: "center"
            }}
        >
            <HStack
                spacing={{
                    base: "5px",
                    xl: "36px"
                }}
                flexDir={{
                    base: 'column',
                    xl: "row"
                }}
                align={{
                    base: 0,
                    xl: "96px"
                }}
            >
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" fontWeight="medium">Total Portfolio Value</Text>
                        <Icon as={FaCircleInfo} />
                    </HStack>
                    <Text textStyle="h2" fontWeight="medium">$ 112,312.24</Text>
                </Stack>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" fontWeight="medium">Wallet Balances</Text>
                    </HStack>
                    <HStack spacing="20px">
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">22.39401000</Text><Tag>BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text><Tag>INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>
            <HStack mt={{
                base: "10px"
            }}>
                <Button leftIcon={<Icon as={PiHandDepositDuotone} />}>Deposit </Button >
                <Button leftIcon={<Icon as={PiHandWithdrawDuotone} />}>Withdraw </Button>
            </HStack>
        </HStack >
    )
}

export default Portfolio